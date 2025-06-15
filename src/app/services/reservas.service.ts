import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../interfaces/reserva.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'https://666486b1932baf9032ab5b33.mockapi.io/api/v1/reservas'; 
  constructor(private http: HttpClient) {}

  hacerReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }
}
