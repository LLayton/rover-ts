import { Orientation } from "./Model/Orientation";
import { Coordinates } from "./Model/Coordinates";
import { Planet } from "./Model/Planet";
import { Rover } from "./Model/Rover";
import { barrier } from "./Model/barrier";
import { Monitor } from "./Model/Monitor";
const orient = new Orientation(0);
const pos = new Coordinates(7, 7);
const posbarri = new Coordinates(1, 1);
const orienta = new Orientation(90);
const orienta2 = new Orientation(-90);

const plan = new Planet(10, 10);
const barrie=new barrier(posbarri,plan);
//plan.addBarrier(barrie);
const rover = new Rover(orient, pos, plan);
const monitors= new Monitor(rover);

monitors.operation(
    () => rover.move(5),
    () => rover.turn(orienta),
    () => rover.move(5),
    () => rover.turn(orienta),
    () => rover.move(5),
    () => rover.turn(orienta),
    () => rover.move(5),
  );

/*rover.turn(new Orientation(90));
rover.move();
rover.turn(new Orientation(0));
rover.move();*/

