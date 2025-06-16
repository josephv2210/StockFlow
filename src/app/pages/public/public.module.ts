import { PublicLayoutComponent } from '../../layouts/public-layout/public-layout.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule,
    ButtonModule
  ],
  exports: [
    PublicLayoutComponent
  ],
})
export class PublicModule { }
