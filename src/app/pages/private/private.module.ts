import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateLayoutComponent } from '../../layouts/private-layout/private-layout.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PrivateLayoutComponent
  ],
})
export class PrivateModule { }
