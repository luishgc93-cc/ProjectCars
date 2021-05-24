import { TestBed } from '@angular/core/testing';

import { InicioResolveService } from './inicio-resolve.service';

describe('InicioResolveService', () => {
  let service: InicioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
