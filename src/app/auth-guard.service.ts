import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService:AuthService, private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.authService.isAuthenticated()
       .then(
           (autheticated:boolean) =>{
           if(autheticated){
               return true;
           }
           else{
            this.router.navigate['/'];
           }
       }
    )
    };

   
}