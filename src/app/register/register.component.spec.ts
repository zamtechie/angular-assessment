import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [ RegisterComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  it(`'test@gmail.com' should be valid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'test@gmail.com'
    });

    component.emailFormSubmit();
    
    expect(component.emailForm.valid).toEqual(true);
    expect(component.isEmailValid).toEqual(true);
    expect(component.message).toContain('Email id is Valid');
  });

  it(`'test@outlook' should be valid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'test@gmail.com'
    });

    component.emailFormSubmit();
    
    expect(component.emailForm.valid).toEqual(true);
    expect(component.isEmailValid).toEqual(true);
    expect(component.message).toContain('Email id is Valid');
  });

  it('Email Id should not be empty', () => {
    component.emailForm.setValue({
      'emailId': ''
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter email id');
  });

  it(`'invalidemailid' should be invalid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'invalidemailid'
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter valid email id');
  });

  it(`'test @test.com' should be invalid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'invalidemailid'
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter valid email id');
  });

  it(`'test@test@' should be invalid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'invalidemailid'
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter valid email id');
  });

  it(`'test@test@test.com' should be invalid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'invalidemailid'
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter valid email id');
  });
  
  it(`'a”b(c)d,e:f;gi[j\k]l@domain.com' should be invalid Email Id`, () => {
    component.emailForm.setValue({
      'emailId': 'invalidemailid'
    });

    component.emailFormSubmit();

    expect(component.emailForm.valid).toEqual(false);
    expect(component.isEmailValid).toEqual(false);
    expect(component.message).toContain('Please enter valid email id');
  });
});
