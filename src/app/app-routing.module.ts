import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import
import { IndexComponent } from  './components/index/index.component';
import {RegistrateComponent} from './components/registrate/registrate.component';
import {IniciarsesionComponent} from './components/iniciarsesion/iniciarsesion.component';
import { ClosetComponent } from './components/closet/closet.component';
import { ClosetSuperiorInfComponent } from './components/closet-superior-inf/closet-superior-inf.component';
import { ClosetSuperiorForComponent } from './components/closet-superior-for/closet-superior-for.component';
import { ClosetInferiorInfComponent } from './components/closet-inferior-inf/closet-inferior-inf.component';
import { ClosetInferiorForComponent } from './components/closet-inferior-for/closet-inferior-for.component';
import { ClosetVestidoForComponent } from './components/closet-vestido-for/closet-vestido-for.component';
import { ClosetVestidoInfComponent } from './components/closet-vestido-inf/closet-vestido-inf.component';
import { CarucelFormalComponent } from './carucel-formal/carucel-formal.component';
import { CarucelInformalComponent } from './carucel-informal/carucel-informal.component';
import { CarucelFormalVestidoComponent } from './carucel-formal-vestido/carucel-formal-vestido.component';
import { CarucelInformalVestidoComponent } from './carucel-informal-vestido/carucel-informal-vestido.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full'
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'registrate',
    component:RegistrateComponent
  },
  {
    path:'iniciarsesion',
    component:IniciarsesionComponent
  },
  {
    path:'closet',
    component:ClosetComponent
    
  },
  {
    path:'closet-superior-inf',
    component:ClosetSuperiorInfComponent
  },
  {
    path:'closet-superior-for',
    component:ClosetSuperiorForComponent
  },
  {
    path:'closet-inferior-inf',
    component:ClosetInferiorInfComponent
  },
  {
    path:'closet-inferior-for',
    component:ClosetInferiorForComponent
  },

  {
    path:'closet-vestido-for',
    component:ClosetVestidoForComponent
  },
  {
    path:'closet-vestido-inf',
    component:ClosetVestidoInfComponent
  },
  {
    path:'carucel-formal',
    component:CarucelFormalComponent
  },
  {
    path:'carucel-informal',
    component:CarucelInformalComponent
  },
  {
    path:'carucel-formal-vestido',
    component:CarucelFormalVestidoComponent
  },
  {
    path:'carucel-informal-vestido',
    component:CarucelInformalVestidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
