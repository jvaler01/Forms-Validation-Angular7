import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: null,
    lastName: null,
    email: null,
    pais: null,
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];
  sexos: string[] = ['Hombre', 'Mujer'];
  constructor() { }

  ngOnInit() {
  }
  guardar(forma: NgForm) {
  console.log(forma.value);
  console.log(forma.valid);
  }
}
