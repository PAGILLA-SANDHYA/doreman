import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SandyComponent } from './sandy/sandy.component';
import { Sandy1Component } from './sandy1/sandy1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SandyComponent,
    Sandy1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
