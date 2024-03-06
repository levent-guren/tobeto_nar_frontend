import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IlanKartComponent } from './components/ilan-kart/ilan-kart.component';
import { YaziKisaltPipe } from './pipe/yazi-kisalt.pipe';



@NgModule({
  declarations: [
    IlanKartComponent,
    YaziKisaltPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IlanKartComponent,
    YaziKisaltPipe,
  ]
})
export class SharedModule { }
