import { TestBed } from '@angular/core/testing';

import { RegisterInterceptorService } from './register-interceptor.service';

describe('RegisterInterceptorService', () => {
  let service: RegisterInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
