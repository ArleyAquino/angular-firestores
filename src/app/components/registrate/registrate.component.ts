import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator ,FormBuilder, FormControl, Validators } from '@angular/forms';
//import 
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {Usuario} from '../../models/usuario.model';
import{UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {
  user: User = new User();
  public myForm: FormGroup;
  public usuario: Usuario;
  constructor(private usuarioService:UsuarioService ,private fb:FormBuilder, private authSvc: AuthService, private router:Router) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      email:[0,Validators.required],
      password:[0,Validators.required]
    });
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log("Successfully create user");
      this.router.navigateByUrl('/closet');
    }
  }

  create(){
    this.usuario={
      email: this.myForm.controls.email.value,
      password:this.myForm.controls.password.value,

    }
    this.usuarioService.createUsuario(this.usuario);
    console.log(this.usuario);
  }
 
}
