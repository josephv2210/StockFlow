import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(): boolean | UrlTree {
        const isAuthenticated = this.authService.isAuthenticaded();
        console.log('isAuthenticated::: ', isAuthenticated);

        if(!isAuthenticated) {
            // Redirect to login page if not authenticated
            return this.router.createUrlTree(['/login']);
        }

        return true;
    }
}