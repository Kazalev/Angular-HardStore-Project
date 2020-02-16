import { TestBed, async, inject } from '@angular/core/testing';

import { LinkGuardGuard } from './link-guard.guard';

describe('LinkGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkGuardGuard]
    });
  });

  it('should ...', inject([LinkGuardGuard], (guard: LinkGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
