import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ]),
    ]),
  ]
})
export class ToastComponent implements OnInit {
  message = '';
  type: 'success' | 'error' | 'info' = 'success';
  visible = false;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(({ message, type }) => {
      this.message = message;
      this.type = type;
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
      }, 4000);
    });
  }
}