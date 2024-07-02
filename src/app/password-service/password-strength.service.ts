import { Injectable } from '@angular/core';
import {REGEX} from "./regex";

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  checkStrength(password: string): string[] {
    const strengthClass = ['gray', 'gray', 'gray'];

    if (password.length === 0) {
      return strengthClass;
    } else if (password.length < 8) {
      return ['red', 'red', 'red'];
    } else {
      const hasLetters = REGEX.letters.test(password);
      const hasNumbers = REGEX.numbers.test(password);
      const hasSymbols = REGEX.symbols.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        return ['green', 'green', 'green'];
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        return ['yellow', 'yellow', 'gray'];
      } else {
        return ['red', 'gray', 'gray'];
      }
    }
  }
}
