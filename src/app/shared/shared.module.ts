import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LucideAngularModule, Heart, Dot, Github } from 'lucide-angular';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({ Heart, Dot, Github }),
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
