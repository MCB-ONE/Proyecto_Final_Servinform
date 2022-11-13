import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesListComponent } from './direcciones-list.component';

describe('DireccionesListComponent', () => {
  let component: DireccionesListComponent;
  let fixture: ComponentFixture<DireccionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
