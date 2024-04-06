import { TestBed } from '@angular/core/testing';

import { UserAssetsService } from './user-assets.service';

describe('UserAssetsService', () => {
  let service: UserAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
