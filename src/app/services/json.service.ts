import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 632fca26-96ef-4bfc-8a35-3f97aeaf8c30'
    })
  }
  private productosUrl = `https://firebasestorage.googleapis.com/v0/b/json-55172.appspot.com/o/productos.json?alt=media&token=a07ad278-f89a-4d93-acd9-7b21789fdb13`;
  private lista:any;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.productosUrl);
  }

  MetodoProductos(listaProductos:any) {
      console.log(listaProductos);
      this.http.post(this.productosUrl,listaProductos,this.httpOptions).subscribe(
        response => {
          console.log('Archivo JSON sobrescrito con exito', response);
        },
        error => {
          console.error('Error al sobrescribir el archivo JSON', error);
        })
    }

  // getUsuarios(): Observable<any> {
  //   return this.http.get(this.usuariosUrl);
  // }

  // getJsonData(): Observable<any> {
  //   return this.http.get(this.jsonUrl);

  // }

  // MetodoPersona(listaPersonas:any) {
  //   console.log(listaPersonas);
  //   this.http.post(this.jsonUrl,listaPersonas,this.httpOptions).subscribe(
  //     response => {
  //       console.log('Archivo JSON sobrescrito con exito', response);
  //     },
  //     error => {
  //       console.error('Error al sobrescribir el archivo JSON', error);
  //     })
  // }
}  