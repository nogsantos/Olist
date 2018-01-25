import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SystemModule } from './pages/system.module';
/**
 * Array of modules
 */
const _MODULES = [
    AppRoutingModule,
    BrowserModule,
    SystemModule,
    BrowserAnimationsModule
];
/**
 * Array of components
 */
const _COMPONENTS = [
    AppComponent,
];
/**
 * App Module
 *
 * @export
 * @class AppModule
 */
@NgModule({
    declarations: [..._COMPONENTS],
    imports: [..._MODULES],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
