import { TestBed } from '@angular/core/testing';

import { BlockedService } from './blocked.service';

describe('BlockedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockedService = TestBed.get(BlockedService);
    expect(service).toBeTruthy();
  });
});
