import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
genders = ['male','female'];
signUpForm!:FormGroup;
ngOnInit(){
this.signUpForm = new FormGroup({
  username: new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.required,Validators.email]),
  gender: new FormControl('female')
})
}
onSubmit(){
  console.log(this.signUpForm)
}
}
