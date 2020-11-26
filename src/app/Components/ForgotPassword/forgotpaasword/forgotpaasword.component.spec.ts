import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpaaswordComponent } from './forgotpaasword.component';

describe('ForgotpaaswordComponent', () => {
  let component: ForgotpaaswordComponent;
  let fixture: ComponentFixture<ForgotpaaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpaaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpaaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
