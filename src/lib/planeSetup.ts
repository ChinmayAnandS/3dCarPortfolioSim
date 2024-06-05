import * as THREE from 'three';
import * as CANNON from 'cannon-es'

// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// import { Sky } from 'three/addons/objects/Sky.js'

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Scale {
    x: number;
    y: number;
    z: number;
}

interface Rotation {
    x: number;
    y: number;
    z: number;
    angle: number;
}


export default class planeSetup {
    private scene: THREE.Scene;
    private world: CANNON.World;
    private groundBodyMaterial: CANNON.Material;
    private loader = new GLTFLoader();
    private canvas: HTMLCanvasElement
    private camera: THREE.Camera;
    private mouse: THREE.Vector2;
    private raycaster: THREE.Raycaster;
    private clickables: THREE.Object3D[] = [];


    constructor(scene: THREE.Scene, world: CANNON.World, groundBodyMaterial: CANNON.Material, camera: THREE.Camera, canvas: HTMLCanvasElement) {
        this.scene = scene;
        this.world = world;
        this.groundBodyMaterial = groundBodyMaterial;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.canvas = canvas;
        this.camera = camera;


        // this.initPlane();
        this.addBorder();
        this.addPropsGLTF('./assets/playground/trees/twinTrees.glb', { x: 17.5, y: 0, z: 15 }, { x: 1, y: 1, z: 1 }, { x: 0, y: Math.PI / 2, z: 0 });

        this.socialsSetup({ x: 40, y: 2, z: 0 }, { x: 1, y: 1, z: 1 });
        // this.addPropsMTL_OBJ();

        // this.addPropsGLTF('./assets/playground/plane/planetry.glb', { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 0, y: 0, z: 0 });
        // this.addPropsMTL_OBJ('./assets/playground/plane/untitled', { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 0, y: 0, z: 0 });
        // const textureLoader = new THREE.TextureLoader();
        // const texture = textureLoader.load('./assets/playground/plane/planetry.jpg');
        // const planeGeometry = new THREE.PlaneGeometry(150, 150);
        // const planeMaterial = new THREE.MeshStandardMaterial({ map: texture });
        // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        // plane.rotation.x = -Math.PI / 2;
        // plane.position.set(0, 0.5, 0);
        // this.scene.add(plane);

        this.addPropsGLTF('./assets/playground/plane/grndFin3.glb', { x: 0, y: -0.5, z: 0 }, { x: 1, y: 1, z: 1 }, { x: 0, y: Math.PI, z: 0 });

        //event listener for mouse click
        this.canvas.addEventListener('click', this.onDocumentMouseClick.bind(this))

        //sky
        // this.createSky()
        this.createTexturedSky(this.scene)

        //add boerder for central area
        this.addInnerBorder();
    }

    private addInnerBorder(): void {
        const border = new CANNON.Box(new CANNON.Vec3(63 / 2, 5 / 2, 28 / 2));
        const borderBody = new CANNON.Body({
            mass: 0,
            material: this.groundBodyMaterial
        });
        borderBody.addShape(border);
        borderBody.position.set(-6.95, 1, -14.65);
        this.world.addBody(borderBody);
    }

    private createTexturedSky(scene: THREE.Scene) {
        const loader = new THREE.CubeTextureLoader()
        const texture = loader.load([
            './assets/skybox/px.jpg',
            './assets/skybox/nx.jpg',
            './assets/skybox/py.jpg',
            './assets/skybox/ny.jpg',
            './assets/skybox/pz.jpg',
            './assets/skybox/nz.jpg',
        ])
        scene.background = texture
    }

    // private createSky() {
    //     const sky = new Sky();
    //     sky.scale.setScalar(450000);
    //     const phi = THREE.MathUtils.degToRad(-90);
    //     const theta = THREE.MathUtils.degToRad(90);
    //     const sunPos = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
    //     sky.material.uniforms.sunPosition.value = sunPos

    //     this.scene.add(sky)
    // }

    private socialsSetup(position: Position, scale: Scale) {
        this.addPropsGLTF('./assets/socials/github.glb', { x: position.x, y: position.y, z: position.z }, scale, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Cylinder(1.8, 1.8, 1, 8), { x: position.x, y: position.y, z: position.z }, { x: 0, y: 0, z: 1, angle: Math.PI / 2 }, 0);
        this.addPropsGLTF('./assets/socials/linkedIn.glb', { x: position.x, y: position.y, z: position.z - 10 }, scale, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: position.x, y: position.y, z: position.z - 10 }, { x: 0, y: 0, z: 0, angle: 0 }, 0);
        this.addPropsGLTF('./assets/socials/mail.glb', { x: position.x, y: position.y, z: position.z - 20 }, scale, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: position.x, y: position.y, z: position.z - 20 }, { x: 0, y: 0, z: 0, angle: 0 }, 0);
        this.addPropsGLTF('./assets/socials/X.glb', { x: position.x, y: position.y, z: position.z - 30 }, scale, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: position.x, y: position.y, z: position.z - 30 }, { x: 0, y: 0, z: 0, angle: 0 }, 0);
    }

    // private initPlane() {
    //     const planeGeometry = new THREE.PlaneGeometry(125, 125);
    //     const planeMaterial = new THREE.ShaderMaterial({
    //         vertexShader: `
    //             varying vec2 vUv;
    //             void main() {
    //             vUv = uv;
    //             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    //             }
    //         `,
    //         fragmentShader: `
    //             varying vec2 vUv;
    //             void main() {
    //             gl_FragColor = mix(vec4(0.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vUv.y);
    //             }
    //         `,
    //         side: THREE.DoubleSide
    //     });
    //     const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    //     plane.rotation.x = -Math.PI / 2;
    //     plane.position.set(0, 0, 0);
    //     this.scene.add(plane);
    // }

    private addPropsGLTF(path: string, position: Position, scale: Scale, rotation: Position) {
        this.loader.load(path, (gltf) => {
            const props = gltf.scene;
            props.scale.set(scale.x, scale.y, scale.z);
            props.rotation.set(rotation.x, rotation.y, rotation.z);
            props.position.set(position.x, position.y, position.z);
            this.scene.add(props)
            this.clickables.push(props); // add to clickable objects array
        });
    }

    // private addPropsMTL_OBJ(path: string, position: Position, scale: Scale, rotation: Position) {
    //     const mtlLoader = new MTLLoader();
    //     const objLoader = new OBJLoader();
    //     mtlLoader.load(`${path}.mtl`, (materials) => {
    //         materials.preload();
    //         objLoader.setMaterials(materials);
    //         objLoader.load(`${path}.obj`, (object) => {
    //             object.scale.set(scale.x, scale.y, scale.z);
    //             object.rotation.set(rotation.x, rotation.y, rotation.z);
    //             object.position.set(position.x, position.y, position.z);
    //             this.scene.add(object);
    //             this.clickables.push(object); // add to clickable objects array
    //         });
    //     });
    // }

    private addBorder(): void {
        const borderThickness = 5;
        const borderLength = 125; // The length of each side of the plane

        const borders = [
            { x: 0, y: -borderThickness / 2, z: -borderLength / 2, sizeX: borderLength, sizeY: borderThickness, sizeZ: borderThickness }, // Top border
            { x: 0, y: -borderThickness / 2, z: borderLength / 2, sizeX: borderLength, sizeY: borderThickness, sizeZ: borderThickness }, // Bottom border
            { x: -borderLength / 2, y: -borderThickness / 2, z: 0, sizeX: borderThickness, sizeY: borderThickness, sizeZ: borderLength }, // Left border
            { x: borderLength / 2, y: -borderThickness / 2, z: 0, sizeX: borderThickness, sizeY: borderThickness, sizeZ: borderLength }, // Right border
        ];

        borders.forEach(border => {
            const borderShape = new CANNON.Box(new CANNON.Vec3(border.sizeX / 2, border.sizeY / 2, border.sizeZ / 2));
            const borderBody = new CANNON.Body({
                mass: 0,
                material: this.groundBodyMaterial
            });
            borderBody.addShape(borderShape);
            borderBody.position.set(border.x, -border.y, border.z);
            this.world.addBody(borderBody);
        });
    }

    private createCannonBody(shape: CANNON.Shape, position: Position, rotation: Rotation, mass: number): void {
        const body = new CANNON.Body({
            mass: mass,
            shape: shape,
            position: new CANNON.Vec3(position.x, position.y, position.z),
        });
        body.quaternion.setFromAxisAngle(new CANNON.Vec3(rotation.x, rotation.y, rotation.z), rotation.angle);
        this.world.addBody(body);
    }

    private onDocumentMouseClick(event: MouseEvent): void {
        event.preventDefault();

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera)

        const intersects = this.raycaster.intersectObjects(this.clickables, true);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            // console.log(clickedObject.name.includes('email'))
            if (clickedObject.name.includes('email')) {
                window.open('mailto:write2chimbu@gmail.com')
            } else if (clickedObject.name.includes('github')) {
                window.open('https://github.com/ChinmayAnandS', '_blank')
            } else if (clickedObject.name.includes('linkedIn')) {
                window.open('https://www.linkedin.com/in/chinmay-anand-s-a61162202', '_blank')
            } else if (clickedObject.name.includes('twitter')) {
                window.open('https://x.com/k0d3_whisker', '_blank')
            }
        }
    }
}