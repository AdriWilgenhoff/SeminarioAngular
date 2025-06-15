import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/services/platos.service';
import { Plato } from 'src/app/interfaces/plato.interface';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  platos: Plato[] = [];

  constructor(private platosService: PlatosService) {}

  ngOnInit(): void {
    this.platosService.getPlatos().subscribe((data) => {
      this.platos = data;
    });
  }
}
