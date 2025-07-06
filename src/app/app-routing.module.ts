import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenusComponent } from './components/menus/menus.component';
import { FormReservaComponent } from './components/reservas/form-reserva/form-reserva.component';
import { MiReservaComponent } from './components/reservas/mi-reserva/mi-reserva.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'reservas/nueva', component: FormReservaComponent },
  { path: 'reservas/mi-reserva/:id', component: MiReservaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
