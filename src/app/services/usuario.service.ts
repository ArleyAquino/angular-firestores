import { Injectable } from '@angular/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {User} from '../models/user.model';
import {Atuendo} from '../models/atuendo.model';
import { Usuario} from '../models/usuario.model';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';
//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:AngularFirestore,public afAuth: AngularFireAuth, private afsAuth:AngularFireAuth) { }
  
  createUsuario(usuario: Usuario){
    console.log(usuario);
    let currentUser = this.afAuth.auth.currentUser;
    
    console.log(currentUser.uid);
    return this.firestore.collection('usuario').add(usuario);
    
  }
  createAtuendo(atuendo:Atuendo){
    let currentUser = this.afAuth.auth.currentUser;
    console.log(currentUser.uid);
    this.firestore.collection('usuario').doc(currentUser.uid).collection('atuendo').add(atuendo); 
  }
}
