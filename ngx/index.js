import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
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
    Zeep.decorators = [
        { type: Injectable }
    ];
    return Zeep;
}(IonicNativePlugin));
export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ppcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQVl4QyxtQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFVBQXFCOzs7Ozs7O2dCQWJoRSxVQUFVOztjQS9CWDtFQWdDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBaaXBcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byB1bnppcCBmaWxlcyBpbiBBbmRyb2lkIGFuZCBpT1MuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaaXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ppcC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemlwOiBaaXApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuemlwLnVuemlwKCdwYXRoL3RvL3NvdXJjZS56aXAnLCAncGF0aC90by9kZXN0JywgKHByb2dyZXNzKSA9PiBjb25zb2xlLmxvZygnVW56aXBwaW5nLCAnICsgTWF0aC5yb3VuZCgocHJvZ3Jlc3MubG9hZGVkIC8gcHJvZ3Jlc3MudG90YWwpICogMTAwKSArICclJykpXG4gKiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICogICAgaWYocmVzdWx0ID09PSAwKSBjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xuICogICAgaWYocmVzdWx0ID09PSAtMSkgY29uc29sZS5sb2coJ0ZBSUxFRCcpO1xuICogIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ppcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXppcCcsXG4gIHBsdWdpblJlZjogJ3ppcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTW9iaWxlQ2hyb21lQXBwcy9jb3Jkb3ZhLXBsdWdpbi16aXAnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWmlwIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXG4gICAqIEBwYXJhbSBzb3VyY2VaaXAge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXG4gICAqIEBwYXJhbSBkZXN0VXJsIHtzdHJpbmd9IERlc3RpbmF0aW9uIGZvbGRlclxuICAgKiBAcGFyYW0gb25Qcm9ncmVzcyB7RnVuY3Rpb259IG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBwcm9ncmVzcyB1cGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIHVuemlwKHNvdXJjZVppcDogc3RyaW5nLCBkZXN0VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=