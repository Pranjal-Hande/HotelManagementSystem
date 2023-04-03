using AutoMapper;
using HotelManagementProjectfeb.Model.DTO;
using HotelManagementProjectfeb.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementProjectfeb.Controllers
{
    

[ApiController]
[Route("Bill")]
   ///[Authorize(Roles = "receptionist,manager,owner")]
    public class BillController : Controller
{


    //Profiles is basically a way to tell the application that
    //we have a code that is mapping the models  us
    //DTO=DAta transfer object this for converting
    // [Authorize]
    //The authorize attribute means the client must have valid token to access this

    private readonly IBillRepository _billRepository;

    private readonly IMapper Mapper;


    public BillController(IBillRepository billRepository, IMapper mapper)
    {
        this._billRepository = billRepository;

        this.Mapper = mapper;
    }


    [HttpGet]
        //[Authorize]

        //[Authorize(Roles = "Receptionist,manager,owner")]
        public async Task<IActionResult> GetAllBillAsync()
    {
        var bill = await _billRepository.GetAllAsync();

        //BY using Auto MApper

        var billsDTO = Mapper.Map<List<Model.DTO.Bill>>(bill);

        return Ok(billsDTO);
    }

    [HttpGet]
    [Route("{id:guid}")]
    [ActionName("GetBillAsync")]
        //[Authorize]

        //[Authorize(Roles = "Receptionist,manager,owner")]
        public async Task<IActionResult> GetBillAsync(Guid id)
    {
        var billm = await _billRepository.GetAsync(id);

        if (billm == null)
        {
            return NotFound();
        }

        var billDTO = Mapper.Map<Model.DTO.Bill>(billm);

        return Ok(billDTO);
    }

    [HttpPost]
        //[Authorize]
       // [Authorize(Roles = "Receptionist,manager,owner")]
        public async Task<IActionResult> AddBillAsync(Model.DTO.AddBillRequest addbillRequest)
    {

        // first convert Request(DTO) to domain model
        var bill = new Model.Domain.Bill()
        {

            stay_dates = addbillRequest.stay_dates,

            total_bill = addbillRequest.total_bill,

            Room_id = addbillRequest.Room_id,

            Reservation_id = addbillRequest.Reservation_id,

        };

        //Pass details to Repository
        bill = await _billRepository.AddAsync(bill);

        //Convert back to DTO

        var billDTO = new Model.DTO.Bill()
        {

            stay_dates = addbillRequest.stay_dates,

            total_bill = addbillRequest.total_bill,

            Room_id = addbillRequest.Room_id,

            Reservation_id = addbillRequest.Reservation_id,

        };

        return CreatedAtAction(nameof(GetBillAsync), new { id = billDTO.Bill_id }, billDTO);

    }

    [HttpDelete]
    [Route("{id:guid}")]
        //[Authorize(Roles = "Receptionist,manager,owner")]

        public async Task<IActionResult> DeleteBillAsync(Guid id)
    {
        //Get region from database 

        var bill = await _billRepository.DeleteAsync(id);

        //if null not found
        if (bill == null)
        {
            return NotFound();
        }
        //convert response back to DTO
        var billDTO = new Model.DTO.Bill
        {
            stay_dates = bill.stay_dates,

            total_bill = bill.total_bill,

            Room_id = bill.Room_id,

            Reservation_id = bill.Reservation_id,
        };

        //return Ok response
        return Ok(billDTO);

    }

    [HttpPut]
    [Route("{id:guid}")]
    // [Authorize(Roles = "Receptionist,manager,owner")]


        public async Task<IActionResult> UpdateBillAsync([FromRoute] Guid id, [FromBody] Model.DTO.UpdateBillRequest updatebillRequest)
    {

        var bill = new Model.Domain.Bill()
        {
            stay_dates = updatebillRequest.stay_dates,

            total_bill = updatebillRequest.total_bill,

            Room_id = updatebillRequest.Room_id,

            Reservation_id = updatebillRequest.Reservation_id,

        };


        //update region using repository
        bill = await _billRepository.UpdateAsync(id, bill);

        //if null not found
        if (bill == null)
        {
            return NotFound();
        }

        //Convert Domain back to DTO
        var billDTO = new Model.DTO.Bill
        {
            stay_dates = bill.stay_dates,

            total_bill = bill.total_bill,

            Room_id = bill.Room_id,

            Reservation_id = bill.Reservation_id

        };

        //Return OK Response

        return Ok(billDTO);
    }

}

}



