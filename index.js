var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZeepOriginal = /** @class */ (function (_super) {
    __extends(ZeepOriginal, _super);
    function ZeepOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeepOriginal.prototype.zip = function (config) { return cordova(this, "zip", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    ZeepOriginal.prototype.unzip = function (config) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    ZeepOriginal.pluginName = "Zeep";
    ZeepOriginal.plugin = "cordova-plugin-zeep";
    ZeepOriginal.pluginRef = "Zeep";
    ZeepOriginal.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    ZeepOriginal.platforms = ["Android", "iOS", "Browser"];
    return ZeepOriginal;
}(IonicNativePlugin));
var Zeep = new ZeepOriginal();
export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plZXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBOENsRyx3QkFBaUI7Ozs7SUFlekMsa0JBQUcsYUFBQyxNQUEyQjtJQVEvQixvQkFBSyxhQUFDLE1BQTJCOzs7Ozs7ZUFqRm5DO0VBMEQwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIFplZXBcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFplZXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3plZXAvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6ZWVwOiBaZWVwKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgY29uZmlnWmlwID0ge1xuICogICAgICBzb3VyY2VVcmw6ICcvcGF0aCcsXG4gKiAgICAgIGRlc3RaaXA6ICdzYW1wbGUuemlwJyxcbiAqICAgICAgUGFzc1ppcDogJ3NlY3JldCdcbiAqICAgfVxuICpcbiAqIHRoaXMuemVlcC56aXAoY29uZmlnWmlwKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xcXG4gKlxuICogbGV0IGNvbmZpZ1VuWmlwID0ge1xuICogICAgICBzb3VyY2VVcmw6ICcvcGF0aCcsXG4gKiAgICAgIGRlc3RaaXA6ICdzYW1wbGUuemlwJyxcbiAqICAgICAgUGFzc1ppcDogJ3NlY3JldCdcbiAqICAgfVxuICogdGhpcy56ZWVwLnVuemlwKGNvbmZpZ1VuWmlwKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1plZXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16ZWVwJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ1plZXAnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdmxpbmRlL2NvcmRvdmEtcGx1Z2luLXplZXAuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaZWVwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGZpbGVzIGZyb20gYSBaSVAgYXJjaGl2ZVxuICAgICAqIEBwYXJhbSBzb3VyY2VVcmwge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXG4gICAgICogQHBhcmFtIGRlc3RaaXAge3N0cmluZ30gRGVzdGluYXRpb24gZm9sZGVyXG4gICAgICogQHBhcmFtIHNvdXJjZVppcCB7c3RyaW5nfSBTb3VyY2UgWklQIGZpbGVcbiAgICAgKiBAcGFyYW0gZGVzdFVybCB7c3RyaW5nfSBEZXN0aW5hdGlvbiBmb2xkZXJcbiAgICAgKiBAcGFyYW0gUGFzc1ppcCB7U3RyaW5nfSBQYXNzd29yZCBaaXBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBudW1iZXIuIDAgaXMgc3VjY2VzcywgLTEgaXMgZXJyb3JcbiAgICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzLFxuICAgIH0pXG4gIHppcChjb25maWc6eyBbczogc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgfSlcbiAgdW56aXAoY29uZmlnOnsgW3M6IHN0cmluZ106IGFueSB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=