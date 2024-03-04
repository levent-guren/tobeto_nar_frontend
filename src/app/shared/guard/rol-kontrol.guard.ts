import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../core/service/login.service';
import { ToastrService } from 'ngx-toastr';

export function rolKontrolGuard(...roles: string[]): CanActivateFn {
 return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let loginService = inject(LoginService);
    let toastr = inject(ToastrService);

    let sonuc = loginService.roller.find(rol => roles.find(rol2 => rol2 === rol)!=undefined) != undefined;
    if (!sonuc) {
      toastr.error('Bu sayfaya girmeye yetkiniz bulunmamaktadır');
    }
    return sonuc;
 }
} ;
