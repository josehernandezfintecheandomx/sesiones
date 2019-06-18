import { TestBed } from '@angular/core/testing';

import { ServicioUnicoClienteService } from './servicio-unico-cliente.service';

describe('ServicioUnicoClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioUnicoClienteService = TestBed.get(ServicioUnicoClienteService);
    expect(service).toBeTruthy();
  });
});
