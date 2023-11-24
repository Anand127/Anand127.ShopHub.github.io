import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  if (!value) {
    return { required: 'Password is required.' };
  }
  // Regular expressions to check for password complexity
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);

  const valid = hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

  if (!hasUppercase || !hasLowercase || !hasNumber) {
    return { invalidPassword: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit.' };
  }
  if (!hasUppercase) {
    return { invalidPassword: 'Password must contain at least one uppercase letter.' };
  }

  if (value.length < 8) {
    return { minLength: 'Password must be at least 8 characters long.' };
  }

  return null;
}


export function MatchPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordsNotMatching: true });
      return { passwordsNotMatching: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  
    // return passwordControl.value === confirmPasswordControl.value ? null : { passwordsNotMatching: true };
  }