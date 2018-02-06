import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;


  constructor( private route:Router, private myserviceService:MyserviceService)
   {
     this.user={
       
       fname:"ayaj",
  };
    }
    reguser()
    {
      this.route.navigate(['login/:id']);
      console.log(this.user);
      this.myserviceService.getuserdata(this.user);
    }
  ngOnInit() {
  }

}

