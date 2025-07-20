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

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  getReservaPorId(id: number | string): Observable<Reserva> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reserva>(url);
  }

  hacerReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }

  actualizarReserva(reserva: Reserva): Observable<Reserva> {
  
    const url = `${this.apiUrl}/${reserva.id}`;
    return this.http.put<Reserva>(url, reserva);
  }

  eliminarReserva(id: number | string): Observable<void> {
  
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
