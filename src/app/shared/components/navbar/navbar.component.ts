import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  dockItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'assets/icons/layout-dashboard.svg',
      command: () => this.router.navigate(['/app/'])
    },
    {
      label: 'Inventory',
      icon: 'assets/icons/layout-dashboard.svg',
      command: () => this.router.navigate(['/app/inventory'])
    },
    {
      label: 'Sales',
      icon: 'assets/icons/layout-dashboard.svg',
      command: () => this.router.navigate(['/app/sales'])
    },
    {
      label: 'Profile',
      icon: 'assets/icons/layout-dashboard.svg',
      command: () => this.router.navigate(['/app/profile'])
    }
  ];

  constructor(private router: Router) { }

}
