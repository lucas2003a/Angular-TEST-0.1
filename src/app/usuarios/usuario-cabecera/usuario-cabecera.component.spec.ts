import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCabeceraComponent } from './usuario-cabecera.component';

describe('UsuarioCabeceraComponent', () => {
  let component: UsuarioCabeceraComponent;
  let fixture: ComponentFixture<UsuarioCabeceraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCabeceraComponent]
    });
    fixture = TestBed.createComponent(UsuarioCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
