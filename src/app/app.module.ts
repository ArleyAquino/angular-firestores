import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { ClosetComponent } from './components/closet/closet.component';
import { ClosetSuperiorInfComponent } from './components/closet-superior-inf/closet-superior-inf.component';
import { ClosetSuperiorForComponent } from './components/closet-superior-for/closet-superior-for.component';
import { ClosetInferiorInfComponent } from './components/closet-inferior-inf/closet-inferior-inf.component';
import { ClosetInferiorForComponent } from './components/closet-inferior-for/closet-inferior-for.component';
import { ClosetVestidoInfComponent } from './components/closet-vestido-inf/closet-vestido-inf.component';
import { ClosetVestidoForComponent } from './components/closet-vestido-for/closet-vestido-for.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistrateComponent,
    IniciarsesionComponent,
    ClosetComponent,
    ClosetSuperiorInfComponent,
    ClosetSuperiorForComponent,
    ClosetInferiorInfComponent,
    ClosetInferiorForComponent,
    ClosetVestidoInfComponent,
    ClosetVestidoForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
