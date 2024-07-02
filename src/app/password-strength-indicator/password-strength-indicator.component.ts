import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordStrengthService } from "../password-service/password-strength.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-strength-indicator.component.html',
  styleUrl: './password-strength-indicator.component.css'
})
export class PasswordStrengthIndicatorComponent implements OnChanges {
  @Input() password: string = '';
  strengthClass: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.strengthClass = this.passwordStrengthService.checkStrength(this.password);
    }
  }
}
