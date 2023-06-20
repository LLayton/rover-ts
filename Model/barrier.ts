import { Coordinates } from "./Coordinates";
import { Planet } from "./Planet";
export class barrier {
  private position: Coordinates;

  constructor( position: Coordinates) {
    this.position = position;
  }

  public getPosition(): Coordinates {
    return this.position;
  }

}
