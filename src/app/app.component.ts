import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi app de angular by elito';
  valorDelContador:number = 0;
  reciboMensaje : string ="";


  recibirMensaje($event:string){
    this.reciboMensaje = $event;
  }
// Lo que hacemos aqui, es manejar la logica en el componente padre. En el componente hijo emitimos el evento, mostramos los botones
//y aqui manejamos la logica del evento cuando los presionamos
  decrementar(){
    this.valorDelContador--;
  }
  incrementar(){
    this.valorDelContador++;
  }


  
}
