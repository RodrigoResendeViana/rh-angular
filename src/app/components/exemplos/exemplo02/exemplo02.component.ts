import { Component } from '@angular/core';
import { Pessoa } from '../../../classes/pessoa';
import { PessoaService } from '../../../services/pessoa.service';

@Component({
  selector: 'app-exemplo02',
  imports: [],
  templateUrl: './exemplo02.component.html',
  styleUrl: './exemplo02.component.css'
})
export class Exemplo02Component {

  ngOnInit(): void{
    this.listar();
  }

  constructor(private service: PessoaService) {

  }

  pessoas: Pessoa[] = [];

  listar(): void {
    this.pessoas = this.service.listarPessoas();
  }
}
