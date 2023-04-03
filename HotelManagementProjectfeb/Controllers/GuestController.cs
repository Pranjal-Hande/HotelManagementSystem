using AutoMapper;
using HotelManagementProjectfeb.Model.Domain;
using HotelManagementProjectfeb.Model.DTO;
using HotelManagementProjectfeb.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace HotelManagementProjectfeb.Controllers
{
  
    [ApiController]

    [Route("Guest")]
   // [Authorize]
    public class GuestController : Controller
    {


        //Profiles is basically a way to tell the application that
        //we have a code that is mapping the models  us
        //DTO=DAta transfer object this for converting
        // [Authorize]
        //The authorize attribute means the client must have valid token to access this

        private readonly IGuestRepository _guestRepository;

        private readonly IMapper Mapper;

       
        public GuestController(IGuestRepository guestRepository, IMapper mapper)
        {
            this._guestRepository = guestRepository;

            this.Mapper = mapper;
        }


        [HttpGet]
       // [Authorize]
       // [Authorize(Roles = "receptionist,manager,owner")]

        public async Task<IActionResult> GetAllGuestAsync()
        {
            var guest = await _guestRepository.GetAllAsync();

            //BY using Auto MApper
            //by 
             var guestsDTO = Mapper.Map<List<Model.DTO.Guest>>(guest);
            
                
            

            return Ok(guestsDTO);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetGuestAsync")]
        //[Authorize]
        //[Authorize(Roles = "receptionist")]
        public async Task<IActionResult> GetGuestAsync(Guid id)
        {
            var guestm = await _guestRepository.GetAsync(id);

            if (guestm == null)
            {
                return NotFound();
            }

            var guestDTO = Mapper.Map<Model.DTO.Guest>(guestm);

            return Ok(guestDTO);
        }

        [HttpPost]
        //[Authorize]
        //[Authorize(Roles = "Receptionist")]
        public async Task<IActionResult> AddGuestAsync(Model.DTO.AddGuestRequest addguestRequest)
        {

            // first convert Request(DTO) to domain model
            var guest = new Model.Domain.Guest()
            {
                E_mail = addguestRequest.E_mail,
                Guest_Name=addguestRequest.Guest_Name,
                Gender = addguestRequest.Gender,
                Address = addguestRequest.Address,
                Phone_number = addguestRequest.Phone_number

            };

            //Pass details to Repository
            guest = await _guestRepository.AddAsync(guest);

            //Convert back to DTO

            var guestDTO = new Model.DTO.Guest
            {
                Guest_id = guest.Guest_id,
                E_mail = guest.E_mail,
                Guest_Name=guest.Guest_Name,
                Gender = guest.Gender,
                Address = guest.Address,
                Phone_number = guest.Phone_number

            };

            return CreatedAtAction(nameof(GetGuestAsync), new { id = guestDTO.Guest_id }, guestDTO);

        }

        [HttpDelete]
        [Route("{id:guid}")]
        [ActionName("DeleteGuestAsync")]
        //   [Authorize]
       //   [Authorize(Roles = "receptionist")]
        public async Task<IActionResult> DeleteGuestAsync(Guid id)
        {
            //Get region from database 

            var guest = await _guestRepository.DeleteAsync(id);

            //if null not found
            if (guest == null)
            {
                return NotFound();
            }
            //convert response back to DTO
            var guestDTO = new Model.DTO.Guest
            {
                Guest_id = guest.Guest_id,
                E_mail = guest.E_mail,
                Guest_Name=guest.Guest_Name,
                Gender = guest.Gender,
                Address = guest.Address,
                Phone_number = guest.Phone_number

            };

            //return Ok response
            return Ok(guestDTO);

        }

        [HttpPut]
        [Route("{id:guid}")]
        [ActionName("UpdateGuestAsync")]
        // [Authorize]
         // [Authorize(Roles = "receptionist")]
        public async Task<IActionResult> UpdateGuestAsync([FromRoute] Guid id, [FromBody] Model.DTO.UpdateGuestRequest updateguestRequest)
        {

            var guest = new Model.Domain.Guest()
            {
                E_mail = updateguestRequest.E_mail,
                Guest_Name=updateguestRequest.Guest_Name,
                Gender = updateguestRequest.Gender,
                Address = updateguestRequest.Address,
                Phone_number = updateguestRequest.Phone_number
            };


            //update region using repository
            guest = await _guestRepository.UpdateAsync(id, guest);

            //if null not found
            if (guest == null)
            {
                return NotFound();
            }

            //Convert Domain back to DTO
            var guestDTO = new Model.DTO.Guest
            {
                Guest_id = guest.Guest_id,
                E_mail = guest.E_mail,
                Guest_Name=guest.Guest_Name,
                Gender = guest.Gender,
                Address = guest.Address,
                Phone_number = guest.Phone_number

            };

            //Return OK Response

            return Ok(guestDTO);
        }

    }

}

