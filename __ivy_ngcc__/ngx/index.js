import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var Zeep = /** @class */ (function (_super) {
    __extends(Zeep, _super);
    function Zeep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeep.prototype.zip = function (sourceUrl, destZip, PassZip) { return cordova(this, "zip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zeep.prototype.unzip = function (sourceZip, destUrl, PassZip) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zeep.pluginName = "Zeep";
    Zeep.plugin = "cordova-plugin-zeep";
    Zeep.pluginRef = "zeep";
    Zeep.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    Zeep.platforms = ["Android", "iOS"];
Zeep.ɵfac = /*@__PURE__*/ function () { var ɵZeep_BaseFactory; return function Zeep_Factory(t) { return (ɵZeep_BaseFactory || (ɵZeep_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(Zeep)))(t || Zeep); }; }();
Zeep.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: Zeep, factory: function (t) { return Zeep.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(Zeep, [{
        type: Injectable
    }], null, null); })();
    return Zeep;
}(IonicNativePlugin));
export { Zeep };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvemlwL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUlZLElBMEJhLHVCQUFpQjtBQUFFO0FBRTdCO0FBRWI7QUFBTSxJQVFOLG1CQUFLLGFBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsVUFBcUI7QUFJckI7QUFBeUo7QUFBOEI7QUFBeUM7QUFBNkI7QUFBcUU7Z0JBakI3VyxVQUFVOzs7OzBCQUNtQjtBQUFDLE9BaEMvQixMQWdDeUI7QUFBZSxFQUFFLE9BQTdCLEdBQUc7QUFBVztBQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFppcFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFppcCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvemlwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6aXA6IFppcCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy56aXAudW56aXAoJ3BhdGgvdG8vc291cmNlLnppcCcsICdwYXRoL3RvL2Rlc3QnLCAocHJvZ3Jlc3MpID0+IGNvbnNvbGUubG9nKCdVbnppcHBpbmcsICcgKyBNYXRoLnJvdW5kKChwcm9ncmVzcy5sb2FkZWQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDApICsgJyUnKSlcbiAqICAudGhlbigocmVzdWx0KSA9PiB7XG4gKiAgICBpZihyZXN1bHQgPT09IDApIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XG4gKiAgICBpZihyZXN1bHQgPT09IC0xKSBjb25zb2xlLmxvZygnRkFJTEVEJyk7XG4gKiAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmlwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4temlwJyxcbiAgcGx1Z2luUmVmOiAnemlwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb2JpbGVDaHJvbWVBcHBzL2NvcmRvdmEtcGx1Z2luLXppcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaaXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFeHRyYWN0cyBmaWxlcyBmcm9tIGEgWklQIGFyY2hpdmVcbiAgICogQHBhcmFtIHNvdXJjZVppcCB7c3RyaW5nfSBTb3VyY2UgWklQIGZpbGVcbiAgICogQHBhcmFtIGRlc3RVcmwge3N0cmluZ30gRGVzdGluYXRpb24gZm9sZGVyXG4gICAqIEBwYXJhbSBvblByb2dyZXNzIHtGdW5jdGlvbn0gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIHByb2dyZXNzIHVwZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBudW1iZXIuIDAgaXMgc3VjY2VzcywgLTEgaXMgZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgfSlcbiAgdW56aXAoc291cmNlWmlwOiBzdHJpbmcsIGRlc3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==