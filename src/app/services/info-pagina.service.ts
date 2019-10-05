import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infor-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: any;
  cargada: boolean = false;
  constructor(private http: HttpClient) {
   this.cargarInfo();
   this.cargarEquipo();
  }

private cargarInfo(){
 // leer archivo json
 this.http.get('assets/data/data-pagina.json')
 .subscribe((resp: InfoPagina) => {
   this.cargada = true;
   this.info = resp;
 })
}

private cargarEquipo(){
  this.http.get('https://angular-html-16bd6.firebaseio.com/equipo.json')
 .subscribe((resp: any[]) => {
   this.cargada = true;
   this.equipo = resp;
   console.log(this.equipo);
 })
}
}
