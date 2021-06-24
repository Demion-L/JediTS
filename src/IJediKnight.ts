export interface IJediKnight {
  name: string;
  amountOFMDCL: number;

  fear: number
  rage: number
  kindness: number

  readonly typeofKnight: string;
  hasPadavan: boolean;
  experiance: number;

  canBeMagister(): boolean;
  fight(): void;
  useForce(): void;
  side(): string;
}
