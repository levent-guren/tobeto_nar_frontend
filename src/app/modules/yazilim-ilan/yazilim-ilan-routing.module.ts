import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YazilimIlanComponent } from './yazilim-ilan/yazilim-ilan.component';
import { YazilimIlanVerComponent } from './yazilim-ilan-ver/yazilim-ilan-ver.component';
import { rolKontrolGuard } from '../../shared/guard/rol-kontrol.guard';
import { ROL_ILAN_VEREN } from '../../shared/model/constants';

const routes: Routes = [
  { path: '', component: YazilimIlanComponent, pathMatch: 'full'},
  { path: 'ilan-ver', component: YazilimIlanVerComponent, canActivate: [rolKontrolGuard(ROL_ILAN_VEREN)] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YazilimIlanRoutingModule { }
