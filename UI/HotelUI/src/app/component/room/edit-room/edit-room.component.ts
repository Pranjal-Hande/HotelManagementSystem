import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent  implements OnInit{
  roomDetails:Room={
    room_id: '',
    room_rate: 0,
    room_status: false
  }

  constructor(private route : ActivatedRoute, private roomsService : RoomsService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const room_id=params.get('room_id');

        if(room_id){
          this.roomsService.getRoom(room_id).subscribe({
            next:(response)=>{
              this.roomDetails=response;

            }
          })

        }
      }
    })
    
  }
  updateRoom(){
    this.roomsService.updateRoom(this.roomDetails.room_id, this.roomDetails).subscribe({
      next:(response)=>{
        this.router.navigate(['/room']);
      }
    });
      
  }
  deleteRoom(room_id:string){
    this.roomsService.deleteRoom(room_id).subscribe({
      next:(response)=>{
        this.router.navigate(['/room']);
      }

    });
    
  }  

 

}
