import * as THREE from 'three';
import * as CANNON from 'cannon-es';

interface Position {
    x: number;
    y: number;
    z: number;
}

interface BallSize {
    x: number;
}

export default class Bowling {
    private scene: THREE.Scene;
    private world: CANNON.World;
    private pinBodies: { body: CANNON.Body, mesh: THREE.Mesh }[] = [];
    private ballSize: BallSize = { x: 1 };
    private ballPosition: Position = { x: 0, y: 0, z: 0 };
    private ballPhysicsMaterial: CANNON.Material;
    private pinsPhysicsMaterial: CANNON.Material;
    private pinsPosition: Position;
    private rows: number = 4;

    constructor(scene: THREE.Scene, world: CANNON.World, groundBodyMaterial: CANNON.Material, pinPosition: Position) {
        this.scene = scene;
        this.world = world;
        this.pinsPosition = pinPosition;
        this.ballPhysicsMaterial = new CANNON.Material("ballMaterial");
        this.pinsPhysicsMaterial = new CANNON.Material("pinsMaterial");

        const ballGroundContactMaterial = new CANNON.ContactMaterial(this.ballPhysicsMaterial, groundBodyMaterial, { friction: 1.3, restitution: 0.1 });
        this.world.addContactMaterial(ballGroundContactMaterial);

        const pinGroundContactMaterial = new CANNON.ContactMaterial(this.pinsPhysicsMaterial, groundBodyMaterial, { friction: 1.3, restitution: 0.1 });
        this.world.addContactMaterial(pinGroundContactMaterial);

        const pinBallContactMaterial = new CANNON.ContactMaterial(this.pinsPhysicsMaterial, this.ballPhysicsMaterial, { friction: 1.3, restitution: 0.1 });
        this.world.addContactMaterial(pinBallContactMaterial);

        const pinPinContactMaterial = new CANNON.ContactMaterial(this.pinsPhysicsMaterial, this.pinsPhysicsMaterial, { friction: 1.3, restitution: 0.1 });
        this.world.addContactMaterial(pinPinContactMaterial);

        this.initBall();
    }

    private initBall(): void {
        const ballGeometry = new THREE.SphereGeometry(this.ballSize.x);
        const ballMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        const ball = new THREE.Mesh(ballGeometry, ballMaterial);
        ball.position.set(this.ballPosition.x, this.ballPosition.y, this.ballPosition.z);
        this.scene.add(ball);

        const ballShape = new CANNON.Sphere(this.ballSize.x);
        const ballBody = new CANNON.Body({ mass: 1 });
        ballBody.addShape(ballShape);
        ballBody.position.set(this.ballPosition.x, this.ballPosition.y, this.ballPosition.z);
        this.world.addBody(ballBody);

        this.createPinsInTriangleArrangement();
    }

    private createPinsInTriangleArrangement(): void {
        const pinGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
        const pinMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j <= i; j++) {
                const pinMesh = new THREE.Mesh(pinGeometry, pinMaterial);
                const x = this.pinsPosition.x + j * 0.3 - i * 0.15;
                const y = this.pinsPosition.y;
                const z = this.pinsPosition.z + i * 0.3;
                pinMesh.position.set(x, y, z);
                this.scene.add(pinMesh);

                const pinShape = new CANNON.Cylinder(0.1, 0.1, 1, 32);
                const pinBody = new CANNON.Body({ mass: 1 });
                pinBody.addShape(pinShape);
                pinBody.position.set(x, y, z);
                this.world.addBody(pinBody);

                this.pinBodies.push({ body: pinBody, mesh: pinMesh });
            }
        }
    }

    public update(): void {
        this.pinBodies.forEach(({ body, mesh }) => {
            mesh.position.copy(body.position as any);
            mesh.quaternion.copy(body.quaternion as any);
        });
    }
}
