import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from  'src/app/user.model'
import {  EmailValidator, UsernameValidator } from 'src/app/validators/custom-validators';
import { MatchPasswordValidator, PasswordValidator } from 'src/app/validators/password.validator';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, UsernameValidator]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, PasswordValidator]],
      confirmPassword: ['', Validators.required],
      showPasswordToggle: [false]
    },  { validators: [MatchPasswordValidator] }
    );
    this.registrationForm.get('showPasswordToggle')?.valueChanges.subscribe((value) => {
      this.showPassword = value;
    });
  }
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const newUser: User = this.registrationForm.value;
      // delete newUser.confirmPassword; // Remove confirmPassword before sending
      
      this.http.post<User>('http://localhost:5000/fields', newUser)
        .subscribe((user: User) => {
          console.log('User registered:', user);
          this.registrationForm.reset();
          this.router.navigate(['/login']);
        });
    }
  }
}
