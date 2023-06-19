import { barrier } from "./barrier";
import { Coordinates } from "./Coordinates";
import { Orientation } from "./Orientation";

export class Planet {
  private width: number;
  private height: number;
  private barriers: Array<barrier>;
 
  constructor(width: number, height: number,barriers:Array<barrier>=[]) {
    this.width = width;
    this.height = height;
    this.barriers=barriers;
  }
  public addBarrier(barrier: barrier): void {
    this.barriers.push(barrier);
  }
  public getSize(): { width: number; height: number } {
    return { width: this.width, height: this.height };
  }
  isBarrierInFrontOf(position : Coordinates,Orientation:Orientation):C{
    let isObstacleInXY : Boolean;

    //Permet de savoir si un obtacle est devant un élément ici un rover , mais sa pourrait être un alien ou je sais pas quoi
    switch (Orientation.getValue()) {
      case 0:
        
        this.isObstacleInXY(position.getX()+1,position.getY());
        break;
      case 90:
        this.isObstacleInXY(position.getX(),position.getY()+1);
        break;     
      case 180:
        this.isObstacleInXY(position.getX()-1,position.getY());

        break;
      case 270:  
        this.isObstacleInXY(position.getX()-1,position.getY());

        break;

    }
  }
  distanceBarrierFrom(){

  }
  isBarrierXY(x: number, y: number): Boolean{
    this.barriers.forEach(barrier => {
      if(barrier.getPosition().getX()==x && barrier.getPosition().getY()==y){
        return true;
      }
    });
    return false;
  }
  isOutmap(x: number, y: number): boolean {
    let isValidPosition : boolean = true;
    if(x<0 || x >this.width){

      isValidPosition=false;
    }
    if(y<0 || y >this.height){
      isValidPosition=false;
    }
    return isValidPosition;
  }
}