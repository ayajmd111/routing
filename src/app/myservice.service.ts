import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
logindata={};
  getuserdata(use)
  {
   
   this.logindata = use;
  }

  login()
  {
    return this.logindata;
  }

}
