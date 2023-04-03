using AutoMapper;
using HotelManagementProjectfeb.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementProjectfeb.Controllers
{

    [ApiController]
    [Route("Reservation")]
    public class ReservationController : Controller
    {

        //Profiles is basically a way to tell the application that
        //we have a code that is mapping the models  us
        //DTO=DAta transfer object this for converting
        // [Authorize]
        //The authorize attribute means the client must have valid token to access this

        private readonly IReservationRepository _reservatioRepository;

        private readonly IMapper Mapper;


        public ReservationController(IReservationRepository reservationRepository, IMapper mapper)
        {
            this._reservatioRepository = reservationRepository;

            this.Mapper = mapper;
        }


        [HttpGet]
        //[Authorize]
       // [Authorize(Roles = "Receptionist,manager,owner")]


        public async Task<IActionResult> GetAllReservationAsync()
        {
            var reservation = await _reservatioRepository.GetAllAsync();

            //BY using Auto MApper

            var reservationDTO = Mapper.Map<List<Model.DTO.Reservation>>(reservation);

            return Ok(reservationDTO);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetReservationAsync")]
        //[Authorize]
       // [Authorize(Roles = "Receptionist,manager")]
        public async Task<IActionResult> GetReservationAsync(Guid id)
        {
            var reservation = await _reservatioRepository.GetAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            var reservationDTO = Mapper.Map<Model.DTO.Reservation>(reservation);

            return Ok(reservationDTO);
        }

        [HttpPost]
        //[Authorize]
      // [Authorize(Roles = "Receptionist,manager,owner")]
        public async Task<IActionResult> AddReservationAsync(Model.DTO.AddReservationRequest addReservationRequest)
        {

            // first convert Request(DTO) to domain model
            var reservation = new Model.Domain.Reservation()
            {
                Check_in = addReservationRequest.Check_in,

                Check_out = addReservationRequest.Check_out,

                status = addReservationRequest.status,

                Guest_Id = addReservationRequest.Guest_Id,

                no_of_adults = addReservationRequest.no_of_adults,

                no_of_children = addReservationRequest.no_of_children,

                no_of_nights = addReservationRequest.no_of_nights,

                Room_id = addReservationRequest.Room_id

              };

            //Pass details to Repository
            reservation = await _reservatioRepository.AddAsync(reservation);

            //Convert back to DTO

            var reservationDTO = new Model.DTO.Reservation
            {
                reservation_id = reservation.reservation_id,

                no_of_adults = reservation.no_of_adults,

                no_of_children = reservation.no_of_children,

                Check_out = reservation.Check_out,

                Check_in = reservation.Check_in,

                status = reservation.status,

                no_of_nights = reservation.no_of_adults,

                Guest_Id = reservation.Guest_Id,

                Room_id = reservation.Room_id

                };

            return CreatedAtAction(nameof(GetReservationAsync), new { id = reservationDTO.reservation_id }, reservationDTO);

        }

        [HttpDelete]
        [Route("{id:guid}")]
        //   [Authorize]
       // [Authorize(Roles = "Receptionist,manager")]
        public async Task<IActionResult> DeleteReservationAsync(Guid id)
        {
            //Get region from database 

            var reservation = await _reservatioRepository.DeleteAsync(id);


            //if null not found
            if (reservation == null)
            {
                return NotFound();
            }
            //convert response back to DTO
            var reservationDTO = new Model.DTO.Reservation
            {
                reservation_id = reservation.reservation_id,

                no_of_adults = reservation.no_of_adults,

                no_of_children = reservation.no_of_children,

                Check_out = reservation.Check_out,

                Check_in = reservation.Check_in,

                status = reservation.status,

                no_of_nights = reservation.no_of_adults,

                Guest_Id = reservation.Guest_Id,

                Room_id = reservation.Room_id
            };

            //return Ok response
            return Ok(reservationDTO);

        }

        [HttpPut]
        [Route("{id:guid}")]
        // [Authorize]
        //  [Authorize(Roles = "Receptionist,manager,owner")]
        public async Task<IActionResult> UpdateReservationAsync([FromRoute] Guid id, [FromBody] Model.DTO.UpdateReservationRequest updatereservationRequest)
        {

            var reservation = new Model.Domain.Reservation()
            {

                no_of_adults = updatereservationRequest.no_of_adults,

                no_of_children = updatereservationRequest.no_of_children,

                Check_out = updatereservationRequest.Check_out,

                Check_in = updatereservationRequest.Check_in,

                status = updatereservationRequest.status,

                no_of_nights = updatereservationRequest.no_of_nights,

                Guest_Id = updatereservationRequest.Guest_Id,

                Room_id = updatereservationRequest.Room_id,

              };


            //update region using repository
            reservation = await _reservatioRepository.UpdateAsync(id, reservation);

            //if null not found
            if (reservation == null)
            {
                return NotFound();
            }

            //Convert Domain back to DTO
            var reservationDTO = new Model.DTO.Reservation
            {
                no_of_adults = reservation.no_of_adults,

                no_of_children = reservation.no_of_children,

                Check_out = reservation.Check_out,

                Check_in = reservation.Check_in,

                status = reservation.status,

                no_of_nights = reservation.no_of_nights,

                Guest_Id = reservation.Guest_Id,

                Room_id = reservation.Room_id

                 };

            //Return OK Response

            return Ok(reservationDTO);
        }

    }
}

