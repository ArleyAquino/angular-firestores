import { Component, OnInit } from '@angular/core';

import {AngularFireStorage} from '@angular/fire/storage';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../../firebase-storage.service';

@Component({
  selector: 'app-closet-vestido-for',
  templateUrl: './closet-vestido-for.component.html',
  styleUrls: ['./closet-vestido-for.component.css']
})
export class ClosetVestidoForComponent implements OnInit {

  constructor(private firebaseStorage: FirebaseStorageService) { }

  ngOnInit() {
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
    let referencia = this.firebaseStorage. referenciaVestidoFormalCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaVestidoFormalCloudStorage(this.nombreArchivo, archivo);

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
