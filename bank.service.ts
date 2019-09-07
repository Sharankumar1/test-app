import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseAPI = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'
  'https://vast-shore-74260.herokuapp.com/banks?city=DELHI'
  'https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA'
  'https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE'
  'https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK'

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Authorization': 'my-auth-taken'
    })
  };

  constructor(private http: HttpClient) { }
 
}