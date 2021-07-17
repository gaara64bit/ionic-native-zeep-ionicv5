'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Zeep = /** @class */ (function (_super) {
    tslib.__extends(Zeep, _super);
    function Zeep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeep.prototype.zip = function (sourceUrl, destZip, PassZip) { return core.cordova(this, "zip", { "callbackOrder": "reverse" }, arguments); };
    Zeep.prototype.unzip = function (sourceZip, destUrl, PassZip) { return core.cordova(this, "unzip", { "callbackOrder": "reverse" }, arguments); };
    Zeep.pluginName = "Zeep";
    Zeep.plugin = "cordova-plugin-zeep";
    Zeep.pluginRef = "Zeep";
    Zeep.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    Zeep.platforms = ["Android", "iOS", "Browser"];
    Zeep.decorators = [
        { type: core$1.Injectable }
    ];
    return Zeep;
}(core.IonicNativePlugin));

exports.Zeep = Zeep;
