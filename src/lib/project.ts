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
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    mesh!: THREE.Mesh;
    link!: string;
    camera: THREE.Camera;
    camera1: THREE.Camera;

    constructor(scene: THREE.Scene, camera: THREE.Camera, camera1: THREE.Camera, world: CANNON.World, position: Position, rotation: Rotation) {
        this.scene = scene;
        this.camera = camera;
        this.camera1 = camera1;
        this.world = world;
        this.position = position;
        this.rotation = rotation;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.ImageLoader = new THREE.ImageLoader();
        this.TextureLoader = new THREE.TextureLoader();

        this.init();
    }

    init() {
        // console.log('Project initialized');
        addPropGLTF(this.scene, this.position, { x: 1, y: 1, z: 1 }, this.rotation, './assets/project/projectBanner.glb');
        this.addPhotoToBanner()
        window.addEventListener('click', this.onDocumentMouseClick.bind(this), false);
        window.addEventListener('click', this.onDocumentMouseClick1.bind(this), false);
    }

    private addPhotoToBanner() {
        this.link = 'https://chinmayanands.github.io/GPAgenerator/'
        let picPath = './assets/project/projectPictures/GPAGenerator.jpg'
        this.TextureLoader.load(picPath, (texture) => {
            let material = new THREE.MeshBasicMaterial({ map: texture });
            let geometry = new THREE.BoxGeometry(11, 5.5, 0.01)
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.set(this.position.x, this.position.y + 4.5, this.position.z + 0.3);
            this.mesh.rotation.y = -Math.PI / 6
            this.scene.add(this.mesh);
        })
    }

    private onDocumentMouseClick(event: MouseEvent) {
        event.preventDefault();

        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // Calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects(this.scene.children);

        if (intersects.length > 0) {
            if (intersects[0].object === this.mesh) {
                window.open(this.link, '_blank');
            }
        }
    }

    private onDocumentMouseClick1(event: MouseEvent) {
        event.preventDefault()

        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        this.raycaster.setFromCamera(this.mouse, this.camera1);

        // Calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects(this.scene.children);

        if (intersects.length > 0) {
            if (intersects[0].object === this.mesh) {
                window.open(this.link, '_blank');
            }
        }
    }
}
