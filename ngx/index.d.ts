import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 *
 * @usage
 * ```typescript
 * import { Zeep } from '@ionic-native/Zeep/ngx';
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 *
 * this.zeep.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.Passwprd zip))
 *  .then((result) => {
 *    if(result === 0) console.log('SUCCESS');
 *    if(result === -1) console.log('FAILED');
 *  });
 *
 * ```
 */
import * as ɵngcc0 from '@angular/core';
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
    zip(sourceUrl: string, destZip: string, PassZip: string): Promise<number>;
    unzip(sourceZip: string, destUrl: string, PassZip: string): Promise<number>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<Zeep, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<Zeep>;
}

//# sourceMappingURL=index.d.ts.map