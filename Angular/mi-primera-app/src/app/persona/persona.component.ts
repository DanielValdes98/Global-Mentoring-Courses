import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent { 
  // Atributos
  nombre: string = "Luciana";
  apellido: string = "Valdes Gomez";
  edad: number = 10;

  // private edad: number = 10;

  // getEdad():number {
  //   return this.edad;
  // }

}
