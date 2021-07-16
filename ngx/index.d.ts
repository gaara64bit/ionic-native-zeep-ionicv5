import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Zeep } from '@ionic-native/zeep/ngx';
 *
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 *
 *
 * this.zeep.zip('sourceUrl', 'destZip','PassZip')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * this.zeep.unzip('sourceZip', 'destUrl','PassZip')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Zeep extends IonicNativePlugin {
    /**
    * Extracts files from a ZIP archive
    * @param sourceUrl {string} Source ZIP file
    * @param destZip {string} Destination folder
    * @param sourceZip {string} Source ZIP file
    * @param destUrl {string} Destination folder
    * @param PassZip {String} Password Zip
    * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
    */
    zip(sourceUrl: string, destZip: string, PassZip: string): Promise<any>;
    unzip(sourceZip: string, destUrl: string, PassZip: string): Promise<any>;
}
