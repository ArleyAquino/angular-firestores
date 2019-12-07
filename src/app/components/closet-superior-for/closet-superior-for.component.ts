import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import {AngularFireStorage} from '@angular/fire/storage';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../firebase-storage.service';

=======
import { FormGroup, Validator ,FormBuilder, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.model';
import {Atuendo} from '../../models/atuendo.model';
import { Usuario} from '../../models/usuario.model';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import {UsuarioService} from '../../services/usuario.service';
>>>>>>> 9f68641a2587badcd3b0941021bd9276bb2958f8
@Component({
  selector: 'app-closet-superior-for',
  templateUrl: './closet-superior-for.component.html',
  styleUrls: ['./closet-superior-for.component.css']
})
export class ClosetSuperiorForComponent implements OnInit {
<<<<<<< HEAD

  constructor(private firebaseStorage: FirebaseStorageService) { }
=======
  public myForm: FormGroup;
  public atuendo: Atuendo;
  public usuarios: Usuario[];
  public user: User;
  constructor(private usuarioService:UsuarioService ,private authSvc: AuthService, private actroute: ActivatedRoute,private router: Router, private afAuth: AngularFireAuth,  private fb:FormBuilder) { }
>>>>>>> 9f68641a2587badcd3b0941021bd9276bb2958f8

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

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  //Evento que se ejecuta cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage. referenciaFormalSuperiorCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaFormalSuperiorCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      console.log(this.URLPublica);

    });
  }
}
