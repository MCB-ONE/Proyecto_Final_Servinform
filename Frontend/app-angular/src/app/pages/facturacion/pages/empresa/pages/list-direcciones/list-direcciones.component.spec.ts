import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDireccionesComponent } from './list-direcciones.component';

describe('ListDireccionesComponent', () => {
  let component: ListDireccionesComponent;
  let fixture: ComponentFixture<ListDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDireccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
