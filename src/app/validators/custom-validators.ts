import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  const valid = /\S+@\S+\.\S+/.test(value);
  return valid ? null : { invalidEmail: true };
}

export function MobileNumberValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  const valid = /^[0-9]{10}$/.test(value);
  return valid ? null : { invalidMobile: true };
}

// export function AlphabetsOnlyValidator(control: AbstractControl): ValidationErrors | null {
//   const value: string = control.value;
//   const valid = /^[a-zA-Z]+$/.test(value);
//   // return valid ? null : { alphabetsOnly: true };
//   if (!valid) {
//     return { alphabetsOnly: 'Please enter alphabetic characters only.' };
//   }

//   return null;
// }

export function UsernameValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  const hasNumber = /\d/.test(value); // Check if value contains numbers


  if (!value) {
    return { required: 'Username is required.' };
  }

  if (hasNumber) {
    return { hasNumber: 'Username cannot contain numbers.' };
  }

  if (value.length < 5) {
    return { minlength: 'Username must be at least 5 characters long.' };
  }

  return null;
}

export function UsernameAlphabetsOnlyValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  const hasSpecialCharactersOrNumbers = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/.test(value);

  if (hasSpecialCharactersOrNumbers) {
    return { alphabetsOnly: 'Username must contain alphabetic characters only.' };
  }

  return null;
}