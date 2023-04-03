import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseAPIUrl='https://localhost:7081';
  
  constructor(private http:HttpClient) { }
  getAllBills() : Observable<Bill[]>
     {
  
    return this.http.get<Bill[]>(this.baseAPIUrl + '/Bill');
  
    }
    getBill(bill_id : string): Observable<Bill> 
    {
      return this.http.get<Bill>(this.baseAPIUrl + '/Bill/' + bill_id);

    }
}
