import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutingdemoComponent} from './routingdemo/routingdemo.component'
import {AppComponent} from './app.component'
import {NavbarComponent} from './navbar/navbar.component'


const  routes: Routes = [{
  path: '',component: AppComponent,
  },{  path: 'routingdemo', component:RoutingdemoComponent 
  },{  path: 'navbar', component:NavbarComponent
  
}]

@NgModule({
  exports :[ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})




export class AppRoutingModule { }
