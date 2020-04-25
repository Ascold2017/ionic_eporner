import { TestBed } from '@angular/core/testing';

import { PornsService } from './porns.service';

describe('PornsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PornsService = TestBed.get(PornsService);
    expect(service).toBeTruthy();
  });
});
