import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../classes/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/candidatos";

  public getCandidatosApi(): Observable<Candidato[]>{
    return this.http.get<Candidato[]>(`${this.baseUrl}/lista`);
  }

  //metodo para incluir novos candidatos
  public postCandidatoApi(candidato: Candidato): Observable<Candidato>{
    return this.http.post<Candidato>(`${this.baseUrl}/novo`, candidato)
  }



}
