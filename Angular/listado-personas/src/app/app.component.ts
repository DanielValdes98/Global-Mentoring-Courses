import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';
  personas: Persona[] = [
    new Persona("Daniel","Valdes"), 
    new Persona("Jennifer","Gomez"),
    new Persona("Luciana","Valdes")
  ];
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona():void {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
