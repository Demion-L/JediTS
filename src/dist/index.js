"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var JediKnight_1 = require("./JediKnight");
var JediOrder_1 = require("./JediOrder");
var obivanKenoby = new JediKnight_1.JediKnight("Obi van Kenoby", 550, 4, 3, 4, "guardian", true, 6000);
var enakinSkywalker = new JediKnight_1.JediKnight("Enakin Skywalker", 950, 3, -2, 3, "sentinel", false, 1500);
var maceWindu = new JediKnight_1.JediKnight("Mace Windu", 650, 4, -3, 2, "guardian", true, 6000);
var yoda = new JediKnight_1.JediKnight("Yoda", 1250, 5, 0, 4, "consular", false, 120000);
var lukeSkywalker = new JediKnight_1.JediKnight("Luke Skywalker", 950, 3, 3, 5, "guardian", false, 6000);
var ploKun = new JediKnight_1.JediKnight("Plo Koon", 650, 4, 3, 4, "sentinel", true, 6000);
var ahsokaTano = new JediKnight_1.JediKnight("Ahsoka Tano", 450, 3, 2, 4, "consular", false, 3000);
var quiGon = new JediKnight_1.JediKnight("Qui-Gon Jinn", 750, 5, 5, 5, "consular", true, 8000);
var kitFisto = new JediKnight_1.JediKnight("Kit Fisto", 550, 3, 1, 2, "guardian", false, 5500);
var kiAdiMundi = new JediKnight_1.JediKnight("Ki-Adi-Mundi", 550, 3, 1, 2, "sentinel", true, 5500);
var prostoVasia = new JediKnight_1.JediKnight("Vasia", 5, 3, 1, 2, "sentinel", false, 5);
var prostoMaks = new JediKnight_1.JediKnight("Maks", 5, 3, 1, 2, "sentinel", false, 5);
var prostoDima = new JediKnight_1.JediKnight("Dima", 5, 3, 1, 2, "sentinel", false, 5);
var prostoVadim = new JediKnight_1.JediKnight("Vadim", 5, 3, 1, 2, "sentinel", false, 5);
var prostoPasha = new JediKnight_1.JediKnight("Pasha", 5, 3, 1, 2, "sentinel", false, 5);
var prostoSveta = new JediKnight_1.JediKnight("Sveta", 5, 3, 1, 2, "sentinel", false, 5);
var jSquad = [
    obivanKenoby,
    yoda,
    enakinSkywalker,
    maceWindu,
    lukeSkywalker,
    ploKun,
    ahsokaTano,
];
var jSquad2 = [quiGon, kitFisto, kiAdiMundi, prostoVasia];
var jediOrder = new JediOrder_1.JediOrder("Order of New Republic", true, true);
jSquad.forEach(function (element) {
    jediOrder.devoteJedi(element);
});
jediOrder
    .order66()
    .then(function (data) {
    console.log(data);
})["catch"](function (error) { return console.warn(error); });
var asyncJediOrder = function (newSquad) { return __awaiter(void 0, void 0, void 0, function () {
    var survivors_1, enforcement, newOrder, nextRound, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, jediOrder.order66()];
            case 1:
                survivors_1 = _a.sent();
                console.log(survivors_1);
                enforcement = function (newSquad) {
                    newSquad.forEach(function (element) {
                        survivors_1.push(element);
                    });
                    return survivors_1;
                };
                newOrder = enforcement(newSquad).reverse();
                console.log(newOrder);
                return [4 /*yield*/, jediOrder.order66(newOrder)];
            case 2:
                nextRound = _a.sent();
                console.dir(nextRound);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
asyncJediOrder(jSquad2).then(function (result) { return console.log(result); });
