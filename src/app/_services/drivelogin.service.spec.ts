import { TestBed } from '@angular/core/testing';

import { DriveloginService } from './drivelogin.service';

describe('DriveloginService', () => {
  let service: DriveloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriveloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
