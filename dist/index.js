"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Orientation_1 = require("./Model/Orientation");
const Coordinates_1 = require("./Model/Coordinates");
const Planet_1 = require("./Model/Planet");
const Rover_1 = require("./Model/Rover");
const barrier_1 = require("./Model/barrier");
const Monitor_1 = require("./Model/Monitor");
const orient = new Orientation_1.Orientation(0);
const pos = new Coordinates_1.Coordinates(0, 0);
const posbarri = new Coordinates_1.Coordinates(1, 1);
const orienta = new Orientation_1.Orientation(180);
const plan = new Planet_1.Planet(100, 100);
const barrie = new barrier_1.barrier(posbarri, plan);
//plan.addBarrier(barrie);
const rover = new Rover_1.Rover(orient, pos, plan);
const monitors = new Monitor_1.Monitor(rover);
monitors.operation(() => rover.move(), () => rover.move(), () => rover.turn(orienta));
/*rover.turn(new Orientation(90));
rover.move();
rover.turn(new Orientation(0));
rover.move();*/
