// import * as THREE from 'three';
import * as CANNON from "cannon-es";

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

export default function AddCannonBox(
  world: CANNON.World,
  boxPosition: Position,
  boxSize: Scale,
  boxRotation: Rotation,
) {
  const body = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(boxPosition.x, boxPosition.y, boxPosition.z),
    quaternion: new CANNON.Quaternion().setFromAxisAngle(
      new CANNON.Vec3(boxRotation.x, boxRotation.y, boxRotation.z),
      boxRotation.angle,
    ),
    shape: new CANNON.Box(
      new CANNON.Vec3(boxSize.x / 2, boxSize.y / 2, boxSize.z / 2),
    ),
  });
  world.addBody(body);
}
