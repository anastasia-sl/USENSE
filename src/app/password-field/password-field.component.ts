import { Component } from '@angular/core';

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  // password: string = '';
  // strengthClass: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    const indicators = [
      document.getElementById('indicator1'),
      document.getElementById('indicator2'),
      document.getElementById('indicator3')
    ];

    if (!indicators.every(indicator => indicator !== null)) return;

    if (password.length === 0) {
      indicators.forEach(indicator => indicator!.className = 'gray');
    } else if (password.length < 8) {
      indicators.forEach(indicator => indicator!.className = 'red');
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        indicators.forEach(indicator => indicator!.className = 'green');
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        indicators[0]!.className = 'yellow';
        indicators[1]!.className = 'yellow';
        indicators[2]!.className = 'gray';
      } else {
        indicators[0]!.className = 'red';
        indicators[1]!.className = 'gray';
        indicators[2]!.className = 'gray';
      }
    }
  }
}
