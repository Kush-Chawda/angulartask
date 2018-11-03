import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Products} from './modals/Products'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataserviceService {
  public server = 'http://localhost:8080/';
  public apiUrl = 'api';
  public serverWithApiUrl = this.server + this.apiUrl;
  constructor(private http:HttpClient) {
    
    
   }
   getData(){
   
   return this.http.get<any[]>(this.server+this.apiUrl);
  
  
  }
   }

