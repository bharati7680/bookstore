import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  constructor(private httpService:HttpClient) { }


  //booksapiurl

  booksapiurl = `${environment.API_URL}api/book`;
  
  //booklist()

  booklist():Observable<any>
  {
    return this.httpService.get(this.booksapiurl);
  }

}
