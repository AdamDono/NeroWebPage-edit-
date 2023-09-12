import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { 
    
  }
  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "FirstName": new FormControl (null, [Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "LastName": new FormControl (null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "Email": new FormControl (null,[Validators.required,Validators.email]),
      "Phone": new FormControl (null,[Validators.required,Validators.pattern('[0-9]*')])
    }); 
  }

  //submit funtion
  submitData()
{
  console.log(this.registerForm );

  if (this.registerForm.valid)
  { 

alert(`Thank You ${this.registerForm.value.FirstName}`)


  }


  
}

get FirstName() {return this.registerForm.get('FirstName');}
get LastName() {return this.registerForm.get('LastName');}
get Email() {return this.registerForm.get('Email');}
get Phone() {return this.registerForm.get('Phone');}

}
