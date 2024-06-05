import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

interface Position {
    x: number;
    y: number;
    z: number;
}

export default class SignBoard {
    constructor(scene: THREE.Scene, world: CANNON.World, signPosition: Position) {
        const loader = new GLTFLoader();

        loader.load('/assets/playground/signBoard/playgroundBoard.glb', (gltf) => {
            const signMesh = gltf.scene;
            signMesh.scale.set(1, 1, 1);
            signMesh.rotation.y = Math.PI / 2;
            signMesh.position.set(signPosition.x, signPosition.y, signPosition.z + 5);
            scene.add(signMesh);
        });

        loader.load('/assets/playground/signBoard/projectsBoard.glb', (gltf) => {
            const signMesh = gltf.scene;
            signMesh.scale.set(1, 1, 1);
            signMesh.rotation.y = Math.PI / 2;
            signMesh.position.set(signPosition.x, signPosition.y, signPosition.z - 16.5);
            scene.add(signMesh);
        })

        loader.load('/assets/playground/signBoard/socialsBoard1.glb', (gltf) => {
            const signMesh = gltf.scene;
            signMesh.scale.set(1, 1, 1);
            signMesh.rotation.y = Math.PI / 2;
            signMesh.position.set(signPosition.x, signPosition.y, signPosition.z - 17.3);
            scene.add(signMesh);
        })

        // const signBody = new CANNON.Body({
        //     mass: 0
        // });
        // signBody.addShape(new CANNON.Box(new CANNON.Vec3(width / 6, height * 2, length / 4)));
        // signBody.position.set(signPosition.x, signPosition.y, signPosition.z);
        // world.addBody(signBody);
        const playgroundSignBoard = new CANNON.Body({
            mass: 0
        });
        playgroundSignBoard.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 3, 0.1)));
        playgroundSignBoard.position.set(signPosition.x, signPosition.y + 1.5, signPosition.z - 4.25);
        world.addBody(playgroundSignBoard);

        const projectsSignBoard = new CANNON.Body({
            mass: 0
        });
        projectsSignBoard.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 3, 0.1)));
        projectsSignBoard.position.set(signPosition.x, signPosition.y + 1.5, signPosition.z - 15.8);
        world.addBody(projectsSignBoard);

        const socialsSignBoard1 = new CANNON.Body({
            mass: 0
        });
        socialsSignBoard1.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 3, 0.1)));
        socialsSignBoard1.position.set(signPosition.x, signPosition.y + 1.5, signPosition.z - 7.7);
        world.addBody(socialsSignBoard1);

        const socialsSignBoard2 = new CANNON.Body({
            mass: 0
        });
        socialsSignBoard2.addShape(new CANNON.Box(new CANNON.Vec3(0.1, 3, 0.1)));
        socialsSignBoard2.position.set(signPosition.x, signPosition.y + 1.5, signPosition.z - 12.2);
        world.addBody(socialsSignBoard2);
    }
}