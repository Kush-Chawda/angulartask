import { Component, OnInit } from '@angular/core';
import {GetdataserviceService} from '../getdataservice.service'
import {Products} from '../modals/Products'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  people:Products[];


  // people = [
  
  //   {
  //     "path": "assets/71BCIrfMHhL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/71mbC-uhIRL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/91i9noutZDL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/717upNgFZQL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/810nvHcEsGL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/A14Qc5IVisL._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/A17nBKr4D7L._AC_SY200_.jpg"
  //   },  {
  //     "path": "assets/vivo1.jpg"
  //   },  {
  //     "path": "assets/mob2.jpg"
  //   },  {
  //     "path": "assets/mob3.jpg"
  //   },  {
  //     "path": "assets/mob5.jpg"
  //   },  {
  //     "path": "assets/mob6.jpg"
  //   },  {
  //     "path": "assets/mob7.jpg"
  //   },  {
  //     "path": "assets/mob8.jpg"
  //   },  {
  //     "path": "assets/mob9.jpg"
  //   },  {
  //     "path": "assets/mob5.jpg"
  //   },  {
  //     "path": "assets/mob6.jpg"
  //   },  {
  //     "path": "assets/mob7.jpg"
  //   },  {
  //     "path": "assets/mob8.jpg"
  //   },  {
  //     "path": "assets/mob9.jpg"
  //   }
  // ];
  constructor(private dataSerive:GetdataserviceService) {
  
}

  ngOnInit() {
   
  this.getApiResponse();
  
  }
  clickEvent(){
   
    console.log('clickEvent');
  }

  public getApiResponse(){


    this.dataSerive.getData().subscribe(data => {
      
      console.log(data)
      this.people=data;
console.log(this.people);
});
  

  }




}
