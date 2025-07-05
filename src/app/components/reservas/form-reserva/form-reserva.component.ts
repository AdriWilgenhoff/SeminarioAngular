import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent {
  @Output() reservaEnviada = new EventEmitter<Reserva>();
  reservaForm: FormGroup;
  minFecha: string;

  constructor(
    private fb: FormBuilder,
    private reservasService: ReservasService,
    private toastr: ToastrService
  ) {
    const hoy = new Date();
    this.minFecha = hoy.toISOString().split('T')[0];
  
    this.reservaForm = this.crearFormulario();
  }

  private crearFormulario(): FormGroup {
  return this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cedula: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
    personas: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
    vista: ['interior', Validators.required],
    comentarios: ['']
  });
}


 onSubmit() {
  console.log(this.reservaForm)
  if (this.reservaForm.valid) {
    const datos: Reserva = this.reservaForm.value;

    this.reservasService.hacerReserva(datos).subscribe({
      next: () => {
        this.toastr.success('¡Reserva enviada con éxito!');
        this.reservaForm.reset();
        this.reservaEnviada.emit(datos);
        
      },
      error: (err) => {
        console.error('Error al enviar reserva', err);
        this.toastr.error('Ocurrió un error al enviar la reserva');
      }
    });
  } else {
    this.toastr.warning('Por favor completá todos los campos obligatorios');
  }
}

}
