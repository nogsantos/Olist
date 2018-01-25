import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Index Component
 *
 * @export
 * @class IndexComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
    /**
     * Current user
     */
    user = {
        name: null,
        email: null
    };
    /**
     * Creates an instance of IndexComponent.
     * @param {Router} router
     * @memberof IndexComponent
     */
    constructor(
        private router: Router
    ) { }
    /**
     * Init
     *
     * @memberof IndexComponent
     */
    ngOnInit() {
        const session_user = sessionStorage.getItem('user');
        if (session_user) {
            this.user = Object.assign(JSON.parse(session_user));
        } else {
            this.router.navigate(['']);
        }
    }

}
