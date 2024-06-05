import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

interface Position {
    x: number;
    y: number;
    z: number;
}

export default class TextName {
    private scene: THREE.Scene;
    private world: CANNON.World;
    private textPosition: Position;
    private model!: THREE.Mesh;
    private body!: CANNON.Body;
    private textboxMaterial: CANNON.Material;
    private groundBodyMaterial: CANNON.Material;
    private model1!: THREE.Mesh;
    private body1!: CANNON.Body;
    private model2!: THREE.Mesh;
    private body2!: CANNON.Body;

    constructor(scene: THREE.Scene, groundBodyMaterial: CANNON.Material, world: CANNON.World, textPosition: Position) {
        this.scene = scene;
        this.world = world;
        this.textPosition = textPosition;
        this.groundBodyMaterial = groundBodyMaterial;

        this.textboxMaterial = new CANNON.Material('textboxMaterial');

        const textboxGroundContactMaterial = new CANNON.ContactMaterial(this.groundBodyMaterial, this.textboxMaterial, {
            friction: 10,
            restitution: 0.1
        });
        this.world.addContactMaterial(textboxGroundContactMaterial);

        this.initFirstNameText();
        this.initLastNameText();
        this.initInitialsText();
    }

    private initFirstNameText(): void {
        const loader = new GLTFLoader();
        loader.load('./assets/playground/miscelleneous/firstName1.glb', (gltf) => {
            this.model = gltf.scene.children[0] as THREE.Mesh;
            this.model.scale.set(1.5, 1.5, 1.5)
            this.model.position.set(this.textPosition.x, this.textPosition.y, this.textPosition.z);
            this.scene.add(this.model);

            this.createCannonBody()
        }, undefined, (error) => {
            console.error('An error occurred loading the font:', error);
        })
    }

    private initLastNameText(): void {
        const loader = new GLTFLoader();
        loader.load('./assets/playground/miscelleneous/lastName1.glb', (gltf) => {
            this.model1 = gltf.scene.children[0] as THREE.Mesh;
            this.model1.scale.set(1.5, 1.5, 1.5)
            this.model1.position.set(this.textPosition.x, this.textPosition.y, this.textPosition.z + 5.5);
            this.scene.add(this.model1);

            this.createCannonBody1()
        }, undefined, (error) => {
            console.error('An error occurred loading the font:', error);
        })
    }

    private initInitialsText(): void {
        const loader = new GLTFLoader();
        loader.load('./assets/playground/miscelleneous/initial1.glb', (gltf) => {
            this.model2 = gltf.scene.children[0] as THREE.Mesh;
            this.model2.scale.set(1.5, 2, 1.5)
            this.model2.position.set(this.textPosition.x, this.textPosition.y, this.textPosition.z);
            this.scene.add(this.model2);

            this.createCannonBody2()
        }, undefined, (error) => {
            console.error('An error occurred loading the font:', error);
        })
    }

    private createCannonBody(): void {
        const box = new THREE.Box3().setFromObject(this.model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2 + 0.3, size.z / 2 - 0.2);
        const shape = new CANNON.Box(halfExtents);
        this.body = new CANNON.Body({
            mass: 50,
            position: new CANNON.Vec3(this.model.position.x, this.model.position.y + 2, this.model.position.z),
            material: this.textboxMaterial,
            shape: shape
        });
        this.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2)
        this.world.addBody(this.body);
    }

    private createCannonBody1(): void {
        const box = new THREE.Box3().setFromObject(this.model1);
        const size = new THREE.Vector3();
        box.getSize(size);
        const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2 + 0.05, size.z / 2);
        const shape = new CANNON.Box(halfExtents);
        this.body1 = new CANNON.Body({
            mass: 10,
            position: new CANNON.Vec3(this.model1.position.x, this.model1.position.y + 2, this.model1.position.z),
            material: this.textboxMaterial,
            shape: shape
        });
        this.body1.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2)
        this.world.addBody(this.body1);
    }

    private createCannonBody2(): void {
        const box = new THREE.Box3().setFromObject(this.model2);
        const size = new THREE.Vector3();
        box.getSize(size);
        const halfExtents = new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2);
        const shape = new CANNON.Box(halfExtents);
        this.body2 = new CANNON.Body({
            mass: 50,
            position: new CANNON.Vec3(this.model1.position.x, this.model1.position.y + 2, this.model1.position.z + 3),
            material: this.textboxMaterial,
            shape: shape
        });
        this.body2.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2)
        this.world.addBody(this.body2)
    }

    public updateTextPhysics(): void {
        if (this.model === undefined || this.body === undefined) return;
        this.model.position.copy(this.body.position as unknown as THREE.Vector3);
        this.model.quaternion.copy(this.body.quaternion as unknown as THREE.Quaternion);

        if (this.model1 === undefined || this.body1 === undefined) return;
        this.model1.position.copy(this.body1.position as unknown as THREE.Vector3);
        this.model1.quaternion.copy(this.body1.quaternion as unknown as THREE.Quaternion);

        if (this.model2 === undefined || this.body2 === undefined) return;
        this.model2.position.copy(this.body2.position as unknown as THREE.Vector3);
        this.model2.quaternion.copy(this.body2.quaternion as unknown as THREE.Quaternion);
    }
}