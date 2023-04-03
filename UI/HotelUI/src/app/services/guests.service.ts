import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  
  baseAPIUrl='https://localhost:7081';
  
    constructor(private http:HttpClient) { }
    getAllGuests() : Observable<Guest[]>
     {
  
    return this.http.get<Guest[]>(this.baseAPIUrl + '/Guest');
  
    }
    addGuest(addGuestRequest:Guest) : Observable<Guest>
    {
      return this.http.post<Guest>(this.baseAPIUrl + '/Guest', addGuestRequest);
  
    }
    getGuest(guest_id : string): Observable<Guest> 
    {
      return this.http.get<Guest>(this.baseAPIUrl + '/Guest/' + guest_id);

    }
    updateGuest(guest_id:string, updateGuestrequest: Guest) : Observable<Guest> 
    {
      return this.http.put<Guest>(this.baseAPIUrl + '/Guest/' + guest_id,updateGuestrequest);
  
    }
    deleteGuest(guest_id: string): Observable<Guest>{
      return this.http.delete<Guest>(this.baseAPIUrl + '/Guest/' + guest_id);

    }
    }
    
  
  