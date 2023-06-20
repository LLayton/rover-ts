import { Orientation } from "../../Model/Orientation";
import { Coordinates } from "../../Model/Coordinates";
import { Planet } from "../../Model/Planet";
import { Rover } from "../../Model/Rover";


/*
const barrie=new barrier(posbarri,plan);
//plan.addBarrier(barrie);
const monitors= new Monitor(rover);*/


describe('Avancer de  5  départ à 5 arrivé 10', () => {
  const pos = new Coordinates(5, 5);
  const plan = new Planet(10, 10);
  const orientation = new Orientation(0);
  const rover = new Rover(orientation, pos, plan);
  rover.move(5);

  it('Il doit pouvoir avancer de +5 vers la droite donc 10 ' , () => {
    expect(rover.getPosition().getX()).toBe(10);
  });

});

describe('Avancer de  5  départ de 6 arrivé à 1', () => {
  const pos = new Coordinates(5, 5);
  const plan = new Planet(10, 10);
  const orientation = new Orientation(0);
  const rover = new Rover(orientation, pos, plan);
  rover.move(6);

  it('Il doit pouvoir avancer de +5 vers la droite donc 10 ' , () => {
    expect(rover.getPosition().getX()).toBe(1);
  });

});
