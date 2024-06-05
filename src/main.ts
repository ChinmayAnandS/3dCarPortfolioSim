//npx vite
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as CANNON from 'cannon-es'
// import CannonDebugger from 'cannon-es-debugger'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import TWEEN from '@tweenjs/tween.js'
import planeSetup from './lib/planeSetup'
import Bricks from './lib/Bricks'
import { CustomBody } from './lib/CustomBody'
import Bowling from './lib/Bowling'
import Rampjump from './lib/Rampjump'
import TextName from './lib/TextName'
import SignBoard from './lib/signBoard'
import Project from './lib/project'

//scene
const scene = new THREE.Scene()

//light
// const light = new THREE.DirectionalLight(0xffffff, Math.PI)
// light.position.set(1, 1, 1)
// scene.add(light)

// const light2 = new THREE.DirectionalLight(0xffffff, Math.PI)
// light2.position.set(-1, -1, -1)
// scene.add(light2)

// const light = new THREE.AmbientLight(0xFFFFFF); // soft white light
// light.intensity = 3
// scene.add(light);

const light1 = new THREE.HemisphereLight(0xffffbb, 0xfa5f55, 4);
scene.add(light1);

//axes helper
// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(-40, 3.31, -20)
const endPosition = { x: -62.92, y: 4.71, z: -15.04 }

const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera1.position.set(0, 0, 0)

// const cameraHelper = new THREE.CameraHelper(camera)
// scene.add(cameraHelper)
// const cameraHelper1 = new THREE.CameraHelper(camera1)
// scene.add(cameraHelper1)

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
  camera1.aspect = window.innerWidth / window.innerHeight
  camera1.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

//orbit controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableDamping = true
controls.dampingFactor = 0.1
controls.enableZoom = true
controls.maxDistance = 8
controls.minDistance = 3
controls.maxPolarAngle = Math.PI / 3
controls.minPolarAngle = 0
controls.cursor = new THREE.Vector3(10, 10, 10)

// controls.target.set(-500, 3.6, -500) //for some reason changing (x and z) values of this line changes the camera position

//physics
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -10, 0)
})

//create car chassis
const carDimensions = {
  length: 1.7,
  width: 0.25,
  height: 0.75
}
const carBody = new CustomBody({
  mass: 300,
  shape: new CANNON.Box(new CANNON.Vec3(carDimensions.length, carDimensions.width, carDimensions.height))
})
carBody.position.set(-56, 5, -15)
carBody.angularVelocity.set(0, -0.5, 0)
carBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI)
carBody.angularDamping = 0.1
// carBody.shapeOffsets[0].set(0, -0.04, 0); // lower the center of mass for better stability
const additionalBumper = new CANNON.Box(new CANNON.Vec3(0.01, 0.01, 0.75))
const bumperOffset = new CANNON.Vec3(-1.75, -0.5, 0)
carBody.addShape(additionalBumper, bumperOffset)
const additionalBumper2 = new CANNON.Box(new CANNON.Vec3(0.1, 0.2, 0.75))
const backBumperOffset = new CANNON.Vec3(2, -0.25, 0)
carBody.addShape(additionalBumper2, backBumperOffset)
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
  radius: 0.3,
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
wheelOptions.chassisConnectionPointLocal.set(-carDimensions.length + 0.47, -0.2, carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(-carDimensions.length + 0.47, -0.2, -carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(carDimensions.length - 0.7, -0.2, carDimensions.height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(carDimensions.length - 0.7, -0.2, -carDimensions.height)
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
  friction: 10,
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
    carBody.position.set(-56, 5, -15)
    // carBody.quaternion.set(0, 0, 0, 1)
    carBody.velocity.set(0, 0, 0)
    carBody.angularVelocity.set(0, -0.5, 0)
    carBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI)
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
      // vehicle.setBrake(controller.brakeForce, 0)
      // vehicle.setBrake(controller.brakeForce, 1)
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
loader.load('./assets/car/LowPolyCar3.glb', (gltf) => {
  progressBar.style.display = 'none'
  car = gltf.scene
  car.scale.set(1, 1, 1)
  // car.quaternion.setFromEuler(0, 0, 0)
  // car.position.set(0, 0, 0)
  // car.rotation.set(180, 0, 0)
  scene.add(car)
}, (xhr) => {
  const percentComplete = xhr.loaded / xhr.total * 100
  progressBar.value = percentComplete === Infinity ? 100 : percentComplete
})

//load wheel skin
let wheels: any[] = []
const wheelLoader = new GLTFLoader()
wheelLoader.load('./assets/car/carWheel3.glb', (gltf) => {
  const wheelModel = gltf.scene
  for (let i = 0; i < 4; i++) {
    if (i === 1 || i === 3) continue
    let wheel = wheelModel.clone()
    scene.add(wheel)
    wheels[i] = wheel
  }
})

wheelLoader.load('./assets/car/carWheel2.glb', (gltf) => {
  const wheelModel = gltf.scene
  for (let i = 0; i < 4; i++) {
    if (i === 0 || i === 2) continue
    let wheel = wheelModel.clone()
    scene.add(wheel)
    wheels[i] = wheel
  }
  console.log(wheels)
})

//setup playground
new planeSetup(scene, world, groundBody.material, camera, renderer.domElement)

//playground for car

//bricks
let bricksArray: Bricks[] = []
for (let i = 0; i < 3; i++) {
  const wallPosition = { x: -30, y: 0, z: 15 + i * 10 };
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
const ballPosition = { x: 0, y: 1, z: 10 };
const pinsPosition = { x: 0, y: 1, z: 35 };
const ballDimensions = { radius: 1, ballSegments: 32 };
const pinDimensions = { topRadius: 0.1, bottomRadius: 0.5, height: 2.5, pinSegments: 16 };
const rows = 4;

// Create Bowling instance
const bowling = new Bowling(scene, world, groundBody.material, ballPosition, pinsPosition, ballDimensions, pinDimensions, rows);


// rampJump
const rampPosition = { x: 30, y: 0, z: 15 };
const rampSize = { width: 5, height: 1, depth: 5 };
const rampAngle = { x: 1, y: 0, z: 0, angle: -Math.PI / 6 };
new Rampjump(scene, world, rampPosition, rampSize, rampAngle)

//create text
const textName = new TextName(scene, groundBody.material, world, { x: -45, y: 1, z: -18 })

new SignBoard(scene, world, { x: -40, y: 0, z: -5 })

new Project(scene, camera, camera1, world, { x: -35, y: 0, z: -45 }, { x: 0, y: 1, z: 0, angle: -Math.PI / 6 })

//stats
const stats = new Stats()
document.body.appendChild(stats.dom)

world.broadphase = new CANNON.SAPBroadphase(world)

world.defaultContactMaterial.friction = 0

//cannon debugger
// const cannonDebugger = new (CannonDebugger as any)(scene, world)

function animate() {
  //update physics
  world.fixedStep();

  //cannon debugger
  // cannonDebugger.update()

  if (car) {
    car.position.set(carBody.position.x, carBody.position.y, carBody.position.z)
    car.quaternion.copy(carBody.quaternion)
    // console.log('car', car.position)
  }

  //update bricks
  bricksArray.forEach(brick => brick.update())

  //update bowling
  bowling.update()

  //update textName
  textName.updateTextPhysics()

  if (wheels.length === 4 && wheelBodies.length === 4) {
    wheelBodies.forEach((wheelBody, index) => {
      const wheel = wheels[index]
      wheel.position.copy(wheelBody.position)
      wheel.quaternion.copy(wheelBody.quaternion)
    })
  }

  const useSecondCamera = car && car.position.z < -22.5

  if (useSecondCamera) {
    camera1.position.set(car.position.x - 8, car.position.y + 5, car.position.z + 5)
    camera1.lookAt(car.position)

  } else {
    controls.target.copy(carBody.position)
    controls.maxPolarAngle = Math.PI / 3
    controls.maxDistance = 8
    controls.minDistance = 3
    controls.update()
  }

  TWEEN.update()
  renderer.render(scene, useSecondCamera ? camera1 : camera)
  requestAnimationFrame(animate)

  stats.update()
}

animate()