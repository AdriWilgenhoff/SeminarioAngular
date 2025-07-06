import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-mi-reserva',
  templateUrl: './mi-reserva.component.html',
  styleUrls: ['./mi-reserva.component.css']
})
export class MiReservaComponent implements OnInit {
  reserva!: Reserva;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservasService: ReservasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.cargarReserva(id);
    });
  }

  cargarReserva(id: string) {
    this.reservasService.getReservaPorId(id).subscribe({
      next: (res) => this.reserva = res,
      error: () => this.router.navigate(['/reservas'])
    });
  }

  volverALaLista() {
    this.router.navigate(['/reservas']);
  }
}
