import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingdemoComponent } from './routingdemo/routingdemo.component';
import { GetdataserviceService } from './getdataservice.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    RoutingdemoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [GetdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
