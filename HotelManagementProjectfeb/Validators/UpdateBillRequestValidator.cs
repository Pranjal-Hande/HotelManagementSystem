using FluentValidation;

namespace HotelManagementProjectfeb.Validators
{
    public class UpdateBillRequestValidator : AbstractValidator<Model.DTO.UpdateBillRequest>
    {
        public UpdateBillRequestValidator()
        {
            RuleFor(x => x.stay_dates).NotEmpty();

            RuleFor(x => x.total_bill).NotEmpty();

            RuleFor(x => x.Room_id).NotEmpty();

            RuleFor(x => x.Reservation_id).NotEmpty();
        }
    }
}
