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
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      bandera: new FormControl("", Validators.required),
      numeroimo: new FormControl<number>(0, Validators.required),
      vesseltype: new FormControl( "", Validators.required),

    });
  
    public vessels: any[] = [];

    resetForm(): void {
      this.practiceForm.reset()
    }
    
    addVessel():void {
        const nuevoRegistro = this.practiceForm.value;
        this.vessels.push(nuevoRegistro);
        // Puedes reiniciar el formulario si es necesario
        this.practiceForm.reset();
    
  }



  hasErrors( controlName : string, errorType:string ){
    return this.practiceForm.get(controlName)?.hasError(errorType) && this.practiceForm.get(controlName)?.touched;
  }
}
