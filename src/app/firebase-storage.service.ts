import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-informal-superior/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  //Tarea para subir archivo
  public tareaInformalInferiorCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-informal-inferior/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaInformalInferiorCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  //Tarea para subir archivo
  public tareaFormalInferiorCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-formal-inferior/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaFormalInferiorCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  //Tarea para subir archivo
  public tareaFormalSuperiorCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-formal-superior/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaFormalSuperiorCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  //Tarea para subir archivo
  public tareaVestidoFormalCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-vestido-formal/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaVestidoFormalCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  //Tarea para subir archivo
  public tareaVestidoInformalCloudStorage(nombreArchivo: string, datos: any) {
    const id= Math.random().toString(36).substring(2);
    nombreArchivo= `carucel-vestido-informal/${id}`;
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaVestidoInformalCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}