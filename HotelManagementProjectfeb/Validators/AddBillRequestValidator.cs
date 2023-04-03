using FluentValidation;

namespace HotelManagementProjectfeb.Validators
{
    public class AddBillRequestValidator:AbstractValidator<Model.DTO.AddBillRequest>
    {
        public AddBillRequestValidator()
        {
            RuleFor(x =>x.stay_dates).NotEmpty();

            RuleFor(x=>x.total_bill).NotEmpty();

            RuleFor(x => x.Room_id).NotEmpty();

            RuleFor(x => x.Reservation_id).NotEmpty();
        }
    }
}
