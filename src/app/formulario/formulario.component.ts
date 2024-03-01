import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators ,FormControl} from '@angular/forms';
import { User, } from './user.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})


export class FormularioComponent {

 
  
    public practiceForm = new FormGroup({
        name: new FormControl("",[Validators.required, Validators.minLength(2)]),
        vessel: new FormControl("",Validators.required,), 
        email: new FormControl("" ,[Validators.required, Validators.email]),
        adress: new FormControl("", Validators.required),
        adress2: new FormControl(""),
        city: new FormControl("",Validators.required),
    })


    
    

    resetForm(): void {
      this.practiceForm.reset()
    }
    addVessel(){
        console.log({
        formIsValid: this.practiceForm.valid,
        value: this.practiceForm.value,
  
        })
      this.practiceForm.reset();
    }




  hasErrors( controlName : string, errorType:string ){
    return this.practiceForm.get(controlName)?.hasError(errorType) && this.practiceForm.get(controlName)?.touched;
  }
}
