import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

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

// export default class AddPropOBJ_MTL {
//     constructor(scene: THREE.Scene, world: CANNON.World, propPosition: Position, propScale: Scale, propRotation: Rotation, propPath: string) {
//         const loader = new OBJLoader();
//         const mtlLoader = new MTLLoader();
//         mtlLoader.load(`${propPath}.mtl`, (materials) => {
//             materials.preload();
//             loader.setMaterials(materials);
//             loader.load(`${propPath}.obj`, (object) => {
//                 object.scale.set(propScale.x, propScale.y, propScale.z);
//                 object.rotation.set(propRotation.x, propRotation.y, propRotation.z);
//                 object.position.set(propPosition.x, propPosition.y, propPosition.z);
//                 scene.add(object);
//             });
//         });
//     }
// }

export default function addPropOBJ_MTL(scene: THREE.Scene, propPosition: Position, propScale: Scale, propRotation: Rotation, propPath: string) {
    const loader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    mtlLoader.load(`${propPath}.mtl`, (materials) => {
        materials.preload();
        loader.setMaterials(materials);
        loader.load(`${propPath}.obj`, (object) => {
            object.scale.set(propScale.x, propScale.y, propScale.z);
            object.rotation.set(propRotation.x, propRotation.y, propRotation.z);
            object.position.set(propPosition.x, propPosition.y, propPosition.z);
            scene.add(object);
        });
    });
}