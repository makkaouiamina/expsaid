import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupContainerLeftComponent } from './signup-container-left.component';

describe('SignupContainerLeftComponent', () => {
  let component: SignupContainerLeftComponent;
  let fixture: ComponentFixture<SignupContainerLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupContainerLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupContainerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
