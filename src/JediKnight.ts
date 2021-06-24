/**
 * Class JediKnight -> Jedi
 * @param{String} typeofKight
 * @param{Boolean} hasPadavan
 * @param{Number} experiance
 */
import {Jedi} from "./Jedi";
import {IJediKnight} from "./IJediKnight";

  export class JediKnight extends Jedi implements IJediKnight {
  protected _name: string;
  protected _amountOFMDCL: number;
  protected _fear: number;
  protected _rage: number;
  protected _kindness: number;
  public readonly typeofKnight: string;
  private _hasPadavan: boolean;
  private _experiance: number;


  public get hasPadavan(): boolean {
    return this._hasPadavan;
  }

  public set hasPadavan(hasPadavan: boolean) {
    this._hasPadavan = hasPadavan;
  }

  public get experiance(): number {
    return this._experiance;
  }

  public set experiance(experiance: number) {
    this._experiance = experiance;
  }

  public constructor(
    name: string,
    amountOFMDCL: number,
    fear: number,
    rage: number,
    kindness: number,
    typeofKight: string,
    hasPadavan: boolean,
    experiance: number
  ) {
    super(name, amountOFMDCL, fear, rage, kindness);
    this.typeofKnight = typeofKight;
    this._hasPadavan = hasPadavan;
    this._experiance = experiance;
  }

  public canBeMagister():boolean {
    if (this._experiance > 5000) {
      return true;
    } else {
      return false;
    }
  }
}
