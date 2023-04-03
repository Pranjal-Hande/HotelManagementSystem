import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest';
import { Reservation } from '../models/reservation';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  baseAPIUrl='https://localhost:7081';
  
  constructor(private http:HttpClient) { }
  getAllReservations() : Observable<Reservation[]>
   {

  return this.http.get<Reservation[]>(this.baseAPIUrl + '/Reservation');

  }
  addReservation(addReservationRequest:Reservation) : Observable<Reservation>
  {
    return this.http.post<Reservation>(this.baseAPIUrl + '/Reservation', addReservationRequest);

  }
  getReservation(reservation_id : string): Observable<Reservation> 
  {
    return this.http.get<Reservation>(this.baseAPIUrl + '/Reservation/' + reservation_id);

  }
  updateReservation(reservation_id:string, updateReservationRequest: Reservation) : Observable<Reservation> 
  {
    return this.http.put<Reservation>(this.baseAPIUrl + '/Reservation/' + reservation_id,updateReservationRequest);

  }
  deleteReservation(reservation_id: string): Observable<Reservation>{
    return this.http.delete<Reservation>(this.baseAPIUrl + '/Reservation/' + reservation_id);

    
  }
  
}

