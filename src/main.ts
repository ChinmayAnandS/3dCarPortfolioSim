//npx vite
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import TWEEN from '@tweenjs/tween.js'
import planeSetup from './lib/planeSetup'
import { GUI } from 'dat.gui'
import Bricks from './lib/Bricks'
import { CustomBody } from './lib/CustomBody'
import Bowling from './lib/Bowling'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

//scene
const scene = new THREE.Scene()

//light
const light = new THREE.DirectionalLight(undefined, Math.PI)
light.position.set(1, 1, 1)
scene.add(light)

const light2 = new THREE.DirectionalLight(undefined, Math.PI)
light2.position.set(-1, -1, -1)
scene.add(light2)

//axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(8, 3, 0)
const endPosition = { x: 4.5, y: 3.36, z: -2.15 }

// Set up the tween
const tween = new TWEEN.Tween(camera.position)
  .to(endPosition, 2000) // 2000 milliseconds (2 seconds) for the transition
  .onUpdate(() => {
    // Update the camera position on each tween update
    camera.position.set(camera.position.x, camera.position.y, camera.position.z);
  })
  .easing(TWEEN.Easing.Quadratic.InOut); // Use an easing function for smoothness

// Start the tween after a delay of 3 seconds (3000 milliseconds)
setTimeout(() => {
  tween.start();
}, 1500);

//renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

//resize event listener
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

//orbit controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableDamping = true
controls.dampingFactor = 0.1
controls.enableZoom = true
controls.maxDistance = 6
controls.minDistance = 3
controls.maxPolarAngle = Math.PI / 2.5
controls.minPolarAngle = 0
controls.cursor = new THREE.Vector3(10, 10, 10)

//physics
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -10, 0)
})

//create car chassis
const carDimensions = {
  length: 1.45,
  width: 0.25,
  height: 0.75
}
const carBody = new CustomBody({
  mass: 300,
  shape: new CANNON.Box(new CANNON.Vec3(carDimensions.length, carDimensions.width, carDimensions.height))
})
carBody.position.set(0, 5, 0)
carBody.angularVelocity.set(0, 0.5, 0)
carBody.angularDamping = 0.1
world.addBody(carBody)

//vehicle
const vehicle = new CANNON.RaycastVehicle({
  chassisBody: carBody,
  // indexRightAxis: 0,
  // indexUpAxis: 1,
  // indexForwardAxis: 2
})

//wheel options
const wheelOptions = {
  radius: 0.25,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.5,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
  segments: 16
}

//set connection points for wheels
wheelOptions.chassisConnectionPointLocal.set(-carDimensions.length + 0.45, 0, carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(-carDimensions.length + 0.45, 0, -carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(carDimensions.length - 0.45, 0, carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(carDimensions.length - 0.45, 0, -carDimensions.height)
vehicle.addWheel(wheelOptions)

//add vehicle to world
vehicle.addToWorld(world)

//add the wheel bodies
const wheelBodies: any[] = []
const wheelMaterial = new CANNON.Material('wheel')
vehicle.wheelInfos.forEach((wheel) => {
  const cylinder = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius, wheelOptions.segments)
  const wheelBody = new CANNON.Body({
    mass: 0,
    material: wheelMaterial
  })
  wheelBody.type = CANNON.Body.KINEMATIC
  wheelBody.collisionFilterGroup = 0
  const quaternion = new CANNON.Quaternion().setFromEuler(Math.PI / 2, 0, 0)
  wheelBody.addShape(cylinder, new CANNON.Vec3(), quaternion)
  wheelBodies.push(wheelBody)
  world.addBody(wheelBody)
})

//update wheel bodies
world.addEventListener('postStep', () => {
  for (let i = 0; i < vehicle.wheelInfos.length; i++) {
    vehicle.updateWheelTransform(i)
    const transform = vehicle.wheelInfos[i].worldTransform
    const wheelBody = wheelBodies[i]
    if (wheelBody) {
      wheelBody.position.copy(transform.position)
      wheelBody.quaternion.copy(transform.quaternion)
    }
  }
})

//create a ground/plane
const groundBody = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Plane(),
  type: CANNON.Body.STATIC,
})
groundBody.material = new CANNON.Material('ground')

//rotate gorund to be flat
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
groundBody.addShape(new CANNON.Plane())
world.addBody(groundBody)

//define interaction between wheels and ground
const wheelGroundContactMaterial = new CANNON.ContactMaterial(wheelMaterial, groundBody.material, {
  friction: 1.3,
  restitution: 0,
  contactEquationStiffness: 1000
})
//add contact material to world
world.addContactMaterial(wheelGroundContactMaterial)

//controller / event listeners
const controller = {
  maxSteerVal: 0.75,
  maxForce: 1000,
  brakeForce: 1000000,
  handBrakeForce: 1000,
  maxSpeed: 100,
  nosBoost: 1000,
  resetCar: () => {
    carBody.position.set(0, 5, 0)
    carBody.quaternion.set(0, 0, 0, 1)
    carBody.velocity.set(0, 0, 0)
    carBody.angularVelocity.set(0, 0.5, 0)
  }
}

//event listerer for keydown
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
      vehicle.applyEngineForce(-controller.maxForce, 2)
      vehicle.applyEngineForce(-controller.maxForce, 3)
      break
    case 's':
    case 'ArrowDown':
      vehicle.applyEngineForce(controller.maxForce, 2)
      vehicle.applyEngineForce(controller.maxForce, 3)
      break
    case 'a':
    case 'ArrowLeft':
      vehicle.setSteeringValue(controller.maxSteerVal, 0)
      vehicle.setSteeringValue(controller.maxSteerVal, 1)
      break
    case 'd':
    case 'ArrowRight':
      vehicle.setSteeringValue(-controller.maxSteerVal, 0)
      vehicle.setSteeringValue(-controller.maxSteerVal, 1)
      break
    case ' ':
      vehicle.setBrake(controller.brakeForce, 0)
      vehicle.setBrake(controller.brakeForce, 1)
      vehicle.setBrake(controller.brakeForce, 2)
      vehicle.setBrake(controller.brakeForce, 3)
      break
    case 'Shift':
      vehicle.applyEngineForce(-controller.nosBoost - controller.maxForce, 2)
      vehicle.applyEngineForce(-controller.nosBoost - controller.maxForce, 3)
      break
    case 'r':
      controller.resetCar()
      break
  }
})

//event listerer for keyup
document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
    case 's':
    case 'ArrowDown':
    case 'Shift':
      vehicle.applyEngineForce(0, 2)
      vehicle.applyEngineForce(0, 3)
      break
    case 'a':
    case 'ArrowLeft':
    case 'd':
    case 'ArrowRight':
      vehicle.setSteeringValue(0, 0)
      vehicle.setSteeringValue(0, 1)
      break
    case ' ':
      vehicle.setBrake(0, 0)
      vehicle.setBrake(0, 1)
      vehicle.setBrake(0, 2)
      vehicle.setBrake(0, 3)
      break
  }
})

//progress bar
const progressBar = document.getElementById('progressBar') as HTMLProgressElement

//add skin to car
let car: any
const loader = new GLTFLoader()
loader.load('assets/car/LowPolyCars.glb', (gltf) => {
  progressBar.style.display = 'none'
  car = gltf.scene
  car.scale.set(0.82, 0.9, 0.9)
  car.position.set(0, 0, 0)
  car.rotation.set(0, 0, 0)
  scene.add(car)
}, (xhr) => {
  const percentComplete = xhr.loaded / xhr.total * 100
  progressBar.value = percentComplete === Infinity ? 100 : percentComplete
})

// //load wheel skin
// let wheels: any[] = []
// const wheelLoader = new GLTFLoader()
// wheelLoader.load('assets/car/carWheel.glb', (gltf) => {
//   const wheelModel = gltf.scene
//   for (let i = 0; i < 4; i++) {
//     const wheel = wheelModel.clone()
//     scene.add(wheel)
//     wheels.push(wheel)
//   }
// })

//setup playground
new planeSetup(scene)

//playground for car
//physics for box
const boxShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
const boxBody = new CANNON.Body({
  mass: 10,
  shape: boxShape
})
boxBody.position.set(0, 0.5, 4)
boxBody.material = new CANNON.Material('boxMaterial')
const boxGroundContactMaterial = new CANNON.ContactMaterial(boxBody.material, groundBody.material, {
  friction: 0.9,
  restitution: 0,
  contactEquationStiffness: 1000
})
world.addBody(boxBody)
world.addContactMaterial(boxGroundContactMaterial)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(0, 0.5, 10)
scene.add(box)

//bricks
let bricksArray: Bricks[] = []
for (let i = 0; i < 3; i++) {
  const wallPosition = { x: 20, y: 0, z: 10 + i * 10 };
  const brickSize = { x: 1, y: 0.5, z: 0.5 };
  const brickOffset = 0.05;
  const rows = 4;
  const columns = 4;
  const brick = new Bricks(world, scene, groundBody.material, wallPosition, brickSize, brickOffset, rows, columns, i + 1);
  brick.addCollisionListeners(carBody);
  bricksArray.push(brick)
}

//bowling
// Set initial positions and dimensions
const ballPosition = { x: 40, y: 1, z: 10 };
const pinsPosition = { x: 40, y: 1, z: 40 };
const ballDimensions = { radius: 1, ballSegments: 32 };
const pinDimensions = { topRadius: 0.2, bottomRadius: 0.4, height: 2.5, pinSegments: 32 };
const rows = 4;

// Create Bowling instance
const bowling = new Bowling(scene, world, groundBody.material, ballPosition, pinsPosition, ballDimensions, pinDimensions, rows);


//create cylinder
// const cylinder = new CANNON.Cylinder(1, 1, 1, 32)
// const cylinderBody = new CANNON.Body({
//   mass: 1,
//   shape: cylinder
// })
// cylinderBody.material = new CANNON.Material('cylinder')
// cylinderBody.position.set(5, 1, 5)
// world.addBody(cylinderBody)
// const cylinderGroundContactMaterial = new CANNON.ContactMaterial(cylinderBody.material, groundBody.material, {
//   friction: 0.9,
//   restitution: 0,
//   contactEquationStiffness: 1000
// })
// world.addContactMaterial(cylinderGroundContactMaterial)

// const mtlLoader = new MTLLoader()
// const objLoader = new OBJLoader()
// let cylinderMesh: any
// mtlLoader.setPath('/assets/playground/bowling/').load('bowlingPin.mtl', (materials) => {
//   materials.preload()
//   objLoader.setMaterials(materials)
//     .setPath('/assets/playground/bowling/').load('bowlingPin.obj', (object) => {
//       object.position.set(5, 0, 5)
//       object.scale.setScalar(0.5)
//       scene.add(object)
//     })
// })

//stats
const stats = new Stats()
document.body.appendChild(stats.dom)

world.broadphase = new CANNON.SAPBroadphase(world)

world.defaultContactMaterial.friction = 0

//cannon debugger
const cannonDebugger = new (CannonDebugger as any)(scene, world)

function animate() {
  //update physics
  world.fixedStep();

  //cannon debugger
  cannonDebugger.update()

  if (car) {
    car.position.set(carBody.position.x, carBody.position.y - 0.5, carBody.position.z)
    car.quaternion.copy(carBody.quaternion)
  }

  //update box
  box.position.copy(boxBody.position)
  box.quaternion.copy(boxBody.quaternion)

  //update bricks
  bricksArray.forEach(brick => brick.update())

  //update bowling
  bowling.update()

  //update cylinder
  // if (cylinderMesh) {
  //   cylinderMesh.position.copy(cylinderBody.position)
  //   cylinderMesh.quaternion.copy(cylinderBody.quaternion)
  // }
  // if (wheels.length === 4) {
  //   wheelBodies.forEach((wheelBody, index) => {
  //     const wheel = wheels[index]
  //     wheel.position.copy(wheelBody.position)
  //     wheel.quaternion.copy(wheelBody.quaternion)
  //   })
  // }

  controls.update()
  controls.target.copy(carBody.position)
  TWEEN.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)

  stats.update()
}

animate()