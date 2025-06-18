import { ASSETS } from '../../../config/constants';
import { cn } from '../../utils/classnames';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isAuth = false;

  public ASSETS = ASSETS;
  public cn = cn;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.isAuth = this.authService.isAuthenticaded();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
