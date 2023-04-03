import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent  implements OnInit{
  guestDetails:Guest={
    guest_id: '',
    e_mail: '',
    guest_Name: '',
    gender: '',
    address: 0,
    phone_number: 0
  }

  constructor(private route : ActivatedRoute, private guestsService : GuestsService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const guest_id=params.get('guest_id');

        if(guest_id){
          this.guestsService.getGuest(guest_id).subscribe({
            next:(response)=>{
              this.guestDetails=response;

            }
          })

        }
      }
    })
    
  }
  updateGuest(){
    this.guestsService.updateGuest(this.guestDetails.guest_id, this.guestDetails).subscribe({
      next:(response)=>{
        this.router.navigate(['/guest']);
      }
    });
      
  }
  deleteGuest(guest_id:string){
    this.guestsService.deleteGuest(guest_id).subscribe({
      next:(response)=>{
        this.router.navigate(['/guest']);
      }

    });
    
  }  

 

}
