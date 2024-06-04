import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

interface Position {
    x: number;
    y: number;
    z: number;
}

interface SignSize {
    length: number;
    width: number;
    height: number;

}

export default class SignBoard {
    constructor(scene: THREE.Scene, world: CANNON.World, signPosition: Position) {
        // const { width, height, length } = signSize;
        const loader = new GLTFLoader();
        // loader.load('/assets/playground/miscelleneous/signBoard.glb', (gltf) => {
        //     const signMesh = gltf.scene;
        //     signMesh.scale.set(0.275, 0.275, 0.275);
        //     signMesh.rotation.y = -Math.PI / 2;
        //     signMesh.position.set(signPosition.x, signPosition.y - 1, signPosition.z);
        //     scene.add(signMesh);
        // });

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
    }
}