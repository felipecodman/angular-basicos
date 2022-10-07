import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Capitan' ];
  heroeBorrado: string = '';

  borrarHeroe() {
    // this.heroes = []

    // elimina el ultimo elemento del arreglo
    // this.heroes.pop()
    // Elimina el primer elemento
    // this.heroes.shift();

    // const heroeBorrado = this.heroes.shift();

    this.heroeBorrado = this.heroes.shift() || '';

  }

}
