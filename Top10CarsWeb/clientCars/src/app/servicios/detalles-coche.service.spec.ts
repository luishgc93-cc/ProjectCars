import { TestBed } from '@angular/core/testing';

import { DetallesCocheService } from './detalles-coche.service';

describe('DetallesCocheService', () => {
  let service: DetallesCocheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesCocheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
