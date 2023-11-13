
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
 
   username: ['',Validators.required],
   password:['',Validators.required],
   email: ['', [Validators.required, Validators.email]],
   phone:['',Validators.required],
 
  });
 register: FormGroup<any> | undefined;
 
   title: any;
 
   isSubmitted= false; 
   constructor (private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   onSubmit(): void {
 console.log('Submitted form', 
 this.registerForm.value,
 this.registerForm.invalid);
 
 
 
   }
     
 }
  