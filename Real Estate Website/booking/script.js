  const form = document.querySelector('.hotel-booking-form');
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');

  form.addEventListener('submit', function(e) {
    const inDate = new Date(checkin.value);
    const outDate = new Date(checkout.value);

    if (inDate >= outDate) {
      e.preventDefault();
      alert("Check-out must be after check-in date.");
    }
  });
