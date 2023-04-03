import { Component } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventories: Inventory[] =[];
  constructor(private inventoryservice : InventoryService){}

  ngOnInit(): void {
    this.inventoryservice.getAllInventories()
    .subscribe({
      next:(inventories)=>{
        this.inventories=inventories;
      },
      error:(response)=>{
        console.log(response);

      }
    })
    
  }

}

    
