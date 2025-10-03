import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule] 
})
export class Home {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
