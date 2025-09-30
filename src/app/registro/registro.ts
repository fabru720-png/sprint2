import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] //  IMPORTANTE para usar ngModel
})
export class Registro {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  async registrar() {
    try {
      await this.authService.register(this.email, this.password);
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
