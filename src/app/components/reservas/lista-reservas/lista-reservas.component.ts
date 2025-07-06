import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../../services/reservas.service';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ModalConfirmacionComponent } from '../../shared/modal-confirmacion/modal-confirmacion.component';


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {

  reservas: Reserva[] = [];
  formEditando: FormGroup | null = null;
  idEditando: number | null = null;
  @ViewChild('modalConfirm') modalConfirm!: ModalConfirmacionComponent;
  reservaAEliminar: number | string | null = null;

  constructor(
    private reservasService: ReservasService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  abrirModal(id: number | string) {
    this.reservaAEliminar = id;
    this.modalConfirm.abrir();
  }
  
  confirmarEliminacion() {
    if (this.reservaAEliminar !== null) {
      this.reservasService.eliminarReserva(this.reservaAEliminar).subscribe(() => {
        this.cargarReservas();
        this.reservaAEliminar = null;
      });
    }
  }
  
  cargarReservas() {
    this.reservasService.getReservas().subscribe(res => {
      this.reservas = res;
    });
  }

  editarReserva(reserva: Reserva) {
    this.idEditando = reserva.id;
    this.formEditando = new FormGroup({
      nombre: new FormControl(reserva.nombre, Validators.required),
      fecha: new FormControl(reserva.fecha, Validators.required),
      hora: new FormControl(reserva.hora, Validators.required),
      personas: new FormControl(reserva.personas, [Validators.required, Validators.min(1)]),
      // agregá más controles si querés
    });
  }

  cancelarEdicion() {
    this.formEditando = null;
    this.idEditando = null;
  }

  guardarEdicion() {
    if (this.formEditando && this.formEditando.valid && this.idEditando !== null) {
      const reservaActualizada: Reserva = {
        id: this.idEditando,
        ...this.formEditando.value,
        // asegurate de incluir campos que no estás editando si los necesitás
        email: this.reservas.find(r => r.id === this.idEditando)?.email || '',
        cedula: this.reservas.find(r => r.id === this.idEditando)?.cedula || '',
        vista: this.reservas.find(r => r.id === this.idEditando)?.vista || 'interior',
        comentarios: this.reservas.find(r => r.id === this.idEditando)?.comentarios,
      };

      this.reservasService.actualizarReserva(reservaActualizada).subscribe(() => {
        this.formEditando = null;
        this.idEditando = null;
        this.cargarReservas();
      });
    }
  }

  eliminarReserva(id: number | string) {
    if (confirm('¿Querés eliminar esta reserva?')) {
      this.reservasService.eliminarReserva(id).subscribe(() => {
        this.cargarReservas();
      });
    }
  }

  verReserva(id: number | string) {
    this.router.navigate(['/reservas/mi-reserva', id]);
  }
  


// Getters para los controles, opcional para mejor tipado y limpieza en template
get nombreControl(): FormControl {
  return this.formEditando?.get('nombre') as FormControl;
}

get fechaControl(): FormControl {
  return this.formEditando?.get('fecha') as FormControl;
}

get horaControl(): FormControl {
  return this.formEditando?.get('hora') as FormControl;
}

get personasControl(): FormControl {
  return this.formEditando?.get('personas') as FormControl;
}

}
