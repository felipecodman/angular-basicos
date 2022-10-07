import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainPageComponent {

  // personajes: Personaje [] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7500
  //   }
  // ];

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 1000

  }

  // get personajes ():Personaje []{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje ( argumento: Personaje) {

  //   this.personajes.push( argumento );



  constructor() {

  }

  // nuevo: Personaje = {
  //   nombre: '',
  //   poder: 0
  // }

  // cambiarNombre ( event: any) {
  //   console.log(event.target.value);
  // }

  // agregar( event: any) {
    // event.preventDefault();

  // agregar() {
  //   if ( this.nuevo.nombre.trim().length === 0 ) { return; }

  //   console.log( this.nuevo );

  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }

  //   console.log(this.personajes);

  // }

}
