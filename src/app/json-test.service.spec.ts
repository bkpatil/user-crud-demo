import { TestBed } from '@angular/core/testing';

import { JsonTestService } from './json-test.service';

describe('JsonTestService', () => {
  let service: JsonTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
