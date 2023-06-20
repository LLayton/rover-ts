import { Orientation } from ".././Model/Orientation";
import { Coordinates } from ".././Model/Coordinates";
import { Planet } from ".././Model/Planet";
import { Rover } from ".././Model/Rover";
const each = require("jest-each").default;


import { barrier } from ".././Model/barrier";
import { Monitor } from ".././Model/Monitor";
import { test } from "node:test";

const pos = new Coordinates(7, 7);
const posbarri = new Coordinates(1, 1);
const plan = new Planet(10, 10);
/*
const barrie=new barrier(posbarri,plan);
//plan.addBarrier(barrie);
const monitors= new Monitor(rover);*/


describe('Mon objet rover', () => {
  const orientationDepart = new Orientation(0);
  const orientationFin = new Orientation(90);
  const rover = new Rover(orientationDepart, pos, plan);
    rover.turn(orientationFin);

  it('Il devrait pouvoir ajouter 90° à son axe de rotation ' , () => {
    expect(rover.getOrientation().getValue()).toBe(90);
  });

});
