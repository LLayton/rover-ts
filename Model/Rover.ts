import { Coordinates } from "./Coordinates";
import { Orientation } from "./Orientation";
import { Planet } from "./Planet";
export class Rover {
  private position: Coordinates;
  private orientation: Orientation;
  private planet: Planet;
  private commands: Array<Function>=[];

  constructor(orientation: Orientation, position: Coordinates, planet: Planet) {
    this.position = position;
    this.orientation = orientation;
    this.planet = planet;
  }

  /*public addCommand(command: Function):void{
    this.commands.push(command());
  }

  public setCommands(commands:Array<Function>):void{
    this.commands =  commands;
  }

  public executeCommands():void{
    this.commands.forEach(command =>command );
  }*/

  public getPosition(): Coordinates{
    return this.position;
  }

  public getOrientation(): Orientation{
    return this.orientation;
  }

  public turn(degree: Orientation): void{
    //360 étant un tour complet, il suffit d'enlever 360 quand on a fait un tour complet
    if (this.orientation.getValue()+degree.getValue()>=360) {
      this.orientation.setValue(this.orientation.getValue()+degree.getValue()-360);
      return;
    }
    //quand je passe de 0 à -90 j'arrive en équivalent à 270 je doit donc ajouter 360
    if (this.orientation.getValue()+degree.getValue()<0) {
      this.orientation.setValue(this.orientation.getValue()+degree.getValue()+360);
      return;
    }
    if (this.orientation.getValue()+degree.getValue()>0 && this.orientation.getValue()+degree.getValue()<360) {
      this.orientation.setValue(this.orientation.getValue() + degree.getValue());
      return;
    }
    /*else{
      this.orientation.setValue(this.orientation.getValue() + degree.getValue());
    }*/
    /*if (this.orientation.getValue()==170 && degree.getValue()>0) {
      this.orientation.setValue(0);
    }else{
      this.orientation.setValue(this.orientation.getValue() + degree.getValue());
    }*/
  }

  public move(distance : number): void{
    
    switch (this.orientation.getValue()) {
      case 0:
        if (this.planet.isOutmap(this.position.getX() + distance,this.position.getY())) {
          this.position.setX(this.position.getX() + distance);
        }else{
          const distanceMur= this.planet.getSize().width-this.position.getX();
          const newposition=Math.abs(distanceMur-distance);
          this.position.setX(newposition);
        }
        break;
      case 90:
        if (this.planet.isOutmap(this.position.getX(),this.position.getY()+distance)) {
          this.position.setY(this.position.getY() + distance);
        }else{
          const distanceMur= this.planet.getSize().height-this.position.getY();
          const newposition=Math.abs(distanceMur-distance);
          this.position.setY(newposition);       
        }
        break;
      case 180:
        if (this.planet.isOutmap(this.position.getX()-distance,this.position.getY())) {
          this.position.setX(this.position.getX() - distance);
        }else{
          const distanceMur= this.planet.getSize().width-this.position.getX();
          //Si je part à 2 et que je recule de 5 alors la distance du point de l'autre côté est = à 3 donc 
          const newposition=this.planet.getSize().width-Math.abs(distanceMur-distance);
          this.position.setX(newposition);
        }
        break;
      case 270 :
        if (this.planet.isOutmap(this.position.getX(),this.position.getY()-distance)) {
          this.position.setY(this.position.getY()-distance);
        }else{
          const distanceMur= this.planet.getSize().height-this.position.getY();
          //Si je part à 2 et que je recule de 5 alors la distance du point de l'autre côté est = à 3 donc 
          const newposition=this.planet.getSize().height-Math.abs(distanceMur-distance);
          this.position.setY(newposition);      
        }
        break;
    }

  }
}
