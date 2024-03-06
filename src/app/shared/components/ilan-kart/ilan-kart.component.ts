import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YazilimIlan } from '../../dto/yazilimIlan';

@Component({
  selector: 'app-ilan-kart',
  templateUrl: './ilan-kart.component.html',
  styleUrl: './ilan-kart.component.scss'
})
export class IlanKartComponent {
  @Input() ilan: YazilimIlan = new YazilimIlan();
  @Output() basildi = new EventEmitter();

  kartaBasildi() {
    this.basildi.emit('Karta basildi');
  }
}
