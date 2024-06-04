//npx vite
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

//constants
const radius = 1
const length = 1
const width = 1
const height = 1
const segments = 16

const scene = new THREE.Scene()

//light
const light = new THREE.DirectionalLight(undefined, Math.PI)
light.position.set(1, 1, 1)
scene.add(light)

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(8, 3, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableDamping = true


// const plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial())
// plane.rotation.x = -Math.PI / 2
// scene.add(plane)

// const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial())
// cube.position.y = 1
// scene.add(cube)

//add a box, sphere and cylinder to the scene
const boxGeometry = new THREE.BoxGeometry(length * 2, width * 2, height * 2)
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xb000ff })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.set(0, 5, 0)
scene.add(box)

const sphereGeometry = new THREE.SphereGeometry(radius, segments, segments)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x4700ff })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(0, 5, 3)
scene.add(sphere)

const cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, segments)
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff1100 })
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
cylinder.position.set(0, 5, -3)
scene.add(cylinder)

//physics
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0)
})

//create a ground/plane
const groundBody = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Plane(),
  type: CANNON.Body.STATIC
})

//rotate gorund to be flat
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
world.addBody(groundBody)

//create a box, sphere and cylinder and add them to the world
const boxShape = new CANNON.Box(new CANNON.Vec3(length, width, height))
const boxBody = new CANNON.Body({
  mass: 5,
  shape: boxShape
})
boxBody.position.set(0, 5, 0)
world.addBody(boxBody)

const sphereShape = new CANNON.Sphere(radius)
const sphereBody = new CANNON.Body({
  mass: 5,
  shape: sphereShape
})
sphereBody.position.set(0, 5, 3)
world.addBody(sphereBody)

const cylinderShape = new CANNON.Cylinder(radius, radius, height, segments)
const cylinderBody = new CANNON.Body({
  mass: 5,
  shape: cylinderShape
})
cylinderBody.position.set(0, 5, -3)
world.addBody(cylinderBody)

//cannon debugger
const cannonDebugger = new (CannonDebugger as any)(scene, world)

function animate() {
  //update physics
  world.fixedStep();

  //cannon debugger
  cannonDebugger.update()

  //copy the physics position to the three.js position
  box.position.copy(boxBody.position)
  box.quaternion.copy(boxBody.quaternion)
  sphere.position.copy(sphereBody.position)
  sphere.quaternion.copy(sphereBody.quaternion)
  cylinder.position.copy(cylinderBody.position)
  cylinder.quaternion.copy(cylinderBody.quaternion)

  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()