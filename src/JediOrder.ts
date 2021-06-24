/**
 * Class JediOrder
 * @param {String} name
 * @param {Boolean} inWarWithSith
 * @param {Boolean} hasAcademy
 */
import { IJediOrder } from "./IJediOrder";
import { IJediKnight } from "./IJediKnight";

export class JediOrder implements IJediOrder {
  private _name: string;
  private _inWarWithSith: boolean;
  private _hasAcademy: boolean;
  private _jediList: IJediKnight[];

  public constructor(
    name: string,
    inWarWithSith: boolean,
    hasAcademy: boolean
  ) {
    this._name = name;
    this._inWarWithSith = inWarWithSith;
    this._hasAcademy = hasAcademy;
    this._jediList = [];
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get inWarWithSith(): boolean {
    return this._inWarWithSith;
  }

  public set inWarWithSith(inWarWithSith: boolean) {
    this._inWarWithSith = inWarWithSith;
  }

  public get hasAcademy(): boolean {
    return this._hasAcademy;
  }

  public set hasAcademy(hasAcademy: boolean) {
    this._hasAcademy = hasAcademy;
  }

  public get jediList(): IJediKnight[] {
    return this._jediList;
  }

  public getJediWithPadavan(): IJediKnight[] {
    return this._jediList.filter((jedi: IJediKnight) => jedi.hasPadavan);
  }

  public getJediByType(type: string): IJediKnight[] {
    return this._jediList.filter(
      (jedi: IJediKnight) => jedi.typeofKnight === type
    );
  }

  public devoteJedi(jedi: IJediKnight): void {
    this._jediList.push(jedi);
  }

  public expeleJedi(jedi: IJediKnight): IJediKnight[] | null {
    const index: number = this._jediList.indexOf(jedi);
    if (index > -1) {
      return this._jediList.splice(index, 1);
    }
    return null;
  }

  /**
   * order66 method with Callback Function
   */

  // order66(cb) {
  //   let survivors;
  //   let error;

  //   const atack = () => {

  //     if (this._jediList.length < 1) {
  //       error = new Error('No Jedis here!!!');
  //       // console.log(error);
  //     } else if (this._jediList.length >= 4) {
  //       this._jediList.pop();
  //       setTimeout(atack, 999);
  //     } else {
  //       survivors = this.jediList;
  //       cb && cb(error, survivors);
  //     }
  //   };
  //   setTimeout(atack, 999);
  // }

  /**
   * order66 method with Promise
   */

  order66(order?: IJediKnight[]): Promise<IJediKnight[]> {


    const jediList: IJediKnight[] = order || this._jediList;

    return new Promise<IJediKnight[]>((resolve, reject) => {
      const atack = (): void => {
        jediList.pop();
        // console.log(jediList);

        if (jediList.length < 1) {
          reject(new Error("No Jedis here!!!"));
        } else if (jediList.length >= 4) {
          setTimeout(atack, 333);
        } else {
          resolve(jediList);
        }
      };
      setTimeout(atack, 333);
    });
  }
}
