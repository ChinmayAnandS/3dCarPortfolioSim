import * as THREE from "three";
import * as CANNON from "cannon-es";
import { Position, Rotation } from "../util/types";

interface RampSize {
  width: number;
  height: number;
  depth: number;
}

export default class Rampjump {
  private scene: THREE.Scene;
  private world: CANNON.World;
  private rampPosition: Position;
  private rampSize: RampSize;
  private rampAngle: Rotation;
  private rampPhysicsMaterial: CANNON.Material;
  private rampMesh!: THREE.Mesh;
  private rampBody!: CANNON.Body;

  constructor(
    scene: THREE.Scene,
    world: CANNON.World,
    rampPosition: Position,
    rampSize: RampSize,
    rampAngle: Rotation,
  ) {
    this.scene = scene;
    this.world = world;
    this.rampPosition = rampPosition;
    this.rampSize = rampSize;
    this.rampAngle = rampAngle;

    this.rampPhysicsMaterial = new CANNON.Material("rampMaterial");

    this.initRamp();
    this.initLandingRamp();
  }

  private initRamp(): void {
    const { width, height, depth } = this.rampSize;
    const rampGeometry = new THREE.BoxGeometry(width, height, depth);
    const rampMaterial = new THREE.MeshPhongMaterial({ color: 0xffa233 });
    this.rampMesh = new THREE.Mesh(rampGeometry, rampMaterial);
    this.rampMesh.position.set(
      this.rampPosition.x,
      this.rampPosition.y,
      this.rampPosition.z,
    );
    this.rampMesh.setRotationFromAxisAngle(
      new THREE.Vector3(this.rampAngle.x, this.rampAngle.y, this.rampAngle.z),
      this.rampAngle.angle,
    );
    this.scene.add(this.rampMesh);

    this.rampBody = new CANNON.Body({
      mass: 0,
      material: this.rampPhysicsMaterial,
    });
    this.rampBody.addShape(
      new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2)),
    );
    this.rampBody.position.set(
      this.rampPosition.x,
      this.rampPosition.y,
      this.rampPosition.z,
    );
    this.rampBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(this.rampAngle.x, this.rampAngle.y, this.rampAngle.z),
      this.rampAngle.angle,
    );
    this.world.addBody(this.rampBody);
  }

  private initLandingRamp(): void {
    const { width, height, depth } = this.rampSize;
    const rampGeometry = new THREE.BoxGeometry(width, height, depth);
    const rampMaterial = new THREE.MeshPhongMaterial({ color: 0xffa233 });
    this.rampMesh = new THREE.Mesh(rampGeometry, rampMaterial);
    this.rampMesh.position.set(
      this.rampPosition.x,
      this.rampPosition.y,
      this.rampPosition.z + 25,
    );
    this.rampMesh.setRotationFromAxisAngle(
      new THREE.Vector3(this.rampAngle.x, this.rampAngle.y, this.rampAngle.z),
      -this.rampAngle.angle,
    );
    this.scene.add(this.rampMesh);

    this.rampBody = new CANNON.Body({
      mass: 0,
      material: this.rampPhysicsMaterial,
    });
    this.rampBody.addShape(
      new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2)),
    );
    this.rampBody.position.set(
      this.rampPosition.x,
      this.rampPosition.y,
      this.rampPosition.z + 25,
    );
    this.rampBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(this.rampAngle.x, this.rampAngle.y, this.rampAngle.z),
      -this.rampAngle.angle,
    );
    this.world.addBody(this.rampBody);
  }
}
