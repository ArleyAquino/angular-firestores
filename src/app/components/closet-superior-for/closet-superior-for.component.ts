import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator ,FormBuilder, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.model';
import {Atuendo} from '../../models/atuendo.model';
import { Usuario} from '../../models/usuario.model';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-closet-superior-for',
  templateUrl: './closet-superior-for.component.html',
  styleUrls: ['./closet-superior-for.component.css']
})
export class ClosetSuperiorForComponent implements OnInit {
  public myForm: FormGroup;
  public atuendo: Atuendo;
  public usuarios: Usuario[];
  public user: User;
  constructor(private usuarioService:UsuarioService ,private authSvc: AuthService, private actroute: ActivatedRoute,private router: Router, private afAuth: AngularFireAuth,  private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      desc:["",Validators.required],
      url:["",Validators.required]
    });
  }
  create(){
    this.atuendo={
      desc: this.myForm.controls.desc.value,
      url: this.myForm.controls.url.value,
      superiorfor: true,

    }
    this.usuarioService.createAtuendo(this.atuendo);
    this.router.navigate(['/closet-superior-for']);
    
  }
  onLogout(){
    console.log('Logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
