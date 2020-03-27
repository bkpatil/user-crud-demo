import { TestBed } from '@angular/core/testing';

import { NgxUserCrudService } from './ngx-user-crud.service';

describe('NgxUserCrudService', () => {
  let service: NgxUserCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUserCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
