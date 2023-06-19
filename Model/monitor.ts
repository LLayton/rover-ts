import { Rover } from "./Rover";
import {Orientation} from "./Orientation"
export class Monitor {
  private rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }
  public operation(...commands: Array<Function>): void {
    commands.forEach(command => command());
  }

}
