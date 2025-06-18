import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';
import { NgModule } from '@angular/core';

import { LucideAngularModule, Heart, Dot, Github } from 'lucide-angular';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    NavbarComponent,
  ],
  imports: [
    LucideAngularModule.pick({ Heart, Dot, Github }),
    TooltipModule,
    CommonModule,
    RouterModule,
    AvatarModule,
    DockModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    DockModule,
  ],
})
export class SharedModule {}
