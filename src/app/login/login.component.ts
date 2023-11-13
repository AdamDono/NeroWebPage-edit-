import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
 
   username: ['',Validators.required],
   password:['',Validators.required],
   email: ['', [Validators.required, Validators.email]],
   phone:['',Validators.required],
 
  });
 login: FormGroup<any> | undefined;
 
   title: any;
 
   isSubmitted= false; 
   constructor (private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   onSubmit(): void {
 console.log('Submitted form', 
 this.loginForm.value,
 this.loginForm.invalid);
 
 
 
   }
     
 }
  