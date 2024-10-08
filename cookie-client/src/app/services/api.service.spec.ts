// ApiService.spec.ts - Unit test for ApiService in Angular

import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

// Describe a test suite for the ApiService
describe('ApiService', () => {
  let service: ApiService; // Declare a variable to hold the instance of ApiService

  // Setup function to initialize the TestBed before each test
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configure the testing module
    service = TestBed.inject(ApiService); // Inject the ApiService instance
  });

  // Test to check if the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // Expect the service instance to be truthy
  });
});
