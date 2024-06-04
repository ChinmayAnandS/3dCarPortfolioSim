import * as THREE from 'three';
import * as CANNON from 'cannon-es';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

interface Position {
    x: number;
    y: number;
    z: number;
}

interface BallDimensions {
    radius: number;
    ballSegments: number;
}

interface PinDimensions {
    topRadius: number;
    bottomRadius: number;
    height: number;
    pinSegments: number;
}

export default class Bowling {
    private scene: THREE.Scene;
    private world: CANNON.World;
    private ballPosition: Position;
    private pinsPosition: Position;
    private rows: number;
    private pins: THREE.Object3D[] = [];
    private pinBodies: CANNON.Body[] = [];
    private ballPhysicsMaterial: CANNON.Material;
    private pinPhysicsMaterial: CANNON.Material;
    // private GLTFloader: GLTFLoader;
    private MTLLoader: MTLLoader;
    private OBJLoader: OBJLoader;
    private ballMesh!: THREE.Object3D;
    private ballBody!: CANNON.Body;
    private pinMesh!: THREE.Group;
    private ballRadius: number;
    private pinDim: PinDimensions;
    private modelsLoaded: boolean;

    constructor(scene: THREE.Scene, world: CANNON.World, groundBodyMaterial: CANNON.Material, ballPosition: Position, pinsPosition: Position, ballRadius: BallDimensions, pinDim: PinDimensions, rows: number) {
        this.scene = scene;
        this.world = world;
        this.ballPosition = ballPosition;
        this.pinsPosition = pinsPosition;
        this.rows = rows;
        // this.GLTFloader = new GLTFLoader();
        this.MTLLoader = new MTLLoader();
        this.OBJLoader = new OBJLoader();
        this.ballRadius = ballRadius.radius;
        this.pinDim = pinDim;
        this.modelsLoaded = false; // Add this flag to check if models are loaded

        this.ballPhysicsMaterial = new CANNON.Material('ballMaterial');
        this.pinPhysicsMaterial = new CANNON.Material('pinMaterial');

        const ballPinContactMaterial = new CANNON.ContactMaterial(this.ballPhysicsMaterial, this.pinPhysicsMaterial, {
            friction: 10,
            restitution: 0.9,
        });
        this.world.addContactMaterial(ballPinContactMaterial);

        const pinPinContactMaterial = new CANNON.ContactMaterial(this.pinPhysicsMaterial, this.pinPhysicsMaterial, {
            friction: 0.9,
            restitution: 1.5,
        });
        this.world.addContactMaterial(pinPinContactMaterial);

        const ballGroundContactMaterial = new CANNON.ContactMaterial(this.ballPhysicsMaterial, groundBodyMaterial, {
            friction: 0.9,
            restitution: 0.1,
        });
        this.world.addContactMaterial(ballGroundContactMaterial);

        const pinGroundContactMaterial = new CANNON.ContactMaterial(this.pinPhysicsMaterial, groundBodyMaterial, {
            friction: 0.9,
            restitution: 0.1,
        });
        this.world.addContactMaterial(pinGroundContactMaterial);

        this.initBowling();
    }

    private initBowling(): void {
        this.loadModels();
    }

    private loadModels(): void {
        this.MTLLoader.load('/assets/playground/bowling/bowlingBall.mtl', (materials) => {
            materials.preload();
            this.OBJLoader.setMaterials(materials);
            this.OBJLoader.load('/assets/playground/bowling/bowlingBall.obj', (object) => {
                this.ballMesh = object;
                this.ballMesh.scale.set(1, 1, 1);
                this.setupBall();
                this.checkModelLoaded();
            });
        });

        this.MTLLoader.setPath('/assets/playground/bowling/').load('bowlingPin.mtl', (materials) => {
            materials.preload();
            this.OBJLoader.setMaterials(materials);
            this.OBJLoader.setPath('/assets/playground/bowling/').load('bowlingPin.obj', (object) => {
                object.position.y = 0;
                this.pinMesh = object;
                this.pinMesh.scale.set(0.7, 0.7, 0.7);
                this.createPinsInTriangle();
                this.checkModelLoaded();
            })

        })
    }

    private checkModelLoaded(): void {
        if (this.ballMesh && this.pinMesh) {
            this.modelsLoaded = true;
        }
    }

    private setupBall(): void {
        const { x, y, z } = this.ballPosition;
        const ballShape = new CANNON.Sphere(this.ballRadius);
        this.ballBody = new CANNON.Body({ mass: 50, material: this.ballPhysicsMaterial, shape: ballShape, position: new CANNON.Vec3(x, y, z) });
        // this.ballBody.position.set(x, y, z);
        this.world.addBody(this.ballBody);

        this.ballMesh.position.set(x, y, z);
        this.scene.add(this.ballMesh);
    }

    private createPinsInTriangle(): void {
        const { topRadius, bottomRadius, height, pinSegments } = this.pinDim;
        const { x, y, z } = this.pinsPosition;
        const pinSpacing = 0.5 * 2 + 0.05; // Add a small spacing between pins

        // Calculate the offset for centering the pins
        const totalRows = this.rows;
        const offsetZ = -(totalRows - 1) * pinSpacing / 2;

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col <= row; col++) {
                const offsetX = col * pinSpacing - (row * pinSpacing) / 2;
                const pinX = x + offsetX;
                const pinZ = z + row * pinSpacing + offsetZ; // Adjusted to face the apex
                const pinY = y + height / 2; // Position pin bottom at ground level
                this.createPin(pinX, pinY, pinZ);
            }
        }
    }

    private createPin(x: number, y: number, z: number): void {
        const pinMesh = this.pinMesh.clone();
        pinMesh.position.set(x, 0, z);
        console.log(pinMesh.position.x, pinMesh.position.y, pinMesh.position.z)
        this.scene.add(pinMesh);

        const pinShape = new CANNON.Cylinder(this.pinDim.topRadius, this.pinDim.bottomRadius, this.pinDim.height, this.pinDim.pinSegments);
        const pinBody = new CANNON.Body({ mass: 1, material: this.pinPhysicsMaterial });
        pinBody.addShape(pinShape);
        pinBody.position.set(x, y, z);
        this.world.addBody(pinBody);

        this.pins.push(pinMesh);
        this.pinBodies.push(pinBody);
    }

    public update(): void {
        if (!this.modelsLoaded) return;
        // Synchronize Three.js and Cannon.js objects
        this.ballMesh.position.copy(this.ballBody.position as unknown as THREE.Vector3);
        this.ballMesh.quaternion.copy(this.ballBody.quaternion as unknown as THREE.Quaternion);

        for (let i = 0; i < this.pins.length; i++) {
            this.pins[i].position.copy(this.pinBodies[i].position as unknown as THREE.Vector3);
            this.pins[i].quaternion.copy(this.pinBodies[i].quaternion as unknown as THREE.Quaternion);
        }
    }
}
