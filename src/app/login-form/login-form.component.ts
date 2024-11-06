import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, WrapperComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})


export class LoginFormComponent {
  @Input() theme: string = 'light';
  @Input() showPasswordStrength: boolean = false;

  loginForm: FormGroup;
  errors = { email: "", password: "" };
  passwordStrength: string = "";


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, this.passwordValidator]],
    });

    this.loginForm.get('password')?.valueChanges.subscribe((password) => {
      this.updatePasswordStrength(password);
      this.validatePasswordInput(password);
    });

    this.loginForm.get('email')?.valueChanges.subscribe((email) => {
      this.validateEmail(email);
    });
  }

  validatePasswordInput(password: string) {
    if (password) {
      this.loginForm.get('invalidPassword')?.setErrors({invalidPassword: true})
      this.errors.password = this.getPasswordValidationMessage(password);
    }
  }


  getPasswordValidationMessage(password: string): string {
    if (password.length < 8) return 'Password must be at least 8 characters long';
    if (password.length > 20) return 'Password must be no more than 20 characters long';
    if (!/[A-Z]/.test(password)) return 'Password must include at least one uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must include at least one lowercase letter';
    if (!/\d/.test(password)) return 'Password must include at least one digit';
    if (!/[!@#$%^&*]/.test(password)) return 'Password must include at least one special character';
    return "";
  }

  // Custom password validator function
  passwordValidator(control: any) {
    const password = control.value.trim();
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isValidLength = password.length >= 8 && password.length <= 20;

    if (
      isValidLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    ) {
      return null; // Valid
    } else {
      return { invalidPassword: true }; // Invalid
    }
  }


  validateEmail(email: string) {
    const validEmail = /\S+@\S+\.\S+/.test(email);
    const emailControl = this.loginForm.get('email');
    if (!emailControl?.valid || !validEmail) {
      this.errors.email = 'Please enter a valid email address';
    } else {
      this.errors.email = "";
    }
  }


  updatePasswordStrength(password: string) {
    this.passwordStrength = (password.length > 10 && this.errors.password !== null) ? 'Strong' : 'Weak';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}