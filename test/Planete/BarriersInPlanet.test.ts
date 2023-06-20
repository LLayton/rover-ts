
import { Planet } from "../../Model/Planet";
import { barrier } from "../.././Model/barrier";
import { Coordinates } from "../../Model/Coordinates";
import { Orientation } from "../../Model/Orientation";
import { Rover } from "../../Model/Rover";



describe("Est-ce qu'un obtacle est présent en X Y ? ", () => {
  const mars = new Planet(10, 10);
  const Coordinates1 =new Coordinates(5,5);
  //const Coordinates2 =new Coordinates(7,5);

  const barrier1 = new barrier(Coordinates1)
  //const barrier2 = new barrier(Coordinates2);
  mars.addBarrier(barrier1);
  it("J'ai créer au préalable une barrière en 5,5 " , () => {
    expect(mars.isBarrierXY(5,5)).toBe(true);
  });

});
describe("Est-ce qu'un obtacle n'est pas présent en X Y ? ", () => {
    const mars = new Planet(10, 10);
    const Coordinates1 =new Coordinates(6,5);
    //const Coordinates2 =new Coordinates(7,5);
  
    const barrier1 = new barrier(Coordinates1)
    //const barrier2 = new barrier(Coordinates2);
    mars.addBarrier(barrier1);
    it("J'ai créer au préalable une barrière en 6,5 il " , () => {
      expect(mars.isBarrierXY(5,5)).toBe(false);
    });
  
  });
  describe("Est-ce que l'objet 'sort' de la planète ?' ", () => {
    const pos = new Coordinates(15, 10);
    const mars = new Planet(10, 10);
    const orientation = new Orientation(0);
    const rover = new Rover(orientation, pos, mars);
    it("J'ai créer au préalable une barrière en 6,5 il " , () => {
      expect(mars.isOutmap(rover.getPosition().getX(),rover.getPosition().getY())).toBe(false);
    });
  
  });
  describe("Est-ce que l'objet est sur  la planète ?' ", () => {
    const pos = new Coordinates(7, 10);
    const mars = new Planet(10, 10);
    const orientation = new Orientation(0);
    const rover = new Rover(orientation, pos, mars);
    it("J'ai créer au préalable une barrière en 6,5 il " , () => {
      expect(mars.isOutmap(rover.getPosition().getX(),rover.getPosition().getY())).toBe(true);
    });
  
  });