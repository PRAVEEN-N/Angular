import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { Subscribe } from './Services/subscribe.service';


export const USER_TOKEN = new InjectionToken<Subscribe>('USER_TOKEN');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:USER_TOKEN, useClass: Subscribe}],
  bootstrap: [AppComponent]
})
export class AppModule { }
