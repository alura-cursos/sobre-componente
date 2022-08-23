import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  styleColor = 'background-image: linear-gradient(145deg,#0d47a1,#1976d2)'
  textoBotao = 'Botão'

  constructor() { }

  ngOnInit(): void {
  }

  mouseover(){
    this.textoBotao = 'Mouse está sobre mim.'
  }
  mouseout(){
    this.textoBotao = 'Mouse não está mais aqui.'
  }
  alert(){
    this.textoBotao =' Fui clicado.';
    alert('Botão foi clicado');
  }


}
