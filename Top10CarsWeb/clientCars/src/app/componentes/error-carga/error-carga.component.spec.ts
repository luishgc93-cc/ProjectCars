import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCargaComponent } from './error-carga.component';

describe('ErrorCargaComponent', () => {
  let component: ErrorCargaComponent;
  let fixture: ComponentFixture<ErrorCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
