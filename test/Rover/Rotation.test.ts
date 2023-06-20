import { Orientation } from "../../Model/Orientation";
import { Coordinates } from "../../Model/Coordinates";
import { Planet } from "../../Model/Planet";
import { Rover } from "../../Model/Rover";

const pos = new Coordinates(7, 7);
const posbarri = new Coordinates(1, 1);
const plan = new Planet(10, 10);
/*
const barrie=new barrier(posbarri,plan);
//plan.addBarrier(barrie);
const monitors= new Monitor(rover);*/


describe('Rotation 0 -> 90', () => {
  const orientationDepart = new Orientation(0);
  const orientationFin = new Orientation(90);
  const rover = new Rover(orientationDepart, pos, plan);
    rover.turn(orientationFin);

  it('Il devrait pouvoir ajouter 90° à son axe de rotation initier à 0 ' , () => {
    expect(rover.getOrientation().getValue()).toBe(90);
  });

});

describe('Rotation 270 -> 0', () => {
  const orientationDepart = new Orientation(270);
  const orientationFin = new Orientation(90);
  const rover = new Rover(orientationDepart, pos, plan);
    rover.turn(orientationFin);

  it('Quand un rover prend + 90 quand sont orientation est à 270 il doit revenir à 0 ' , () => {
    expect(rover.getOrientation().getValue()).toBe(0);
  });

});


describe('Rotation 0 -> 270', () => {
  const orientationDepart = new Orientation(270);
  const orientationFin = new Orientation(90);
  const rover = new Rover(orientationDepart, pos, plan);
    rover.turn(orientationFin);

  it('Quand un rover prend - 90 quand sont orientation est à 0 il doit finit à 270 ' , () => {
    expect(rover.getOrientation().getValue()).toBe(0);
  });

});