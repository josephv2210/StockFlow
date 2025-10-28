import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ViewChild, OnInit } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('this.loginForm::: ', this.loginForm.value);
    if (this.loginForm.invalid) {
      this.toastService.show('Invalid form', 'error');
      return;
    }

    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);

    this.authService.login(email, password).subscribe({
      next: () => {
        this.toastService.show('Login successful', 'success');
        this.router.navigate(['/app']);
      },
      error: (err) => {
        console.error('Login error: ', err);
        this.toastService.show('Login failed: ' + err.message, 'error');
      },
    });
  }
}
