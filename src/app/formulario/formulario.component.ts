import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})

export class FormularioComponent {


  public practiceForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("" ,[Validators.required, Validators.email]),
      telephone: new FormControl("", [Validators.required, Validators.minLength(10)]), 
      password: new FormControl("", Validators.required)
    })
  

  addUser(){
      console.log({
      formIsValid: this.practiceForm.valid,
      value: this.practiceForm.value,
      errors: this.practiceForm.errors
  })
  }

  hasErrors( controlName : string, errorType:string ){
    return this.practiceForm.get(controlName)?.hasError(errorType) && this.practiceForm.get(controlName)?.touched
  }
}
