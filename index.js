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
    ZeepOriginal.prototype.zip = function (sourceUrl, destZip, PassZip) { return cordova(this, "zip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    ZeepOriginal.prototype.unzip = function (sourceZip, destUrl, PassZip) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    ZeepOriginal.pluginName = "Zeep";
    ZeepOriginal.plugin = "cordova-plugin-zeep";
    ZeepOriginal.pluginRef = "zeep";
    ZeepOriginal.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    ZeepOriginal.platforms = ["Android", "iOS"];
    return ZeepOriginal;
}(IonicNativePlugin));

var Zeep = new ZeepOriginal();

export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plZXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IvQyx1QkFBaUI7Ozs7SUFZeEMsbUJBQUssYUFBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFxQjs7Ozs7O2NBNUNqRTtFQWdDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBaZWVwXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgQ29yZG92YSBwbHVnaW4gdG8gemlwL3VuemlwcCBmaWxlcyBpbiBBbmRyb2lkIGFuZCBpT1MuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaZWVwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS96ZWVwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6ZWVwOiBaZWVwKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnplZXAuemlwKCdwYXRoL3RvL3NvdXJjZS56ZWVwJywgJ3BhdGgvdG8vZGVzdCcsICdwYXNzd29yZHppcCcpXG4gKiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICogICAgaWYocmVzdWx0ID09PSAwKSBjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xuICogICAgaWYocmVzdWx0ID09PSAtMSkgY29uc29sZS5sb2coJ0ZBSUxFRCcpO1xuICogIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1plZXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16ZWVwJyxcbiAgcGx1Z2luUmVmOiAnemVlcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdmxpbmRlL2NvcmRvdmEtcGx1Z2luLXplZXAuZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFplZXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFeHRyYWN0cyBmaWxlcyBmcm9tIGEgWklQIGFyY2hpdmVcbiAgICogQHBhcmFtIHNvdXJjZVplZXAge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXG4gICAqIEBwYXJhbSBkZXN0VXJsIHtzdHJpbmd9IERlc3RpbmF0aW9uIGZvbGRlclxuICAgKiBAcGFyYW0gb25Qcm9ncmVzcyB7RnVuY3Rpb259IG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBwcm9ncmVzcyB1cGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIHVuemVlcChzb3VyY2VaZWVwOiBzdHJpbmcsIGRlc3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==