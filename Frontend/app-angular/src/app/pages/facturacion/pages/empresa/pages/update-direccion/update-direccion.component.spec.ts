import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDireccionComponent } from './update-direccion.component';

describe('UpdateDireccionComponent', () => {
  let component: UpdateDireccionComponent;
  let fixture: ComponentFixture<UpdateDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDireccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
