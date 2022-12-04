import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IControlItem } from '@app/models/frontend';
import { markFormGroupTouched } from '@app/shared';
import { ClienteResponse } from '@app/store/cliente/cliente.models';

@Component({
  selector: 'app-modal-clientes',
  templateUrl: './modal-clientes.component.html',
  styleUrls: ['./modal-clientes.component.scss']
})
export class ModalClientesComponent implements OnInit {

  form!: FormGroup;
  items: IControlItem[] = [];


  constructor(public dialogRef: MatDialogRef<ModalClientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteResponse[],
    private fb: FormBuilder) {
      if(this.data){
        this.data.forEach(element => {
          this.items.push({ label: element.nombre, value: element.id })
        });
      }
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        cliente: [null, {
          updateOn: 'blur'
        }],
      }
    )
  }

  onSubmit(): void {
    if (!this.form.valid) {
      markFormGroupTouched(this.form)
    }
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }


}
