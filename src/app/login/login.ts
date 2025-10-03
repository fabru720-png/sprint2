import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule,RouterModule],
  standalone: true,
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
    } catch (err: any) {
      this.error = err.message;
    }
  }

  quickLogin(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.login();
  }
}
