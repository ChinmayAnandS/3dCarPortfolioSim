//npx vite
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

//constants
const length = 1
const width = 1
const height = 1
const segments = 16

//scene
const scene = new THREE.Scene()

//light
const light = new THREE.DirectionalLight(undefined, Math.PI)
light.position.set(1, 1, 1)
scene.add(light)

//axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(8, 3, 0)

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

//physics
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -10, 0)
})

//create car chassis
const carBody = new CANNON.Body({
  mass: 300,
  shape: new CANNON.Box(new CANNON.Vec3(length + 0.75, width - 0.5, height))
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
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}

//set connection points for wheels
wheelOptions.chassisConnectionPointLocal.set(-length, 0, height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(-length, 0, -height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(length, 0, height)
vehicle.addWheel(wheelOptions)
wheelOptions.chassisConnectionPointLocal.set(length, 0, -height)
vehicle.addWheel(wheelOptions)

//add vehicle to world
vehicle.addToWorld(world)

//add the wheel bodies
const wheelBodies: any[] = []
const wheelMaterial = new CANNON.Material('wheel')
vehicle.wheelInfos.forEach((wheel) => {
  const cylinder = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, segments)
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
  friction: 0.3,
  restitution: 0,
  contactEquationStiffness: 1000
})
//add contact material to world
world.addContactMaterial(wheelGroundContactMaterial)

//controller / event listeners
const controller = {
  maxSteerVal: 0.5,
  maxForce: 1000,
  brakeForce: 1000000,
  handBrakeForce: 1000,
  maxSpeed: 100,
  steerVal: 0,
  engineForce: 0,
  brake: 0,
  handBrake: 0,
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

//add skin to car
let car: any
const loader = new GLTFLoader()
loader.load('assets/car/LowPolyCars.glb', (gltf) => {
  car = gltf.scene
  scene.add(car)
})

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
    car.position.copy(carBody.position)
    car.quaternion.copy(carBody.quaternion)
  }

  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)

  stats.update()
}

animate()