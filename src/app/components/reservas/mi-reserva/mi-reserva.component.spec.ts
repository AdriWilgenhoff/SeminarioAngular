import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiReservaComponent } from './mi-reserva.component';

describe('MiReservaComponent', () => {
  let component: MiReservaComponent;
  let fixture: ComponentFixture<MiReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
