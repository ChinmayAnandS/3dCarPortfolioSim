import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import addPropGLTF from '../util/addPropGLTF';

interface Position {
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

export default class Project {
    scene: THREE.Scene;
    world: CANNON.World;
    position: Position;
    rotation: Rotation;
    ImageLoader: THREE.ImageLoader;
    TextureLoader: THREE.TextureLoader;

    constructor(scene: THREE.Scene, world: CANNON.World, position: Position, rotation: Rotation) {
        this.scene = scene;
        this.world = world;
        this.position = position;
        this.rotation = rotation;

        this.ImageLoader = new THREE.ImageLoader();
        this.TextureLoader = new THREE.TextureLoader();

        this.init();
    }

    init() {
        // console.log('Project initialized');
        addPropGLTF(this.scene, this.position, { x: 1, y: 1, z: 1 }, this.rotation, '/assets/project/projectBanner.glb');
        this.addPhotoToBanner()
    }

    private addPhotoToBanner() {
        let link = 'https://chinmayanands.github.io/GPAgenerator/'
        let picPath = '/assets/project/projectPictures/GPAGenerator.jpg'
        this.TextureLoader.load(picPath, (texture) => {
            let material = new THREE.MeshBasicMaterial({ map: texture });
            let geometry = new THREE.BoxGeometry(11, 5.5, 0.01)
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(this.position.x, this.position.y + 4.5, this.position.z + 0.3);
            mesh.rotation.y = -Math.PI / 6
            this.scene.add(mesh);
        })
    }
}
