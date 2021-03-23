import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerLeftComponent } from './login-container-left.component';

describe('LoginContainerLeftComponent', () => {
  let component: LoginContainerLeftComponent;
  let fixture: ComponentFixture<LoginContainerLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginContainerLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
