import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent {
  @Input() reserva: Reserva | null = null;
  @Output() guardado = new EventEmitter<Reserva>();
  @Output() cerrado = new EventEmitter<void>();

  form: FormGroup = new FormGroup({});

  ngOnChanges() {
    if (this.reserva) {
      this.form = new FormGroup({
        nombre: new FormControl(this.reserva.nombre, Validators.required),
        email: new FormControl(this.reserva.email, [Validators.required, Validators.email]),
        cedula: new FormControl(this.reserva.cedula, Validators.required),
        fecha: new FormControl(this.reserva.fecha, Validators.required),
        hora: new FormControl(this.reserva.hora, Validators.required),
        personas: new FormControl(this.reserva.personas, [Validators.required, Validators.min(1), Validators.max(6)]),
        vista: new FormControl(this.reserva.vista, Validators.required),
        comentarios: new FormControl(this.reserva.comentarios || '')
      });
    }
  }
  

  guardar() {
    if (this.form.valid && this.reserva) {
      const reservaEditada: Reserva = {
        ...this.reserva,
        ...this.form.value
      };
      this.guardado.emit(reservaEditada);
    }
  }

  cerrar() {
    this.cerrado.emit();
  }
}
