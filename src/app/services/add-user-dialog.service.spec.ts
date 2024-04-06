import { TestBed } from '@angular/core/testing';

import { AddUserDialogService } from './add-user-dialog.service';

describe('AddUserDialogService', () => {
  let service: AddUserDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
