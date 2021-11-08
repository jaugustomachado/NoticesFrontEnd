import { TestBed } from '@angular/core/testing';

import { UpdatePartiallyService } from './update-partially.service';

describe('UpdatePartiallyService', () => {
  let service: UpdatePartiallyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePartiallyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
