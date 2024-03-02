import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators ,FormControl} from '@angular/forms';
import { Vessel} from './user.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})


export class FormularioComponent {

  
  
  
    public practiceForm = new FormGroup({
      name: new FormControl(" ", [Validators.required, Validators.minLength(2)]),
      vessel: new FormControl(" ", Validators.required),
      numeroIMO: new FormControl(" ", [Validators.required, Validators.email]),
      adress: new FormControl(" ", Validators.required),
      adress2: new FormControl(""),
      city: new FormControl(" ", Validators.required),
      email: new FormControl(" ", Validators.required),
    });
  


    public vessels: any[] = [];
    

    resetForm(): void {
      this.practiceForm.reset()
    }
    
    addVessel(){
      this.vessels.push(this.practiceForm.value)
      console.log(this.vessels)
      this.resetForm()
    }



  hasErrors( controlName : string, errorType:string ){
    return this.practiceForm.get(controlName)?.hasError(errorType) && this.practiceForm.get(controlName)?.touched;
  }
}
