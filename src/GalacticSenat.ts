import {IJediOrder} from "./IJediOrder";

class GalacticSenat {
   private _name: string
   private _locationOfHQ: string
   private _leaderName: string

   public constructor(name : string, locationOfHQ : string, leaderName : string) {
      this._name  = name;
      this._locationOfHQ = locationOfHQ;
      this._leaderName = leaderName;
   }

   public get name(): string {
      return this._name;
   }

   public set name(name: string) {
      this._name = name;
   }

   public get locationOfHQ(): string {
      return this._locationOfHQ;
   }

   public set locationOfHQ(locationOfHQ: string) {
      this._locationOfHQ = locationOfHQ;
   }

   public get leaderName(): string {
      return this._leaderName;
   }

   public set leaderName(leaderName: string) {
      this._leaderName = leaderName;
   }

   public requestHelp(jediOrder: { name: IJediOrder }) {
      return `We should ask ${jediOrder.name} to help us!`;
   }
}