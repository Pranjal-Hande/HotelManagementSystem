using AutoMapper;
using HotelManagementProjectfeb.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementProjectfeb.Controllers
{

    [ApiController]
    [Route("Room")]
    public class RoomController : Controller

    {
        //Profiles is basically a way to tell the application that
        //we have a code that is mapping the models  us
        //DTO=DAta transfer object this for converting
        // [Authorize]
        //The authorize attribute means the client must have valid token to access this

        private readonly IRoomRepository _roomRepository;

        private readonly IMapper Mapper;


        public RoomController(IRoomRepository roomRepository, IMapper mapper)
        {
            this._roomRepository = roomRepository;

            this.Mapper = mapper;
        }


        [HttpGet]
        //[Authorize]
       //  [Authorize(Roles = "Receptionist,manager,owner")]


        public async Task<IActionResult> GetAllRoomAsync()
        {
            var room = await _roomRepository.GetAllAsync();

            //BY using Auto MApper

            var roomDTO = Mapper.Map<List<Model.DTO.Room>>(room);

            return Ok(roomDTO);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetRoomAsync")]
        //[Authorize]
     //   [Authorize(Roles = "manager,owner")]
        public async Task<IActionResult> GetRoomAsync(Guid id)
        {
            var room = await _roomRepository.GetAsync(id);

            if (room == null)
            {
                return NotFound();
            }

            var roomDTO = Mapper.Map<Model.DTO.Room>(room);

            return Ok(roomDTO);
        }

        [HttpPost]
        //[Authorize]
        //[Authorize(Roles = "writer")]
      //  [Authorize(Roles = "manager,owner")]
        public async Task<IActionResult> AddRoomAsync(Model.DTO.AddRoomRequest addRoomRequest)
        {

            // first convert Request(DTO) to domain model
            var room = new Model.Domain.Room()
            {
                room_rate = addRoomRequest.room_rate,

                room_status = addRoomRequest.room_status,

            };

            //Pass details to Repository
            room = await _roomRepository.AddAsync(room);

            //Convert back to DTO

            var roomDTO = new Model.DTO.Room
            {
                room_rate = room.room_rate,

                room_status = room.room_status,

            };

            return CreatedAtAction(nameof(GetRoomAsync), new { id = roomDTO.room_id }, roomDTO);

        }

        [HttpDelete]
        [Route("{id:guid}")]
        //   [Authorize]
       // [Authorize(Roles = "manager,owner")]
        public async Task<IActionResult> DeleteRoomAsync(Guid id)
        {
            //Get region from database 

            var room = await _roomRepository.DeleteAsync(id);


            //if null not found
            if (room == null)
            {
                return NotFound();
            }
            //convert response back to DTO
            var roomDTO = new Model.DTO.Room
            {
                room_rate = room.room_rate,

                room_status = room.room_status

            };

            //return Ok response
            return Ok(roomDTO);

        }

        [HttpPut]
        [Route("{id:guid}")]
        // [Authorize]
       // [Authorize(Roles = "manager,owner")]
        public async Task<IActionResult> UpdateRoomAsync([FromRoute] Guid id, [FromBody] Model.DTO.UpdateRoomRequest updateroomRequest)
        {

            var room = new Model.Domain.Room()
            {
                room_rate = updateroomRequest.room_rate,

                room_status = updateroomRequest.room_status

            };


            //update region using repository
            room = await _roomRepository.UpdateAsync(id, room);

            //if null not found
            if (room == null)
            {
                return NotFound();
            }

            //Convert Domain back to DTO
            var roomDTO = new Model.DTO.Room
            {
                room_rate = room.room_rate,

                room_status = room.room_status

            };

            //Return OK Response

            return Ok(roomDTO);
        }

    }
}
