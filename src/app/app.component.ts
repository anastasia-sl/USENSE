import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordInputComponent } from "./password-input/password-input.component";
import { PasswordStrengthIndicatorComponent } from "./password-strength-indicator/password-strength-indicator.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordInputComponent, PasswordStrengthIndicatorComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'USENSE';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['']
    });
  }
}
