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
    Zeep.prototype.zip = function (sourceUrl, destZip, PassZip) { return core.cordova(this, "zip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zeep.prototype.unzip = function (sourceZip, destUrl, PassZip) { return core.cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zeep.pluginName = "Zip";
    Zeep.plugin = "cordova-plugin-zip";
    Zeep.pluginRef = "zip";
    Zeep.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zeep.platforms = ["Android", "iOS"];
    Zeep.decorators = [
        { type: core$1.Injectable }
    ];
    return Zeep;
}(core.IonicNativePlugin));

exports.Zeep = Zeep;
