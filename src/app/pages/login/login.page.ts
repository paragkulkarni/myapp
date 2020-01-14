import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlContainer, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsernameValidator } from 'src/app/validaators/username.validator';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;
  validation_messages = {
    'username': [
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    ]
  };

  constructor(private navigator:NavController,private router: Router
    ) { 
      
  }

  navigate(){
    this.router.navigate(['/detail'])
  }



  ngOnInit(){
    this.loginForm = new FormGroup({
      firstname: new FormControl('', [Validators.minLength(3)]),
      password: new FormControl('', Validators.minLength(2))
   });
  }




  loginUser(){
    console.log(this.loginForm.value);

    return this.navigator.navigateForward('home');

  }

  

}
