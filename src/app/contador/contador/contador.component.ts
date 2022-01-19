import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>Welcome to Italian</h1>
        <p>{{titulo}}</p>

        <h3>La base <strong>{{base}}</strong></h3>

        <button (click)="acumular(-base )">-{{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumular(base)" >+{{base}}</button>


  `,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  titulo = 'Contador app';

  numero:number=0;

  base:number=5;


  acumular(valor:number){
    this.numero+=valor;
  }

}
