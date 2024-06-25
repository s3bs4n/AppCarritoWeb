import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';



interface User {
  nombre: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})


export class AdminDashboardComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null;
  
  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.users = this.authService.getUsers();
  }

  editUser(user: User): void {
    this.editingUser = { ...user }; // Crear una copia del usuario para editar
  }

  saveUser(): void {
    if (this.editingUser) {
      this.authService.updateUser(this.editingUser.email, this.editingUser);
      this.users = this.authService.getUsers(); // Actualizar la lista de usuarios
      this.editingUser = null;
    }
  }

  deleteUser(email: string): void {
    this.authService.deleteUser(email);
    this.users = this.authService.getUsers(); // Actualizar la lista de usuarios
  }

  cancelEdit(): void {
    this.editingUser = null;
  }

  logout(): void {
    this.authService.logout();
    window.location.href = '/admin-login'; // Redirigir al login de admin
  }

}
