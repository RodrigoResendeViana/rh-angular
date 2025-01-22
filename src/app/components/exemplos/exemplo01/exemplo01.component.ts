import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  imports: [],
  templateUrl: './exemplo01.component.html',
  styleUrl: './exemplo01.component.css'
})
export class Exemplo01Component implements OnInit{

  //rnd: number | string | undefined;
  rnd!: number; 
  //rnd: number = 0;

  ngOnInit(){
    this.gerarNumero();
  }

  gerarNumero() : void {
    this.rnd = Math.random()*100
  }

}
