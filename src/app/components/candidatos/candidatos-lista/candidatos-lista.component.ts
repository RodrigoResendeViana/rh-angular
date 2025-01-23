import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../../../services/candidatos.service';
import { Candidato } from '../../../classes/candidato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatos-lista',
  imports: [CommonModule],
  templateUrl: './candidatos-lista.component.html',
  styleUrl: './candidatos-lista.component.css'
})
export class CandidatosListaComponent implements OnInit{

  candidatos: Candidato[] = [];

  constructor(private candidatosService: CandidatosService){ }
  
  ngOnInit(): void {
    this.candidatosService.getCandidatosApi().subscribe(resposta => this.candidatos = resposta)
  }

}


