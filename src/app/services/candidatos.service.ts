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
    const url: string = `${this.baseUrl}/lista`;
    return this.http.get<Candidato[]>(url);
  }

  //metodo para buscar um candidato pelo cpf
  public getCandidatoApi(cpf: string) : Observable<Candidato> {
    const url: string = `${this.baseUrl}/buscar/${cpf}`;
    return this.http.get<Candidato>(url)
  }

  //metodo para incluir novos candidatos
  public postCandidatoApi(candidato: Candidato): Observable<Candidato>{
    const url = `${this.baseUrl}/novo`
    return this.http.post<Candidato>(url, candidato);
  }

  //metodo para alterar um candidato
  public putCandidatoApi(candidato: Candidato, cpf: string): Observable<Candidato>{
    const url = `${this.baseUrl}/alterar/${cpf}`
    return this.http.put<Candidato>(url, candidato)
  }
  //metodo para remover um candidato
  public deleteCandidatoApi(cpf: string): Observable<any>{  //pessoal gosta de colocar any para receber qualquer coisa no Observable
    const url = `${this.baseUrl}/remover/${cpf}`
    return this.http.delete<string>(url);
  }
}
