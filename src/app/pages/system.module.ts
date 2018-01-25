import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { SystemRoutingModule } from './system-routing.module';
import { NewAccountComponent } from './auth/new-account/new-account.component';
import { Error404Component } from './error-404/error-404.component';
/**
 * Array of modules
 */
const _MODULES = [
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SystemRoutingModule
];
/**
 * Array of components
 */
const _COMPONENTS = [
    IndexComponent,
    NewAccountComponent
];
/**
 * System module
 *
 * @export
 * @class SystemModule
 */
@NgModule({
    imports: [..._MODULES],
    declarations: [..._COMPONENTS, Error404Component]
})
export class SystemModule { }
