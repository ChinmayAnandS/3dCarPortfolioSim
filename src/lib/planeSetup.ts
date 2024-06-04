import * as THREE from 'three';
import * as CANNON from 'cannon-es'

import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

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


        this.initPlane();
        this.addBorder();
        this.addPropsGLTF('/assets/playground/trees/twinTrees.glb', { x: 12, y: 0, z: 12 }, { x: 1, y: 1, z: 1 }, { x: 0, y: 0, z: 0 });
        this.addPropsGLTF('/assets/socials/github.glb', { x: 80, y: 2, z: 15 }, { x: 1, y: 1, z: 1 }, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Cylinder(1.8, 1.8, 1, 8), { x: 80, y: 2, z: 15 }, { x: 0, y: 0, z: 1, angle: Math.PI / 2 }, 0)
        this.addPropsGLTF('/assets/socials/linkedIn.glb', { x: 80, y: 2, z: 5 }, { x: 1, y: 1, z: 1 }, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: 80, y: 2, z: 5 }, { x: 0, y: 0, z: 0, angle: 0 }, 0)
        this.addPropsGLTF('/assets/socials/mail.glb', { x: 80, y: 2, z: -5 }, { x: 1, y: 1, z: 1 }, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: 80, y: 2, z: -5 }, { x: 0, y: 0, z: 0, angle: 0 }, 0)
        this.addPropsGLTF('/assets/socials/X.glb', { x: 80, y: 2, z: -15 }, { x: 1, y: 1, z: 1 }, { x: Math.PI / 2, y: 0, z: Math.PI / 2 });
        this.createCannonBody(new CANNON.Box(new CANNON.Vec3(0.3, 1.5, 1.5)), { x: 80, y: 2, z: -15 }, { x: 0, y: 0, z: 0, angle: 0 }, 0)
        // this.addPropsMTL_OBJ();

        //event listener for mouse click
        this.canvas.addEventListener('click', this.onDocumentMouseClick.bind(this))
    }

    private initPlane() {
        const planeGeometry = new THREE.PlaneGeometry(200, 200);
        const planeMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec2 vUv;
                void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                void main() {
                gl_FragColor = mix(vec4(0.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vUv.y);
                }
            `,
            side: THREE.DoubleSide
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.set(0, 0, 0);
        this.scene.add(plane);
    }

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

    private addPropsMTL_OBJ(path: string, position: Position, scale: Scale, rotation: Position) {
        const mtlLoader = new MTLLoader();
        const objLoader = new OBJLoader();
        mtlLoader.load(`${path}.mtl`, (materials) => {
            materials.preload();
            objLoader.setMaterials(materials);
            objLoader.load(`${path}.obj`, (object) => {
                object.scale.set(scale.x, scale.y, scale.z);
                object.rotation.set(rotation.x, rotation.y, rotation.z);
                object.position.set(position.x, position.y, position.z);
                this.scene.add(object);
                this.clickables.push(object); // add to clickable objects array
            });
        });
    }

    private addBorder(): void {
        const borderThickness = 5;
        const borderLength = 200; // The length of each side of the plane

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
            console.log(clickedObject.name.includes('email'))
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