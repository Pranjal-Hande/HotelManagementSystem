import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseAPIUrl='https://localhost:7081';
  
    constructor(private http:HttpClient) { }
    getAllRooms() : Observable<Room[]>
    {
 
   return this.http.get<Room[]>(this.baseAPIUrl + '/Room');
 
   }
   addRoom(addRoomRequest:Room) : Observable<Room>
   {
     return this.http.post<Room>(this.baseAPIUrl + '/Room', addRoomRequest);
 
   }
   getRoom(room_id : string): Observable<Room> 
   {
     return this.http.get<Room>(this.baseAPIUrl + '/Room/' + room_id);

   }
   updateRoom(room_id:string, updateRoomrequest: Room) : Observable<Room> 
   {
     return this.http.put<Room>(this.baseAPIUrl + '/Room/' + room_id,updateRoomrequest);
 
   }
   deleteRoom(room_id: string): Observable<Room>{
     return this.http.delete<Room>(this.baseAPIUrl + '/Room/' + room_id);

   }
   }
   
