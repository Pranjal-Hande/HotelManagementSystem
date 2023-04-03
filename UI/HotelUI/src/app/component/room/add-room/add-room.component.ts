import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  addRoomRequest : Room={
    room_id: '',
    room_rate: 0,
    room_status: false
  };

 constructor( private roomsService : RoomsService,private router: Router){}

  ngOnInit(): void {
    
  }
  addRoom(){
   this.roomsService.addRoom(this.addRoomRequest)
   .subscribe({
    next:(room) =>{
      this.router.navigate(['/room']);
    }
   })
  }

}
