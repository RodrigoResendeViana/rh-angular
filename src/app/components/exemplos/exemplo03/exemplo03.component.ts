import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../classes/pessoa';
import { CommonModule } from '@angular/common';
import { TamanhoPipe } from '../../../pipes/tamanho.pipe';

@Component({
  selector: 'app-exemplo03',
  imports: [CommonModule, TamanhoPipe],
  templateUrl: './exemplo03.component.html',
  styleUrl: './exemplo03.component.css'
})
export class Exemplo03Component implements OnInit{

  constructor(private service: PessoaService){

  }

  pessoas: Pessoa[] = [];

  ngOnInit(): void {
    this.listar();
  }
  listar(): void{
    this.pessoas = this.service.listarPessoas();
  }
  filtrar(input: string): void{
    this.listar();
    this.pessoas = this.pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(input.toLowerCase()))
  }
}
