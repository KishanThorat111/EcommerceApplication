// =====================
// AppComponent Testing
// =====================

// Import necessary testing utilities from Angular core and router modules.
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router'; // Import RouterModule instead
import { AppComponent } from './app.component';

// Define a test suite for the AppComponent.
describe('AppComponent', () => {
  // Set up the testing module before each test runs.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]) // Set up router with an empty route array
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // Test to ensure the app component is created successfully.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Test to check if the title property is set correctly.
  it(`should have as title 'cookie-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cookie-client');
  });

  // Test to verify the title is rendered correctly in the template.
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, cookie-client'
    );
  });
});
