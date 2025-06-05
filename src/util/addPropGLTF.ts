import * as THREE from "three";
// import * as CANNON from 'cannon-es';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

// export default class AddPropGLTF {
//     constructor(scene: THREE.Scene, propPosition: Position, propScale: Scale, propRotation: Rotation, propPath: string) {
//         const loader = new GLTFLoader();
//         loader.load(propPath, (gltf) => {
//             const propMesh = gltf.scene;
//             propMesh.scale.set(propScale.x, propScale.y, propScale.z);
//             propMesh.rotation.set(propRotation.x, propRotation.y, propRotation.z);
//             propMesh.position.set(propPosition.x, propPosition.y, propPosition.z);
//             scene.add(propMesh);
//         });
//     }
// }

export default function addPropGLTF(
  scene: THREE.Scene,
  propPosition: Position,
  propScale: Scale,
  propRotation: Rotation,
  propPath: string,
) {
  const loader = new GLTFLoader();
  loader.load(propPath, (gltf) => {
    const propMesh = gltf.scene;
    propMesh.scale.set(propScale.x, propScale.y, propScale.z);
    propMesh.quaternion.setFromAxisAngle(
      new THREE.Vector3(propRotation.x, propRotation.y, propRotation.z),
      propRotation.angle,
    );
    propMesh.position.set(propPosition.x, propPosition.y, propPosition.z);
    scene.add(propMesh);
  });
}
