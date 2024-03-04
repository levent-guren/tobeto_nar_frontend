import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = this.fb.nonNullable.group({
    email: 'levent',
    password: 'levent',
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  login() {
    let email = this.loginForm.get('email')!.value;
    let password = this.loginForm.get('password')!.value;
    this.loginService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/menu']);
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }
}