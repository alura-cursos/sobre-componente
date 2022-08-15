import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {
  styleColor = 'color: black;'

  constructor() { }

  ngOnInit(): void {
  }
  mouseover(){
    this.styleColor = 'color: #1976d2; font-weight: 700'
  }
  mouseout(){
    this.styleColor = 'color: black'
  }
}
