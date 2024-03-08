import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from 'styleUrl' to 'styleUrls' and wrapped in an array
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        // Handle successful login
      },
      error => {
        console.error('Login failed', error);
        // Handle login error
      }
    );
  }
}
