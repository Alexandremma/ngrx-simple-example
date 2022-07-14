import { TestBed } from '@angular/core/testing';

import { GhibliApiService } from './ghibli-api.service';

describe('GhibliApiService', () => {
  let service: GhibliApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhibliApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
