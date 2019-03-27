import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  usuario = {
    nombrecompleto: {
      nombre: 'Fernando',
      apellido: 'Herrera'
    },
    correo: 'test@test.com'
  };
  constructor() {
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', Validators.required),
      }),
      correo: new FormControl('', [Validators.required,
                                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });
    // this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }
  guardarCambios() {
    console.log(this.forma.value);
    // this.forma.reset(this.usuario);
  }
  agregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }
}
