import { TestBed } from '@angular/core/testing';

import { FlightserService } from './flightser.service';

describe('FlightserService', () => {
  let service: FlightserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
