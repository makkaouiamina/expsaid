import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupContainerRightComponent } from './signup-container-right.component';

describe('SignupContainerRightComponent', () => {
  let component: SignupContainerRightComponent;
  let fixture: ComponentFixture<SignupContainerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupContainerRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupContainerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
