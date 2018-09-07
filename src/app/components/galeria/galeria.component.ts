import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  mas: boolean;
  spinner: boolean;
  section1: boolean;
  section2: boolean;
  constructor() {
      this.mas = false;
      this.spinner = false;
      this.section1 = true;
      this.section2 = false;
  }

  verMas() {
    setTimeout(() => {
      this.spinner = true;
    }, 1000);

    setTimeout(() => {
      this.spinner = false;
      this.mas = !this.mas;
    }, 2000);
  }
  verSection2() {
    this.section1 = !this.section1;
    this.section2 = !this.section2;
  }
}
