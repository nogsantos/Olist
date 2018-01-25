import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
/*
 * Rotes
 */
const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/pages/system.module#SystemModule'
    },
    { path: '**', redirectTo: '' },
];

/**
 * Main app routes'
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
