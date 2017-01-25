/**
 * Created by David on 11/01/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {RouterModule, PreloadAllModules} from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NoContentComponent} from "./no-content/no-content.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NoContentComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }