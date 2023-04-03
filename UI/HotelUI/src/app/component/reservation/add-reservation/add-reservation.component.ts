import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  addReservationRequest : Reservation={
    reservation_id: '',
    no_of_adults: 0,
    no_of_children: 0,
    check_out: undefined,
    check_in: undefined,
    status: false,
    no_of_nights: 0,
    guest_Id: '',
    room_id: '',
    
  };


 constructor( private reservationService : ReservationService,private router: Router){}

  ngOnInit(): void {
    
  }
  addReservation(){
    this.reservationService.addReservation(this.addReservationRequest)
    .subscribe({
     next:(reservation) =>{
       this.router.navigate(['/reservation']);
     }
    })
   }
 
 }