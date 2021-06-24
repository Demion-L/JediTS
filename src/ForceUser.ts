/**
 * Class ForceUser
 * @param {String} name
 * @param {Number} amountOFMDCL
 */

 export class ForceUser {
    protected _name: string;
    protected _amountOFMDCL: number;

    public constructor (name : string, amountOFMDCL : number) {
        this._name = name;
        this._amountOFMDCL = amountOFMDCL;
    }

    public get name(): string {
       return this._name;
     }
     public set name(name: string) {
       this._name = name;
     }
 
     public get amountOFMDCL(): number {
       return this._amountOFMDCL;
     }
   }
 