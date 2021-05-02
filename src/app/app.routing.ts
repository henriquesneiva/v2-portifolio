import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { LandingComponent } from './examples/landing/landing.component';
import {CstruckComponent} from './examples/cstruck/cstruck.component'
import {EstoqueComponent} from './examples/estoque/estoque.component'

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    {path: 'cstruck',           component:CstruckComponent},
    {path: 'estoque',           component:EstoqueComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false ,
      anchorScrolling:'enabled'
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
