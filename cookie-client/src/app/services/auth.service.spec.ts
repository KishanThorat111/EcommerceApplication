// AuthService.spec.ts - Unit Tests for AuthService

import { TestBed } from '@angular/core/testing'; // Import TestBed for setting up the testing module
import { AuthService } from './auth.service'; // Import the AuthService to be tested

describe('AuthService', () => {
  let service: AuthService; // Declare a variable to hold the instance of AuthService

  // This function runs before each test
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configure the testing module
    service = TestBed.inject(AuthService); // Inject the AuthService into the test suite
  });

  // Test to check if the AuthService is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // Expect that the service instance is truthy (i.e., exists)
  });
});
