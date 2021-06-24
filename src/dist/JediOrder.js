"use strict";
exports.__esModule = true;
exports.JediOrder = void 0;
var JediOrder = /** @class */ (function () {
    function JediOrder(name, inWarWithSith, hasAcademy) {
        this._name = name;
        this._inWarWithSith = inWarWithSith;
        this._hasAcademy = hasAcademy;
        this._jediList = [];
    }
    Object.defineProperty(JediOrder.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JediOrder.prototype, "inWarWithSith", {
        get: function () {
            return this._inWarWithSith;
        },
        set: function (inWarWithSith) {
            this._inWarWithSith = inWarWithSith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JediOrder.prototype, "hasAcademy", {
        get: function () {
            return this._hasAcademy;
        },
        set: function (hasAcademy) {
            this._hasAcademy = hasAcademy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JediOrder.prototype, "jediList", {
        get: function () {
            return this._jediList;
        },
        enumerable: false,
        configurable: true
    });
    JediOrder.prototype.getJediWithPadavan = function () {
        return this._jediList.filter(function (jedi) { return jedi.hasPadavan; });
    };
    JediOrder.prototype.getJediByType = function (type) {
        return this._jediList.filter(function (jedi) { return jedi.typeofKnight === type; });
    };
    JediOrder.prototype.devoteJedi = function (jedi) {
        this._jediList.push(jedi);
    };
    JediOrder.prototype.expeleJedi = function (jedi) {
        var index = this._jediList.indexOf(jedi);
        if (index > -1) {
            return this._jediList.splice(index, 1);
        }
        return null;
    };
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
    JediOrder.prototype.order66 = function (order) {
        var jediList = order || this._jediList;
        return new Promise(function (resolve, reject) {
            var atack = function () {
                jediList.pop();
                // console.log(jediList);
                if (jediList.length < 1) {
                    reject(new Error("No Jedis here!!!"));
                }
                else if (jediList.length >= 4) {
                    setTimeout(atack, 333);
                }
                else {
                    resolve(jediList);
                }
            };
            setTimeout(atack, 333);
        });
    };
    return JediOrder;
}());
exports.JediOrder = JediOrder;
