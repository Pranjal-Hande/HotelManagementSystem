import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AddBillComponent } from './component/bill/add-bill/add-bill.component';
import { BillComponent } from './component/bill/bill.component';
import { EditBillComponent } from './component/bill/edit-bill/edit-bill.component';
import { AddGuestComponent } from './component/guest/add-guest/add-guest.component';
import { EditGuestComponent } from './component/guest/edit-guest/edit-guest.component';
import { GuestComponent } from './component/guest/guest.component';
import { AddInventoryComponent } from './component/inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './component/inventory/edit-inventory/edit-inventory.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { LoginComponent } from './component/login/login.component';
import { ManagerDashboardComponent } from './component/manager-dashboard/manager-dashboard.component';
import { OwnerDashboardComponent } from './component/owner-dashboard/owner-dashboard.component';
import { ReceptionistDashboardComponent } from './component/receptionist-dashboard/receptionist-dashboard.component';
import { AddReservationComponent } from './component/reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './component/reservation/edit-reservation/edit-reservation.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { AddRoomComponent } from './component/room/add-room/add-room.component';
import { EditRoomComponent } from './component/room/edit-room/edit-room.component';
import { RoomComponent } from './component/room/room.component';

const routes: Routes = [
  
  // { path: 'home', component: AppComponent },
  {path: 'login', component: LoginComponent }, 
  {path: 'about-us', component: AboutUsComponent },
  {path: 'guest', component: GuestComponent },
  {path :'reservation', component:ReservationComponent},
  {path :'room',component:RoomComponent},
  {path :'bill',component:BillComponent},
  {path :'inventory',component:InventoryComponent},
  {path :'receptionist-dashboard',component:ReceptionistDashboardComponent},
  {path :'manager-dashboard',component:ManagerDashboardComponent},
  {path :'owner-dashboard',component:OwnerDashboardComponent},
  {path :'guest/add', component: AddGuestComponent},
  {path :'guest/edit/:guest_id', component: EditGuestComponent},
  {path :'reservation/add', component: AddReservationComponent},
  {path :'reservation/edit/:reservation_id', component: EditReservationComponent},
  {path :'bill/add', component: AddBillComponent},
  {path :'bill/edit/:bill_id', component: EditBillComponent},
  {path :'inventory/add', component: AddInventoryComponent},
  {path :'inventory/edit/:inventory_id', component: EditInventoryComponent},
  {path :'room/add', component: AddRoomComponent},
  {path :'room/edit/:room_id', component: EditRoomComponent},
 
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
