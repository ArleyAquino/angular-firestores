import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ClosetComponent } from './components/closet/closet.component';
import { ClosetSuperiorInfComponent } from './components/closet-superior-inf/closet-superior-inf.component';
import { ClosetSuperiorForComponent } from './components/closet-superior-for/closet-superior-for.component';
import { ClosetInferiorInfComponent } from './components/closet-inferior-inf/closet-inferior-inf.component';
import { ClosetInferiorForComponent } from './components/closet-inferior-for/closet-inferior-for.component';
import { ClosetVestidoInfComponent } from './components/closet-vestido-inf/closet-vestido-inf.component';
import { ClosetVestidoForComponent } from './components/closet-vestido-for/closet-vestido-for.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CarucelFormalComponent } from './carucel-formal/carucel-formal.component';
import { CarucelInformalComponent } from './carucel-informal/carucel-informal.component';
import { CarucelFormalVestidoComponent } from './carucel-formal-vestido/carucel-formal-vestido.component';
import { CarucelInformalVestidoComponent } from './carucel-informal-vestido/carucel-informal-vestido.component';

//importar
import {AngularFireAuthModule, AngularFireAuth} from "@angular/fire/auth";
//import {AngularFirestore} from '@angular/fire/firestore';


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
    ClosetVestidoForComponent,
    CarucelFormalComponent,
    CarucelInformalComponent,
    CarucelFormalVestidoComponent,
    CarucelInformalVestidoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
