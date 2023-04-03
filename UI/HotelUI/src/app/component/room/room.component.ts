import { Component } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  rooms: Room[] =[];
  constructor(private roomsservice : RoomsService){}

  ngOnInit(): void {
    this.roomsservice.getAllRooms()
    .subscribe({
      next:(rooms)=>{
        this.rooms=rooms;
      },
      error:(response)=>{
        console.log(response);
      }
    })
    
  }

}
