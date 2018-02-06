import { Component, OnInit } from '@angular/core';
import {  Router}from '@angular/router';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signupuser()
  {
  this.router.navigate(['/signup']);
  }
  loginuser()
  {
    this.router.navigate(['/login/:id'])
  }
}
