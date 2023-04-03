using FluentValidation;

namespace HotelManagementProjectfeb.Validators
{
    public class UpdateReservationRequestValidator : AbstractValidator<Model.DTO.UpdateReservationRequest>
    {
        public UpdateReservationRequestValidator()
        {
            RuleFor(x => x.no_of_adults).GreaterThanOrEqualTo(1);

            RuleFor(x => x.no_of_children).LessThanOrEqualTo(2);

            RuleFor(x => x.Check_out).GreaterThanOrEqualTo(DateTime.Now);

            RuleFor(x => x.Check_in).GreaterThanOrEqualTo(DateTime.Now);

            RuleFor(x => x.no_of_nights).GreaterThanOrEqualTo(1);

            RuleFor(x => x.Guest_Id).NotEmpty();

            RuleFor(x => x.Room_id).NotEmpty();

           

        }
    }
}
