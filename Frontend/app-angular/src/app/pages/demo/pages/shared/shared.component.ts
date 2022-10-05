import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IControlItem } from '@app/models/frontend';
import { NotificationService } from '@app/services';
import { markFormroupTouched, regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form!: FormGroup;
  regexError = regexErrors;
  items!: IControlItem[];
  showSpinner: boolean = false;
  spinnerLabel: string = "Toggle Spinner";

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.items = [
      { label: 'Uno', value: 1},
      { label: 'Dos', value: 2},
      { label: 'Tres', value: 3},
      { label: 'Cuatro', value: 4},
      { label: 'Cinco', value: 5},
    ]


}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email)
          ]
        }],
        password: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(regex.password)
          ]
        }],
        autocomplete: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
          ]
        }],
        select: [null, {
          updateOn: 'change',
          validators: [
            Validators.required,
          ]
        }],
        checkboxes: [null, {
          updateOn: 'change',
          validators: [
            Validators.required,
          ]
        }],
        radios: [null, {
          updateOn: 'change',
          validators: [
            Validators.required,
          ]
        }],
        date: [null, {
          updateOn: 'change',
          validators: [
            Validators.required,
          ]
        }],
        dateRange: [null, {
          updateOn: 'change',
          validators: [
            Validators.required,
          ]
        }]
      }
    )
  }

  // Aux funtion to add days in a Date
  addDays = (date: Date, days: number) => {
    date.setDate(date.getDate() + days);
    return date;
  }

  onPatchValue(): void {
    this.form.patchValue({
      email: 'adimn1234@gmail.com',
      password: 'Admin1234',
      autocomplete: 1,
      select: 2,
      checkboxes: [3, 4],
      radios: 2,
      date: new Date().getTime(),
      dateRange: {
        from: new Date().getTime(),
        to: this.addDays(new Date(), 2).getTime(),
      }
    })
  }

  onToggleDisabled(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }

  }

  onSubmit(): void {
    console.log('Botón submit pulsado!');
    if (!this.form.valid) {
      markFormroupTouched(this.form)
    }
  }

  // Satatus Actions
  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
    this.showSpinner ? this.spinnerLabel = "Stop Spinner" : this.spinnerLabel = "Toggle Spinner";
  }

  onError(): void {
    this.notification.error("Se han detectado errores en el procedimiento!")
  }

  onSuccess(): void {
    this.notification.success("Procedimiento existoso!")
  }
}
