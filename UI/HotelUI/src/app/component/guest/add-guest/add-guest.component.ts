import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  addGuestRequest : Guest={
    guest_id: '',
    e_mail: '',
    guest_Name: '',
    gender: '',
    address: 0,
    phone_number: 0
  };

 constructor( private guestsService : GuestsService,private router: Router){}

  ngOnInit(): void {
    
  }
  addGuest(){
   this.guestsService.addGuest(this.addGuestRequest)
   .subscribe({
    next:(guest) =>{
      this.router.navigate(['/guest']);
    }
   })
  }

}
