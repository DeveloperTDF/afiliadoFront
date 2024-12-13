import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Afiliado } from './interfaces/afiliado';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AfiliadoServService {

  private baseUrl = environment.apiUrl

  constructor(private http:HttpClient) { }


  getAfiliado():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/afiliados/`)
  }
  getAfiliadoPorId(id:string):Observable<Afiliado>{
    return this.http.get<Afiliado>( `${this.baseUrl}/afiliados/${ id }`);
  }
  agregarAfiliado(afiliado: Afiliado):Observable<Afiliado>{
    return this.http.post<Afiliado>(`${this.baseUrl}/afiliados/`,afiliado );
  }
  actualizarAfiliado(afiliado: Afiliado):Observable<Afiliado>{
    return this.http.put<Afiliado>(`${this.baseUrl}/afiliados/${afiliado.id}`,afiliado );
  }
  eliminarAfiliado(id: string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/afiliados/${id}` );
  }

  


}
