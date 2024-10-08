import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  // `executeGuard` is used to run the `authGuard` in a testing context
  const executeGuard: CanActivateFn = (...guardParameters) => 
      // Running the guard within the injection context of Angular's testing framework
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  // Setup the test module before each test
  beforeEach(() => {
    // Configuring the testing module for running the guard
    TestBed.configureTestingModule({});
  });

  // Test case to ensure the guard is created successfully
  it('should be created', () => {
    // Expect that the `executeGuard` function is truthy, indicating successful guard creation
    expect(executeGuard).toBeTruthy();
  });
});
