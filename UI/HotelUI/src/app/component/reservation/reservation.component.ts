import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: Reservation[] =[];
  constructor(private reservationservice : ReservationService){}

  ngOnInit(): void {
    this.reservationservice.getAllReservations()
    .subscribe({
      next:(reservations)=>{
        this.reservations=reservations;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
}
