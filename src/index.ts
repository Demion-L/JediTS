import { JediKnight } from "./JediKnight";
import { JediOrder } from "./JediOrder";
import { IJediKnight } from "./IJediKnight";
import { IJediOrder } from "./IJediOrder";

const obivanKenoby: IJediKnight = new JediKnight(
  "Obi van Kenoby",
  550,
  4,
  3,
  4,
  "guardian",
  true,
  6000
);
const enakinSkywalker: IJediKnight = new JediKnight(
  "Enakin Skywalker",
  950,
  3,
  -2,
  3,
  "sentinel",
  false,
  1500
);
const maceWindu: IJediKnight = new JediKnight(
  "Mace Windu",
  650,
  4,
  -3,
  2,
  "guardian",
  true,
  6000
);
const yoda: IJediKnight = new JediKnight(
  "Yoda",
  1250,
  5,
  0,
  4,
  "consular",
  false,
  120000
);
const lukeSkywalker: IJediKnight = new JediKnight(
  "Luke Skywalker",
  950,
  3,
  3,
  5,
  "guardian",
  false,
  6000
);
const ploKun: IJediKnight = new JediKnight(
  "Plo Koon",
  650,
  4,
  3,
  4,
  "sentinel",
  true,
  6000
);
const ahsokaTano: IJediKnight = new JediKnight(
  "Ahsoka Tano",
  450,
  3,
  2,
  4,
  "consular",
  false,
  3000
);
const quiGon: IJediKnight = new JediKnight(
  "Qui-Gon Jinn",
  750,
  5,
  5,
  5,
  "consular",
  true,
  8000
);
const kitFisto: IJediKnight = new JediKnight(
  "Kit Fisto",
  550,
  3,
  1,
  2,
  "guardian",
  false,
  5500
);
const kiAdiMundi: IJediKnight = new JediKnight(
  "Ki-Adi-Mundi",
  550,
  3,
  1,
  2,
  "sentinel",
  true,
  5500
);

const prostoVasia: IJediKnight = new JediKnight(
  "Vasia",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);
const prostoMaks: IJediKnight = new JediKnight(
  "Maks",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);
const prostoDima: IJediKnight = new JediKnight(
  "Dima",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);
const prostoVadim: IJediKnight = new JediKnight(
  "Vadim",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);
const prostoPasha: IJediKnight = new JediKnight(
  "Pasha",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);
const prostoSveta: IJediKnight = new JediKnight(
  "Sveta",
  5,
  3,
  1,
  2,
  "sentinel",
  false,
  5
);

const jSquad: IJediKnight[] = [
  obivanKenoby,
  yoda,
  enakinSkywalker,
  maceWindu,
  lukeSkywalker,
  ploKun,
  ahsokaTano,
];

const jSquad2: IJediKnight[] = [quiGon, kitFisto, kiAdiMundi, prostoVasia];

const jediOrder: IJediOrder = new JediOrder(
  "Order of New Republic",
  true,
  true
);

jSquad.forEach((element: IJediKnight): void => {
  jediOrder.devoteJedi(element);
});

jediOrder
  .order66()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.warn(error));

let asyncJediOrder = async (newSquad: IJediKnight[]) => {
  try {
    const survivors: IJediKnight[] = await jediOrder.order66();
    console.log(survivors);

    const enforcement = (newSquad: IJediKnight[]) => {
      newSquad.forEach((element) => {
        survivors.push(element);
      });
      return survivors;
    };
    const newOrder: IJediKnight[] = enforcement(newSquad).reverse();
    console.log(newOrder);

    const nextRound: IJediKnight[] = await jediOrder.order66(newOrder);
    console.dir(nextRound);
  } catch (error) {
    console.error(error);
  }
};
asyncJediOrder(jSquad2).then((result) => console.log(result));
