import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent {
  reservationDetails:Reservation={
    reservation_id: '',
    no_of_adults: 0,
    no_of_children: 0,
    check_out: undefined,
    check_in: undefined,
    status: false,
    no_of_nights: 0,
    guest_Id: '',
    room_id: ''
  }

  constructor(private route : ActivatedRoute, private reservationService : ReservationService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const reservation_id=params.get('reservation_id');

        if(reservation_id){
          this.reservationService.getReservation(reservation_id).subscribe({
            next:(response)=>{
              this.reservationDetails=response;

            }
          })

        }
      }
    })
    
  }
  updateReservation(){
    this.reservationService.updateReservation(this.reservationDetails.reservation_id, this.reservationDetails).subscribe({
      next:(response)=>{
        this.router.navigate(['/reservation']);
      }
    });
      
  }
  deleteReservation(reservation_id:string){
    this.reservationService.deleteReservation(reservation_id).subscribe({
      next:(response)=>{
        this.router.navigate(['/reservation']);
      }

    });
    
  }  

 

}



