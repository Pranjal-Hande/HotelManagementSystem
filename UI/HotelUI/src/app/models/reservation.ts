export interface Reservation {
    
    reservation_id:string,
    no_of_adults: number,
    no_of_children: number,
    check_out: Date|undefined,
    check_in: Date|undefined,
    status: boolean,
    no_of_nights: number,
    guest_Id: string,
    room_id: string
}
