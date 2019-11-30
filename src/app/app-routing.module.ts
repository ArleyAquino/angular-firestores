import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import
import { IndexComponent } from  './components/index/index.component';
import {RegistrateComponent} from './components/registrate/registrate.component';
import {IniciarsesionComponent} from './components/iniciarsesion/iniciarsesion.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
