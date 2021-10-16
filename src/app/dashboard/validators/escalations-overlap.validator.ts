import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function EscalationsOverlapValidator(maxEscalations: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const enteredValue = control.value ? Number(control.value) : null;
    if (enteredValue > Number(maxEscalations)) {
      return { overlap: true }
    } else {
      return null;
    }
  }
}
