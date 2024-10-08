// HomeComponent Test Suite
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

// Describe the test suite for HomeComponent
describe('HomeComponent', () => {
  let component: HomeComponent; // Declare a variable for the component instance
  let fixture: ComponentFixture<HomeComponent>; // Declare a variable for the component fixture

  // Asynchronous setup function to configure the testing module
  beforeEach(async () => {
    // Configure the testing module for HomeComponent
    await TestBed.configureTestingModule({
      declarations: [HomeComponent] // Declare the component being tested
    })
    .compileComponents(); // Compile the component and its templates

    // Create a fixture for HomeComponent and get the component instance
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance; // Assign the component instance to the variable
    fixture.detectChanges(); // Trigger change detection for the component
  });

  // Test case to verify that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Check if the component instance is truthy
  });
});
