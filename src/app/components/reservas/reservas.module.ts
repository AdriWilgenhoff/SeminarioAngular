import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReservaComponent } from './form-reserva/form-reserva.component';
import { MiReservaComponent } from './mi-reserva/mi-reserva.component';
import { ReservasComponent } from './reservas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FormReservaComponent,
    MiReservaComponent,
    ReservasComponent,
    MiReservaComponent
  ],
  imports: [
    CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
  ],
  exports: [
    ReservasComponent
  ]
})
export class ReservasModule {}
