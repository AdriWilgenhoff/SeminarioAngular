import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plato } from '../interfaces/plato.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  private apiUrl = 'https://666486b1932baf9032ab5b33.mockapi.io/api/v1/platos';

  constructor(private http: HttpClient) {}

  getPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(this.apiUrl);
  }
}
