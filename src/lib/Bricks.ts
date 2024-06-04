// // import * as THREE from 'three';
// // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// // import * as CANNON from 'cannon-es';

// // export default function brickSetup(scene: THREE.Scene, world: CANNON.World, groundBodyMaterial: CANNON.Material) {
// //     const loader = new GLTFLoader();
// //     const bricks: any[] = [];
// //     let brickBodies: CANNON.Body[] = [];
// //     const position = { x: 10, y: 0.1, z: 10 };  // Offset of the wall from the origin

// //     const numberOfIterations = 30
// //     loader.load('assets/playground/stones/brick.glb', (gltf) => {
// //         const brickModel = gltf.scene

// //         for (let i = 0; i < numberOfIterations; i++) {
// //             console.log(position.x, position.y, position.z)
// //             const brick = brickModel.clone()
// //             brick.position.set(position.x, position.y, position.z)
// //             scene.add(brick)
// //             bricks.push(brick)

// //             const brickShape = new CANNON.Box(new CANNON.Vec3(0.41, 0.2, 0.2))
// //             const brickBody = new CANNON.Body({ mass: 7.5, shape: brickShape })
// //             brickBody.fixedRotation = true
// //             brickBody.updateMassProperties()
// //             brickBody.material = new CANNON.Material('brickMaterial')
// //             brickBody.position.set(position.x, position.y, position.z)
// //             const brickBrickContactMaterial = new CANNON.ContactMaterial(brickBody.material, brickBody.material, { friction: 10, restitution: 0 })
// //             world.addContactMaterial(brickBrickContactMaterial)
// //             const brickGroundContactMaterial = new CANNON.ContactMaterial(brickBody.material, groundBodyMaterial, { friction: 10, restitution: 0 })
// //             world.addContactMaterial(brickGroundContactMaterial)
// //             brickBody.angularDamping = 0.9; // High damping to reduce rotation
// //             brickBody.fixedRotation = true; // Lock rotation if bricks should not rotate
// //             world.addBody(brickBody)
// //             brickBodies[i] = brickBody
// //             if (position.x >= 12.5) {
// //                 position.x = 10
// //                 position.y = parseFloat((position.y + 0.4).toFixed(2))
// //             }
// //             else {
// //                 position.x = parseFloat((position.x + 0.82).toFixed(2))
// //             }
// //         }
// //     })
// //     return { bricks, brickBodies }
// // }

// // Bricks.ts
// import * as THREE from 'three';
// import * as CANNON from 'cannon-es';
// import { CustomBody } from './CustomBody';

// interface Brick {
//     body: CustomBody;
//     mesh: THREE.Mesh;
// }

// interface Position {
//     x: number;
//     y: number;
//     z: number;
// }

// interface Size {
//     x: number;
//     y: number;
//     z: number;
// }

// export default class Bricks {
//     private world: CANNON.World;
//     private scene: THREE.Scene;
//     private wallPosition: Position;
//     private brickSize: Size;
//     private brickOffset: number;
//     private rows: number;
//     private columns: number;
//     private bricks: Brick[] = [];
//     private brickPhysicsMaterial: CANNON.Material;

//     constructor(world: CANNON.World, scene: THREE.Scene, groundBodyMaterial: CANNON.Material, wallPosition: Position, brickSize: Size, brickOffset: number, rows: number, columns: number) {
//         this.world = world;
//         this.scene = scene;
//         this.wallPosition = wallPosition;
//         this.brickSize = brickSize;
//         this.brickOffset = brickOffset;
//         this.rows = rows;
//         this.columns = columns;
//         this.brickPhysicsMaterial = new CANNON.Material("brickMaterial");

//         const brickContactMaterial = new CANNON.ContactMaterial(this.brickPhysicsMaterial, this.brickPhysicsMaterial, {
//             friction: 0.9, // High friction to prevent sliding
//             restitution: 0.1 // Low restitution to prevent bouncing
//         });
//         this.world.addContactMaterial(brickContactMaterial);
//         const groundBrickContactMaterial = new CANNON.ContactMaterial(groundBodyMaterial, this.brickPhysicsMaterial, {
//             friction: 0.9, // High friction to prevent sliding
//             restitution: 0.1 // Low restitution to prevent bouncing
//         });
//         this.world.addContactMaterial(groundBrickContactMaterial);

//         this.initBricks();
//     }

//     private initBricks(): void {
//         const { x: bx, y: by, z: bz } = this.brickSize;
//         const brickGeometry = new THREE.BoxGeometry(bx, by, bz);
//         const brickMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//         for (let i = 0; i < this.rows; i++) {
//             for (let j = 0; j < this.columns; j++) {
//                 const x = (j - this.columns / 2) * (bx + this.brickOffset) + this.wallPosition.x;
//                 const y = (i + 0.5) * (by + this.brickOffset) + this.wallPosition.y;
//                 const z = this.wallPosition.z;

//                 // Create Cannon.js brick
//                 const brickShape = new CANNON.Box(new CANNON.Vec3(bx / 2, by / 2, bz / 2));
//                 const brickBody = new CustomBody({
//                     mass: 1,
//                     position: new CANNON.Vec3(x, y, z),
//                     shape: brickShape,
//                     material: this.brickPhysicsMaterial
//                 });
//                 brickBody.fixedRotation = true;
//                 brickBody.updateMassProperties();
//                 this.world.addBody(brickBody);

//                 // Create Three.js brick
//                 const brickMesh = new THREE.Mesh(brickGeometry, brickMaterial);
//                 brickMesh.position.set(x, y, z);
//                 this.scene.add(brickMesh);

//                 brickBody.userData = { isBrick: true };
//                 this.bricks.push({ body: brickBody, mesh: brickMesh });
//             }
//         }
//     }

//     private onCollision(event: { body: CustomBody; target: CustomBody }): void {
//         const bodyA = event.body; // The body that was hit
//         const bodyB = event.target; // The body that hit the other body

//         // Check if the cube collided with a brick
//         if (bodyA.userData?.isCube && bodyB.userData?.isBrick) {
//             console.log('Cube hit a brick!')
//             bodyB.mass = 1; // Set the brick's mass to 1
//             bodyB.fixedRotation = false; // Allow the brick to rotate
//             bodyB.updateMassProperties(); // Update the mass properties in the physics engine
//         } else if (bodyB.userData?.isCube && bodyA.userData?.isBrick) {
//             console.log('Cube hit a brick!')
//             bodyA.mass = 1; // Set the brick's mass to 1
//             bodyA.fixedRotation = false; // Allow the brick to rotate
//             bodyA.updateMassProperties(); // Update the mass properties in the physics engine
//         }
//     }

//     public addCollisionListeners(cubeBody: CustomBody): void {
//         cubeBody.userData = { isCube: true };
//         this.bricks.forEach((brick) => {
//             brick.body.addEventListener('collide', this.onCollision.bind(this));
//         });
//     }

//     public update(): void {
//         this.bricks.forEach((brick) => {
//             brick.mesh.position.copy(brick.body.position);
//             brick.mesh.quaternion.copy(brick.body.quaternion);
//         });
//     }
// }

// Bricks.ts

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CustomBody } from './CustomBody';

interface Brick {
    body: CustomBody;
    mesh: THREE.Mesh;
}

interface Position {
    x: number;
    y: number;
    z: number;
}

interface Size {
    x: number;
    y: number;
    z: number;
}

export default class Bricks {
    private world: CANNON.World;
    private scene: THREE.Scene;
    private wallPosition: Position;
    private brickSize: Size;
    private brickOffset: number;
    private rows: number;
    private columns: number;
    private arrangementType: number;
    private bricks: Brick[] = [];
    private brickPhysicsMaterial: CANNON.Material;

    constructor(world: CANNON.World, scene: THREE.Scene, groundBodyMaterial: CANNON.Material, wallPosition: Position, brickSize: Size, brickOffset: number, rows: number, columns: number, arrangementType: number) {
        this.world = world;
        this.scene = scene;
        this.wallPosition = wallPosition;
        this.brickSize = brickSize;
        this.brickOffset = brickOffset;
        this.rows = rows;
        this.columns = columns;
        this.arrangementType = arrangementType;
        this.brickPhysicsMaterial = new CANNON.Material("brickMaterial");

        const brickContactMaterial = new CANNON.ContactMaterial(this.brickPhysicsMaterial, this.brickPhysicsMaterial, {
            friction: 0.9, // High friction to prevent sliding
            restitution: 0.1 // Low restitution to prevent bouncing
        });
        this.world.addContactMaterial(brickContactMaterial);
        const groundBrickContactMaterial = new CANNON.ContactMaterial(groundBodyMaterial, this.brickPhysicsMaterial, {
            friction: 0.9, // High friction to prevent sliding
            restitution: 0.1 // Low restitution to prevent bouncing
        });
        this.world.addContactMaterial(groundBrickContactMaterial);
        this.initBricks();
    }

    private initBricks(): void {
        const { x: bx, y: by, z: bz } = this.brickSize;
        const brickGeometry = new THREE.BoxGeometry(bx, by, bz);
        const brickMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        switch (this.arrangementType) {
            case 1:
                this.createStackedBricks(brickGeometry, brickMaterial, bx, by, bz);
                break;
            case 2:
                this.createStaggeredBricks(brickGeometry, brickMaterial, bx, by, bz);
                break;
            case 3:
                this.createTriangularBricks(brickGeometry, brickMaterial, bx, by, bz);
                break;
            default:
                console.error("Invalid arrangement type");
                break;
        }
    }

    private createStackedBricks(brickGeometry: THREE.BoxGeometry, brickMaterial: THREE.MeshBasicMaterial, bx: number, by: number, bz: number): void {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const x = (j - this.columns / 2) * (bx + this.brickOffset) + this.wallPosition.x;
                const y = (i + 0.5) * (by + this.brickOffset) + this.wallPosition.y;
                const z = this.wallPosition.z;

                this.createBrick(brickGeometry, brickMaterial, x, y, z);
            }
        }
    }

    private createStaggeredBricks(brickGeometry: THREE.BoxGeometry, brickMaterial: THREE.MeshBasicMaterial, bx: number, by: number, bz: number): void {
        for (let i = 0; i < this.rows; i++) {
            const rowColumns = i % 2 === 0 ? this.columns - 1 : this.columns;
            for (let j = 0; j < rowColumns; j++) {
                const x = (j - rowColumns / 2) * (bx + this.brickOffset) + this.wallPosition.x;
                const y = (i + 0.5) * (by + this.brickOffset) + this.wallPosition.y;
                const z = this.wallPosition.z;

                this.createBrick(brickGeometry, brickMaterial, x, y, z);
            }
        }
    }

    private createTriangularBricks(brickGeometry: THREE.BoxGeometry, brickMaterial: THREE.MeshBasicMaterial, bx: number, by: number, bz: number): void {
        for (let i = 0; i < this.rows; i++) {
            const rowColumns = this.columns - i;
            for (let j = 0; j < rowColumns; j++) {
                const x = (j - rowColumns / 2) * (bx + this.brickOffset) + this.wallPosition.x;
                const y = (i + 0.5) * (by + this.brickOffset) + this.wallPosition.y;
                const z = this.wallPosition.z;

                this.createBrick(brickGeometry, brickMaterial, x, y, z);
            }
        }
    }

    private createBrick(brickGeometry: THREE.BoxGeometry, brickMaterial: THREE.MeshBasicMaterial, x: number, y: number, z: number): void {
        // Create Cannon.js brick
        const { x: bx, y: by, z: bz } = this.brickSize;
        const brickShape = new CANNON.Box(new CANNON.Vec3(bx / 2, by / 2, bz / 2));
        const brickBody = new CustomBody({
            mass: 1,
            position: new CANNON.Vec3(x, y, z),
            shape: brickShape,
            material: this.brickPhysicsMaterial
        });
        brickBody.fixedRotation = true;
        brickBody.updateMassProperties();
        this.world.addBody(brickBody);

        // Create Three.js brick
        const brickMesh = new THREE.Mesh(brickGeometry, brickMaterial);
        brickMesh.position.set(x, y, z);
        this.scene.add(brickMesh);

        brickBody.userData = { isBrick: true };
        this.bricks.push({ body: brickBody, mesh: brickMesh });
    }

    private onCollision(event: { body: CustomBody; target: CustomBody }): void {
        const bodyA = event.body; // The body that was hit
        const bodyB = event.target; // The body that hit the other body

        // Check if the cube collided with a brick
        if (bodyA.userData?.isCube && bodyB.userData?.isBrick) {
            bodyB.mass = 1; // Set the brick's mass to 1
            bodyB.fixedRotation = false; // Allow the brick to rotate
            bodyB.updateMassProperties(); // Update the mass properties in the physics engine
        } else if (bodyB.userData?.isCube && bodyA.userData?.isBrick) {
            bodyA.mass = 1; // Set the brick's mass to 1
            bodyA.fixedRotation = false; // Allow the brick to rotate
            bodyA.updateMassProperties(); // Update the mass properties in the physics engine
        }
    }

    public addCollisionListeners(cubeBody: CustomBody): void {
        cubeBody.userData = { isCube: true };
        this.bricks.forEach((brick) => {
            brick.body.addEventListener('collide', this.onCollision.bind(this));
        });
    }

    public update(): void {
        this.bricks.forEach((brick) => {
            brick.mesh.position.copy(brick.body.position);
            brick.mesh.quaternion.copy(brick.body.quaternion);
        });
    }
}
