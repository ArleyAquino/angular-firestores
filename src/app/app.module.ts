import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistrateComponent,
    IniciarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
