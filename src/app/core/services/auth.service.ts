import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string) {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      tap((users) => {
        if (users.length > 0) {
          //Save simulated token
          localStorage.setItem(this.tokenKey, 'fake-token');
        } else {
          throw new Error('Invalid email or password');
        }
      }),
      catchError((error) => throwError(() => error))
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
  }

  isAuthenticaded(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }
}
