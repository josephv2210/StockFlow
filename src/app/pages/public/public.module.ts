import { PublicLayoutComponent } from '../../layouts/public-layout/public-layout.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PublicLayoutComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PublicLayoutComponent
  ],
})
export class PublicModule { }
