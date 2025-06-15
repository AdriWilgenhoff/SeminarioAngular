import { Component } from '@angular/core';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  mostrarConfirmacion = false;
  datosReserva!: Reserva;

  onReservaEnviada(reserva: Reserva) {
    this.datosReserva = reserva;
    this.mostrarConfirmacion = true;
  }

  volverAlFormulario() {
    this.mostrarConfirmacion = false;
  }
}
