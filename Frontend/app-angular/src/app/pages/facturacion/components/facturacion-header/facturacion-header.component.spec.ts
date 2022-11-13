import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionHeaderComponent } from './facturacion-header.component';

describe('FacturacionHeaderComponent', () => {
  let component: FacturacionHeaderComponent;
  let fixture: ComponentFixture<FacturacionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
