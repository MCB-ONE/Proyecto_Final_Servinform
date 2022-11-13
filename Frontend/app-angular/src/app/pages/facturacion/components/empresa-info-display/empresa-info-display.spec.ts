import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaInfoDisplayComponent } from './empresa-info-display';

describe('WelcomeHeaderComponent', () => {
  let component: EmpresaInfoDisplayComponent;
  let fixture: ComponentFixture<EmpresaInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaInfoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
