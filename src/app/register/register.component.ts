import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  isEmailValid: Boolean = false;
  showMsg: Boolean = false;
  message: string = '';
  
  emailForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  get form(): FormGroup {
    return this.emailForm;
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  homeBtnClick(): void {
    this.router.navigate(['home']);
  }

  resetMsg(): void {
    if (this.showMsg) {
      this.message = '';
      this.showMsg = false;
      this.isEmailValid = false;
    }
  }

  emailFormSubmit(): void {

    this.showMsg = true;
    if (this.emailForm.status === "INVALID") {
      this.isEmailValid = false;
      if (this.formControl['emailId'].errors) {
        if (this.formControl['emailId'].errors['required']) {
          this.message = "Please enter email id";
        } else if (this.formControl['emailId'].errors['email']) {
          this.message = "Please enter valid email id";
        }
      }
    } else {
      this.isEmailValid = true;
      this.message = 'Email id is Valid';
    }
  }
}