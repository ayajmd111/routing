import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AjschildComponent } from './ajschild/ajschild.component';
import {MyserviceService } from '../app/myservice.service';
import { NavsideComponent } from './navside/navside.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrdComponent } from './crd/crd.component';
import { HomeComponent } from './home/home.component';







import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';





import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    AngularjsComponent,
    NodejsComponent,
    JavascriptComponent,
    AjschildComponent,
    NavsideComponent,
    GalleryComponent,
    CrdComponent,
    HomeComponent,
    
                


  ],
  imports: [
    RouterModule.forRoot([
      {path:'',redirectTo: "/home", pathMatch: "full"},
      {path:'home',component:HomeComponent},
      {path:'signup',component:RegisterComponent},
      {path:'login/:id', component:LoginComponent},
      {path:'ajs', component:AngularjsComponent,
      children:[{path:"ajsreg",component:AjschildComponent}]},
      {path:"njs",component:NodejsComponent},
      {path:"js",component:JavascriptComponent},
      {path:"snav",component:NavsideComponent,
      children:[{path:"gal",component:GalleryComponent},
                 {path:"crd",component:CrdComponent}]},

      
          ]),

    BrowserModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 

}
