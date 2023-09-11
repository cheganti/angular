import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  @ViewChild('f') signUpForm!:NgForm;
  gender='female';
  about = '';
  onFormSubmit() {
    console.log(this.signUpForm)
  }
  checkData() {
    console.log(this.signUpForm)
  }
}
