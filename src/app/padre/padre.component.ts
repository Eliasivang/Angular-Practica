import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

@Input() title ?: string;
 
@Output()mensajeDesdeHijo = new EventEmitter<string>();
@Output()incrementarDesdeElHijo = new EventEmitter<void>(); // Le decimos que vamos a enviar un evento vacio
@Output()decrementarDesdeElHijo = new EventEmitter<void>();


mensaje:string = "";

enviarMensaje(){
  this.mensajeDesdeHijo.emit(this.mensaje)
}
incrementar(){
    this.incrementarDesdeElHijo.emit(); //metodo que va a emitir un evento vacio al padre.
  }

decrementar(){
    this.decrementarDesdeElHijo.emit(); //metodo que va a emitir un evento vacio al padre.
  }

}
