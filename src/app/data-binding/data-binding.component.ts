import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles: [
  //   `
  //     .highlight {                <-- Boas praticas até 3 linhas
  //     background-color: yellow;
  //     font-weight: bold;
  //     }
  //   `
  // ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Você clicou no Botão')
  }

  onKeyUp(evento: KeyboardEvent){
     this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
     this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
