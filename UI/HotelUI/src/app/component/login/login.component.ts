import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {


  constructor(private loginAuth : AuthService, private router: Router){}
  ngOnInit(): void {} 
  loginForm=new FormGroup({
   
    userName  : new FormControl('',[Validators.required]),
    Password : new FormControl('',[Validators.required]),
  });
  isUserValid:boolean=false;

  loginSubmitted(){
    this.loginAuth.login([this.loginForm.value.userName, 
      this.loginForm.value.Password]).subscribe(res=>{
      if(res=='Failure'){
        this.isUserValid=false;
        alert('Login Unsuccessfull');
      }
      else{
        this.isUserValid=true;
        this.loginAuth.setToken(res);
        this.router.navigateByUrl('receptionist-dashboard')  
        alert('Login Successfull');    }
      });
      
  }

  get userName(): FormControl{
    return this.loginForm.get('userName') as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get('Password') as FormControl;
  }
}


  
  

// export class LoginComponent implements OnInit {
//   formGroup : FormGroup;
//   constructor(private authService: AuthService){
  
//  }

//   ngOnInit() {
//     this.initForm();
//   }
//   initForm(){
//     this.formGroup= new FormGroup({
//       userName : new FormControl('',[Validators.required]),
//       Password : new FormControl('',[Validators.required])
//     })
  

// }
// loginProces(){
//   if(this.formGroup.valid){
//     this.authService.login(this.formGroup.value).subscribe(result=>{
//       if(result.success){
//         console.log(result);
//         alert(result.message);
//       }
//       else{
//         alert(result.message);
//       }
//     })
//   }
// }
// }
