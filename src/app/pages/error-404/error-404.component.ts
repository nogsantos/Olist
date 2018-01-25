import { Component } from '@angular/core';
import { Location } from '@angular/common';
/**
 * Error component
 *
 * @export
 * @class Error404Component
 */
@Component({
    selector: 'app-error-404',
    templateUrl: './error-404.component.html'
})
export class Error404Component {
    /**
     * Creates an instance of Error404Component.
     * @param {Router} router
     * @memberof Error404Component
     */
    constructor(
        private _location: Location
    ) { }
    /**
     * Back to the last page
     *
     * @memberof Error404Component
     */
    back() {
        this._location.back();
    }
}
