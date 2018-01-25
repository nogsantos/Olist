import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAccountComponent } from './auth/new-account/new-account.component';
import { IndexComponent } from './index/index.component';
import { Error404Component } from './error-404/error-404.component';
/**
 * Routes definitions
 */
const routes: Routes = [
    {
        path: '',
        component: NewAccountComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
/**
 * System routes
 *
 * @export
 * @class SystemRoutingModule
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SystemRoutingModule { }
