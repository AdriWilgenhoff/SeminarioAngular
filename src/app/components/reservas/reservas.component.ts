import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  mostrarConfirmacion = false;
  datosReserva!: Reserva;
  
  constructor(private router: Router) {}

  onReservaEnviada(reserva: Reserva) {
    this.datosReserva = reserva;
    this.mostrarConfirmacion = true;
  }

  volverAlFormulario() {
    this.mostrarConfirmacion = false;
  }

  irANuevaReserva() {
    this.router.navigate(['/reservas/nueva']); 
  }
}
