import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-mi-reserva',
  templateUrl: './mi-reserva.component.html',
  styleUrls: ['./mi-reserva.component.css']
})
export class MiReservaComponent {
  @Input() reserva!: Reserva;
  @Output() volver = new EventEmitter<void>();

  volverAlFormulario() {
    this.volver.emit();
  }
  
}
