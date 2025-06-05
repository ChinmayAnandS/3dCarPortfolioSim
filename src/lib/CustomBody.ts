// CustomBody.ts

import * as CANNON from "cannon-es";

interface UserData {
  isCube?: boolean;
  isBrick?: boolean;
}

export class CustomBody extends CANNON.Body {
  userData: UserData = {};

  constructor(options?: CANNON.BodyOptions) {
    super(options);
  }
}
