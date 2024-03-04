import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
  ) {}

  // fonksiyon döndüren fonksiyon için örnek kod:
  ngOnInit(): void {
    let sonuc = this.denemeFonsiyonu();
    console.log(typeof(sonuc));
    console.log(sonuc(5));

    sonuc =  this.denemeFonsiyonu2();
    console.log(typeof(sonuc));
    console.log(sonuc(8));
  }
  denemeFonsiyonu() {
    return (sayi: number) => {
      return 'Merhaba:'+sayi;
    };
  }
  denemeFonsiyonu2() {
    return this.merhabaFonksiyonu; // sonda parantez yok. Bu sayede 
    // fonksiyonu çağırıp sonucunu döndürmek yerine, fonsksiyonun kendisini döndürüyor
  }
  merhabaFonksiyonu(sayi: number) {
    return 'Merhaba'+sayi;
  }
}
