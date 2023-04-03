import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest';
import { GuestsService } from 'src/app/services/guests.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})

export class GuestComponent implements OnInit {
 
  guests: Guest[] =[];
  constructor(private guestservice : GuestsService){}

  ngOnInit(): void {
    this.guestservice.getAllGuests()
    .subscribe({
      next:(guests)=>{
        this.guests=guests;
      },
      error:(response)=>{
        console.log(response);
      }
    })
    
  }
  

}