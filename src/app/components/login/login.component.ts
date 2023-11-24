import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernameAlphabetsOnlyValidator } from 'src/app/validators/custom-validators';
import { PasswordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,UsernameAlphabetsOnlyValidator]],
      password: ['',[Validators.required, PasswordValidator]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Perform authentication here (e.g., send data to server, check credentials)
      // If authentication is successful, you can navigate to the user's dashboard or another page
      // For demonstration, let's assume authentication is successful
      this.router.navigate(['/products']); // Replace 'dashboard' with the appropriate route
    }
  }
}
