import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function EscalationCheckValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const enteredValue = control.value ? Number(control.value) : null;
    if (isNaN(enteredValue)) {
      return { notANumber: true };
    } else if (enteredValue && enteredValue < 0) {
      return { negativeValue: true };
    } else {
      return null;
    }
  }
}
