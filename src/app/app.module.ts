import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { 首页Component } from './首页/首页.component';
import { 我要买Component } from './我要买/我要买.component';
import { 我要卖Component } from './我要卖/我要卖.component';
import { 我的Component } from './我的/我的.component';


const appRoutes:Routes=[
  {path:'',redirectTo:'首页',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    首页Component,
    我要买Component,
    我要卖Component,
    我的Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
