import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  listadoHeroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman', 'Captain America'];
  heroeBorrado : string = '';
  fueBorradoUnHeroe = false;

  validarSiHayBorrado() : void {
    if( this.heroeBorrado !== '') {
      this.fueBorradoUnHeroe = true;
    } else {
      this.fueBorradoUnHeroe = false;
    }
  }

  borrarHeroe() {
    this.heroeBorrado = this.listadoHeroes.shift() || '';
    this.validarSiHayBorrado()
    console.log(this.heroeBorrado);
  }

}
