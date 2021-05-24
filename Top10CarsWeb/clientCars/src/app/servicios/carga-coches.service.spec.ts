import { TestBed } from '@angular/core/testing';

import { CargaCochesService } from './carga-coches.service';

describe('CargaCochesService', () => {
  let service: CargaCochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaCochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
