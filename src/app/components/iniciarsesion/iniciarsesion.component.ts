import { Component, OnInit } from '@angular/core';
//import 
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
user: User = new User();
  constructor(private fb:FormBuilder, private router: Router, private authSvc: AuthService, private authService:AuthService) { }

  ngOnInit() {
    
  }
  async onLogin(){
    const user =await this.authSvc.onLogin(this.user);
    if(user){
      console.log('succes logged user');
      this.router.navigateByUrl('/closet');
    }
  }

}
