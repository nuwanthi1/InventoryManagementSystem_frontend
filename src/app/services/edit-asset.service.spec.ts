import { TestBed } from '@angular/core/testing';

import { EditAssetService } from './edit-asset.service';

describe('EditAssetService', () => {
  let service: EditAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
