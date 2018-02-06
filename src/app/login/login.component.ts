import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service'
import { Router} from '@angular/router'
// import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logindata={}
constructor( private MyserviceService:MyserviceService,private route:Router ) 
  {
      this.logindata={};
 }
   loginuser(){
     this.route.navigate(['/snav']);
     console.log(this.loginuser);
     
  }
  ngOnInit() {
    this.logindata=this.MyserviceService.login();
     }
}
