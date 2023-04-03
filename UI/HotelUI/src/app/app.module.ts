import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './component/guest/guest.component';
import { ReceptionistDashboardComponent } from './component/receptionist-dashboard/receptionist-dashboard.component';
import { ManagerDashboardComponent } from './component/manager-dashboard/manager-dashboard.component';
import { OwnerDashboardComponent } from './component/owner-dashboard/owner-dashboard.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { RoomComponent } from './component/room/room.component';
import { BillComponent } from './component/bill/bill.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGuestComponent } from './component/guest/add-guest/add-guest.component';
import { EditGuestComponent } from './component/guest/edit-guest/edit-guest.component';
import { AddReservationComponent } from './component/reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './component/reservation/edit-reservation/edit-reservation.component';
import { EditRoomComponent } from './component/room/edit-room/edit-room.component';
import { AddRoomComponent } from './component/room/add-room/add-room.component';
import { AddBillComponent } from './component/bill/add-bill/add-bill.component';
import { EditBillComponent } from './component/bill/edit-bill/edit-bill.component';
import { EditInventoryComponent } from './component/inventory/edit-inventory/edit-inventory.component';
import { AddInventoryComponent } from './component/inventory/add-inventory/add-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    ReceptionistDashboardComponent,
    ManagerDashboardComponent,
    OwnerDashboardComponent,
    ReservationComponent,
    RoomComponent,
    BillComponent,
    InventoryComponent,
    AboutUsComponent,
    LoginComponent,
    AddGuestComponent,
    EditGuestComponent,
    AddReservationComponent,
    EditReservationComponent,
    EditRoomComponent,
    AddRoomComponent,
    AddBillComponent,
    EditBillComponent,
    EditInventoryComponent,
    AddInventoryComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
