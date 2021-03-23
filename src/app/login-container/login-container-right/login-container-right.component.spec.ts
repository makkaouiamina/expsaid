import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerRightComponent } from './login-container-right.component';

describe('LoginContainerRightComponent', () => {
  let component: LoginContainerRightComponent;
  let fixture: ComponentFixture<LoginContainerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginContainerRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
