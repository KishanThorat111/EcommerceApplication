import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent] // Declare the AuthComponent to be tested
    })
    .compileComponents(); // Compile template and styles
    
    // Create the component and test fixture
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component instance is created successfully
  });
});
