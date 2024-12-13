import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from './interfaces/trabajos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrabajoServService {

  private baseUrl = environment.apiUrl

  constructor(private http:HttpClient) { }


  
  agregarTrabajo(trabajo: Trabajo):Observable<Trabajo>{
    return this.http.post<Trabajo>(`${this.baseUrl}/trabajos/`,trabajo);
  }
  getTrabajo():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/trabajos/`)
  }
  getTrabajoPorId(id:string):Observable<Trabajo>{
    return this.http.get<Trabajo>( `${this.baseUrl}/trabajos/${ id }`);
  }
  
  actualizarTrabajo(trabajo: Trabajo):Observable<Trabajo>{
    return this.http.put<Trabajo>(`${this.baseUrl}/trabajos/${trabajo.id}`,trabajo );
  }
  eliminarTrabajo(id: string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/trabajos/${id}` );
  }



}
