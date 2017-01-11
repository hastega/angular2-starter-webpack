/**
 * Created by David on 11/01/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {NoContentComponent} from "./no-content/no-content.component";

//import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**',    component: NoContentComponent },
];