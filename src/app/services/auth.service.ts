import { Injectable } from '@angular/core';
//imporar
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user.model';
import {auth} from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  async onLogin(user:User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    }catch(error){
      console.log("Error al login", error)
    }
  }

  
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private afsAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user=>(this.isLogged=user));
   }

   //registrar
   async onRegister(user:User){
     try{
       return await this.afAuth.auth.createUserWithEmailAndPassword(
         user.email,
         user.password
       )
     }catch(error){
       console.log("Error al registrarse", error)
     }
   }
   
}
