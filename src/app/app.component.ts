import { Component } from '@angular/core';
import { Osoba } from './interfaceOsoba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projekt-1';
  powitanie: string = 'Witaj';
  osoba: Osoba = {
    imie: 'Tadeusz',
    nazwisko: 'Nowak',
    zdjecie: 'obraz_1.jpg',
  };
  kolor: string = 'yellow';
  jak: string = 'center';
  aktywna: boolean = true;
  zmienKolor() {
    this.kolor = this.kolor === 'yellow' ? 'green' : 'yellow';
  }
}
