import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent {
  @Input() mensaje: string = '¿Estás seguro?';
  @Input() titulo: string = 'Confirmación';
  @Output() confirmado = new EventEmitter<void>();

  mostrar: boolean = false;

  abrir() {
    this.mostrar = true;
  }

  cerrar() {
    this.mostrar = false;
  }

  aceptar() {
    this.confirmado.emit();
    this.cerrar();
  }
}
