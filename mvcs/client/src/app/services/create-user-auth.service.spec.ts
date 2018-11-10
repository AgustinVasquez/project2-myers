import { TestBed } from '@angular/core/testing';

import { CreateUserAuthService } from './create-user-auth.service';

describe('CreateUserAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateUserAuthService = TestBed.get(CreateUserAuthService);
    expect(service).toBeTruthy();
  });
});
