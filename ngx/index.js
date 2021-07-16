import { __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Zeep = /** @class */ (function (_super) {
    __extends(Zeep, _super);
    function Zeep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeep.prototype.zip = function (sourceUrl, destZip, PassZip) { return cordova(this, "zip", {}, arguments); };
    Zeep.prototype.unzip = function (sourceZip, destUrl, PassZip) { return cordova(this, "unzip", {}, arguments); };
    Zeep.pluginName = "Zeep";
    Zeep.plugin = "cordova-plugin-zeep";
    Zeep.pluginRef = "zeep";
    Zeep.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    Zeep.platforms = ["Android", "iOS", "Browser"];
    Zeep.decorators = [
        { type: Injectable }
    ];
    return Zeep;
}(IonicNativePlugin));
export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plZXAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQW1DbEcsd0JBQWlCOzs7O0lBWXpDLGtCQUFHLGFBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsT0FBZTtJQUt2RCxvQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLE9BQWU7Ozs7Ozs7Z0JBbEIxRCxVQUFVOztlQTlDWDtFQStDMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBaZWVwXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaZWVwIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS96ZWVwL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemVlcDogWmVlcCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuemVlcC56aXAoJ3NvdXJjZVVybCcsICdkZXN0WmlwJywnUGFzc1ppcCcpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKiB0aGlzLnplZXAudW56aXAoJ3NvdXJjZVppcCcsICdkZXN0VXJsJywnUGFzc1ppcCcpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmVlcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXplZXAnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnemVlcCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92bGluZGUvY29yZG92YS1wbHVnaW4temVlcC5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFplZXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgICAgLyoqXG4gICAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXG4gICAgICogQHBhcmFtIHNvdXJjZVVybCB7c3RyaW5nfSBTb3VyY2UgWklQIGZpbGVcbiAgICAgKiBAcGFyYW0gZGVzdFppcCB7c3RyaW5nfSBEZXN0aW5hdGlvbiBmb2xkZXJcbiAgICAgKiBAcGFyYW0gc291cmNlWmlwIHtzdHJpbmd9IFNvdXJjZSBaSVAgZmlsZVxuICAgICAqIEBwYXJhbSBkZXN0VXJsIHtzdHJpbmd9IERlc3RpbmF0aW9uIGZvbGRlclxuICAgICAqIEBwYXJhbSBQYXNzWmlwIHtTdHJpbmd9IFBhc3N3b3JkIFppcFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIG51bWJlci4gMCBpcyBzdWNjZXNzLCAtMSBpcyBlcnJvclxuICAgICAqL1xuICBAQ29yZG92YSgpXG4gIHppcChzb3VyY2VVcmw6IHN0cmluZywgZGVzdFppcDogc3RyaW5nLCBQYXNzWmlwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHVuemlwKHNvdXJjZVppcDogc3RyaW5nLCBkZXN0VXJsOiBzdHJpbmcsIFBhc3NaaXA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19