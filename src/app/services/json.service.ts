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
  // private baseUrl = 'https://firebasestorage.googleapis.com/v0/b/json-55172.appspot.com/o/';
  private productosUrl = `https://firebasestorage.googleapis.com/v0/b/json-55172.appspot.com/o/productos.json?alt=media&token=ddc2f33d-195e-40fc-a4f8-5ea3ca7d8764`;
  // private usuariosUrl = `${this.baseUrl}usuarios.json?alt=media&token=77b0d2f2-13ac-4584-9206-0daee71ed823`;

  // private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/json-55172.appspot.com/o/personas.json?alt=media&token=77b0d2f2-13ac-4584-9206-0daee71ed823';

  private lista:any;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.productosUrl);
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