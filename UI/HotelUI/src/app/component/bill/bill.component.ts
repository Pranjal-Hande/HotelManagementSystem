import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent  implements OnInit{

  billDetails:Bill={
    bill_id: '',
    stay_dates: 0,
    room_id: '',
    reservation_id :''
  }
   
  constructor(private route : ActivatedRoute, private billService : BillService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const bill_id=params.get('bill_id');

        if(bill_id){
          this.billService.getBill(bill_id).subscribe({
            next:(response)=>{
              this.billDetails=response;

            }
          })

        }
      }
    })
    
  }
}

