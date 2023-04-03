import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseAPIUrl='https://localhost:7081';
  
    constructor(private http:HttpClient) { }
    getAllInventories() : Observable<Inventory[]>
     {
  
    return this.http.get<Inventory[]>(this.baseAPIUrl + '/Inventory');
  
    }
    createInventory(inventory:Inventory) : Observable<Inventory> {
      const httpOptions={headers : new HttpHeaders({'content-Type':'application/json'})}
      return this.http.post<Inventory>(this.baseAPIUrl + '/Inventory', inventory, httpOptions);
  
    }
    updateInventory(inventory:Inventory) : Observable<Inventory> {
      const httpOptions={headers : new HttpHeaders({'content-Type':'application/json'})}
      return this.http.put<Inventory>(this.baseAPIUrl + '/Inventory', inventory, httpOptions);
  
    }

  
}
