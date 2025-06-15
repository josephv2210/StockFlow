import { ASSETS } from '../../../config/constants';
import { cn } from '../../utils/classnames';
import { Component } from '@angular/core';

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
}
