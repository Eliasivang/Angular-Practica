import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})

export class FormularioComponent {

  practiceForm: FormGroup;
  constructor(private form: FormBuilder){
     this.practiceForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      telephone: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  enviar(){
    console.log(this.practiceForm)
  }

  hasErrors( controlName : string, errorType:string ){
    return this.practiceForm.get(controlName)?.hasError(errorType) && this.practiceForm.get(controlName)?.touched
  }
}
