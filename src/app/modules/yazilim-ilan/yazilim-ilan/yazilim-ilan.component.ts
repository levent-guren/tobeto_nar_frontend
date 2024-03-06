import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YazilimIlanService } from '../service/yazilim-ilan.service';
import { YazilimIlan } from '../../../shared/dto/yazilimIlan';
import { LoginService } from '../../../core/service/login.service';

@Component({
  selector: 'app-yazilim-ilan',
  templateUrl: './yazilim-ilan.component.html',
  styleUrl: './yazilim-ilan.component.scss'
})
export class YazilimIlanComponent implements OnInit {
  ilanlar: YazilimIlan[] = [];

  constructor(
    public router: ActivatedRoute,
    private yazilimIlanService: YazilimIlanService,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.yazilimIlanService.getTumYazilimIlanlari().subscribe({
      next: (ilanlar => {
        this.ilanlar = ilanlar;
      })
    });
  }


  kartSecildi(mesaj: string) {
    console.log('Kart secildi: '+mesaj);
  }

  userHasRole(rolAdi: string): boolean {
    return this.loginService.userHasRole(rolAdi);
  }
    
}
