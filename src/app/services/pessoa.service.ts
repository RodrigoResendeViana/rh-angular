import { Injectable } from '@angular/core';
import { Pessoa } from '../classes/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  public listarPessoas(): Pessoa[]{
    return[
      {nome: 'Rodrigo', idade: 20},
      {nome: 'Samuel', idade: 24},
      {nome: 'Lorena', idade: 30},
      {nome: 'Ana Clara', idade: 22}
    ]
  }
}
