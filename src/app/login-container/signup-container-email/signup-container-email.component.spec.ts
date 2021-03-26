import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupContainerEmailComponent } from './signup-container-email.component';

describe('SignupContainerEmailComponent', () => {
  let component: SignupContainerEmailComponent;
  let fixture: ComponentFixture<SignupContainerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupContainerEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupContainerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
