import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component  {
  sala1: boolean;
  sala2: boolean;
  sala3: boolean;
  sala4: boolean;
  sala5: boolean;
  constructor() { 
    this.sala1 = true;
     this.sala2 = false;
     this.sala3 = false;
     this.sala4 = false;
     this.sala5 = false;
  }

  verSala1() {
    this.sala1 = true;
    this.sala2 = false;
    this.sala3 = false;
    this.sala4 = false;
    this.sala5 = false;
  }
  verSala2() {
    this.sala1 = false;
    this.sala2 = true;
    this.sala3 = false;
    this.sala4 = false;
    this.sala5 = false;
  }
  verSala3() {
    this.sala1 = false;
    this.sala2 = false;
    this.sala3 = true;
    this.sala4 = false;
    this.sala5 = false;
  }
  verSala4() {
    this.sala1 = false;
    this.sala2 = false;
    this.sala3 = false;
    this.sala4 = true;
    this.sala5 = false;
  }
  verSala5() {
    this.sala1 = false;
    this.sala2 = false;
    this.sala3 = false;
    this.sala4 = false;
    this.sala5 = true;
  }

 

}
