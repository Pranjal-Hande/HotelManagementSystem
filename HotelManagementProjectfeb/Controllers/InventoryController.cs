using AutoMapper;
using HotelManagementProjectfeb.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementProjectfeb.Controllers
{
   
    [ApiController]
    [Route("Inventory")]
   // [Authorize(Roles ="manager")]
    public class InventoryController : Controller
    {
        //Profiles is basically a way to tell the application that
        //we have a code that is mapping the models  us
        //DTO=DAta transfer object this for converting
        // [Authorize]
        //The authorize attribute means the client must have valid token to access this

        private readonly IInventoryRepositorycs _inventoryRepository;

        private readonly IMapper Mapper;


        public InventoryController(IInventoryRepositorycs inventoryRepository, IMapper mapper)
        {
            this._inventoryRepository = inventoryRepository;

            this.Mapper = mapper;
        }


        [HttpGet]
        //[Authorize]
      //[Authorize(Roles = "manager,owner")]

        public async Task<IActionResult> GetAllInventoryAsync()
        {
            var inventory = await _inventoryRepository.GetAllAsync();

            //BY using Auto MApper

            var inventoryDTO = Mapper.Map<List<Model.DTO.Inventory>>(inventory);

            return Ok(inventoryDTO);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetInventoryAsync")]
        //[Authorize]
       // [Authorize(Roles = "manager")]
        public async Task<IActionResult> GetInventoryAsync(Guid id)
        {
            var inventorym = await _inventoryRepository.GetAsync(id);

            if (inventorym == null)
            {
                return NotFound();
            }

            var inventoryDTO = Mapper.Map<Model.DTO.Inventory>(inventorym);

            return Ok(inventoryDTO);
        }

        [HttpPost]
        //[Authorize]
      //  [Authorize(Roles = "manager")]
        public async Task<IActionResult> AddInventoryAsync(Model.DTO.AddInventoryRequest addinventoryRequest)
        {

            // first convert Request(DTO) to domain model
            var inventory = new Model.Domain.Inventory()
            {
                Inventory_Name = addinventoryRequest.Inventory_Name,

                quantity = addinventoryRequest.quantity,

            };

            //Pass details to Repository
            inventory = await _inventoryRepository.AddAsync(inventory);

            //Convert back to DTO

            var inventoryDTO = new Model.DTO.Inventory()
            {

                Inventory_Name = inventory.Inventory_Name,

                quantity = inventory.quantity

            };

            return CreatedAtAction(nameof(GetInventoryAsync), new { id = inventoryDTO.Inventory_Id }, inventoryDTO);

        }

        [HttpDelete]
        [Route("{id:guid}")]
        //   [Authorize]
       //   [Authorize(Roles = "manager")]
        public async Task<IActionResult> DeleteInventoryAsync(Guid id)
        {
            //Get region from database 

            var inventory = await _inventoryRepository.DeleteAsync(id);

            //if null not found
            if (inventory == null)
            {
                return NotFound();
            }
            //convert response back to DTO
            var inventoryDTO = new Model.DTO.Inventory()
            {
                Inventory_Name = inventory.Inventory_Name,

                quantity = inventory.quantity


            };

            //return Ok response
            return Ok(inventoryDTO);

        }

        [HttpPut]
        [Route("{id:guid}")]
        // [Authorize]
       //  [Authorize(Roles = "manager")]
        public async Task<IActionResult> UpdateInventoryAsync([FromRoute] Guid id, [FromBody] Model.DTO.UpdateInventoryRequest updateInventoryRequest)
        {

            var inventory = new Model.Domain.Inventory()
            {
                Inventory_Name = updateInventoryRequest.Inventory_Name,

                quantity = updateInventoryRequest.quantity,


            };


            //update region using repository
            inventory = await _inventoryRepository.UpdateAsync(id, inventory);

            //if null not found
            if (inventory == null)
            {
                return NotFound();
            }

            //Convert Domain back to DTO
            var inventoryDTO = new Model.DTO.Inventory
            {
                Inventory_Name = inventory.Inventory_Name,

                quantity = inventory.quantity

            };

            //Return OK Response

            return Ok(inventoryDTO);
        }

    }

}




