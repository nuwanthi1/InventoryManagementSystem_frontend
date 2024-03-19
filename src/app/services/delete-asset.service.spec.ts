import { TestBed } from '@angular/core/testing';

import { DeleteAssetService } from './delete-asset.service';

describe('DeleteAssetService', () => {
  let service: DeleteAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
