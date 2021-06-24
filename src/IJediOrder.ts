import { IJediKnight } from "./IJediKnight";

export interface IJediOrder {
  inWarWithSith: Boolean;
  hasAcademy: Boolean;
  jediList: IJediKnight[];

  getJediWithPadavan(): IJediKnight[];
  getJediByType(typeOfKnight: string): IJediKnight[];
  devoteJedi(jedi: IJediKnight): void;
  expeleJedi(name: IJediKnight): IJediKnight[] | null;
  order66(order?: IJediKnight[]): Promise<IJediKnight[]>;
}
