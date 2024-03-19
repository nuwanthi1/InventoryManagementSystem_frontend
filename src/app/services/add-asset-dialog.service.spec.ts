import { TestBed } from '@angular/core/testing';

import { AddAssetDialogService } from './add-asset-dialog.service';

describe('AddAssetDialogService', () => {
  let service: AddAssetDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAssetDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
