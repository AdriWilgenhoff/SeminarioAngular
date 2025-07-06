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
  @ViewChild('modalConfirm') modalConfirm!: ModalConfirmacionComponent;
  reservaAEliminar: number | string | null = null;
  reservaEditando: Reserva | null = null;

  constructor(
    private reservasService: ReservasService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    this.reservasService.getReservas().subscribe(res => {
      this.reservas = res;
    });
  }

  verReserva(id: number | string) {
    this.router.navigate(['/reservas/mi-reserva', id]);
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

  abrirModalEdicion(reserva: Reserva) {
    this.reservaEditando = reserva;
  }

  cerrarModalEdicion() {
    this.reservaEditando = null;
  }

  guardarEdicionModal(reservaEditada: Reserva) {
    this.reservasService.actualizarReserva(reservaEditada).subscribe(() => {
      this.cargarReservas();
      this.cerrarModalEdicion();
    });
  }
}
