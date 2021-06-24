import {ForceUser} from "./ForceUser";

 export class Jedi extends ForceUser {
  protected _name: string
  protected _amountOFMDCL: number
  protected _fear: number
  protected _rage: number
  protected _kindness: number

     public constructor(name: string, amountOFMDCL: number, fear: number, rage: number, kindness: number) {
     super(name, amountOFMDCL);
     this._fear = fear;
     this._rage = rage;
     this._kindness = kindness;
    }
 
   public get fear(): number {
     return this._fear;
   }
 
   public set fear(fear: number) {
     this._fear = fear;
   }
 
   public get rage(): number {
     return this._rage;
   }
 
   public set rage(rage: number) {
     this._rage = rage;
   }
 
   public get kindness(): number {
     return this._kindness;
   }
 
   public set kindness(kindness: number) {
     this._kindness = kindness;
   }
 
   public fight(): void {
     console.log(`Jedi ${this._name} start to fight`);
   }
 
   public useForce(): void {
     console.log(`Jedi ${this._name} is using Force!`);
   }
 
   public side(): string {
     const ballance: number = this._rage + this._fear + this._kindness;
     let sideIs: string;
     if (ballance > 3) {
       sideIs = "bright";
     } else if (ballance < -3) {
       sideIs = "dark";
     } else {
       sideIs = "grey";
     }
     return sideIs;
   }
 }
 