export const initChangeSection = (bookingForm, event, booking, eventButtonReserve, eventButtonEdit, bookingTitle) => {
  eventButtonReserve.style.transition = 'opacity 0.5s, visibility 0.5s';
  eventButtonEdit.style.transition = 'opacity 0.5s, visibility 0.5s';
  
  eventButtonReserve.classList.remove('event__button_hidden');
  eventButtonEdit.classList.remove('event__button_hidden');

  const changeSector = () => {
    event.classList.add('event_hidden');
    booking.classList.remove('booking_hidden');
  };

  eventButtonReserve.addEventListener('click', () => {
    changeSector();
    bookingTitle.textContent = "Забронируйте место в зале";
    bookingForm.method = "POST";
  });
  eventButtonEdit.addEventListener('click', () => {
    changeSector();
    bookingTitle.textContent = "Редактирование брони";
    bookingForm.method = "PATCH";
  });

};