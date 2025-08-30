// BOOK OP FORM
document.addEventListener("DOMContentLoaded", () => {
  const bookForm = document.getElementById("bookForm");
  if (bookForm) {
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const dept = document.getElementById("dept").value;

      // Generate random OP number
      const opNumber = Math.floor(100 + Math.random() * 900);
      const waitTime = Math.floor(Math.random() * 30) + 10; // 10–40 mins

      const confirmation = document.getElementById("confirmation");
      confirmation.classList.remove("d-none");
      confirmation.innerHTML = `✅ Appointment booked for <b>${name}</b> 
                                <br> Dept: ${dept} 
                                <br> Your OP Number: <b>${opNumber}</b>
                                <br> Est. Wait Time: ${waitTime} mins`;
    });
  }

  // TRACK OP FORM
  const trackForm = document.getElementById("trackForm");
  if (trackForm) {
    trackForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const enteredOP = document.getElementById("opNumber").value;

      // Fake tracking: doctor at OP = enteredOP - 5
      const currentOP = enteredOP - 5 > 0 ? enteredOP - 5 : 1;
      const waitTime = (enteredOP - currentOP) * 5;

      const statusBox = document.getElementById("statusBox");
      statusBox.classList.remove("d-none");
      statusBox.innerHTML = `👨‍⚕️ Now Doctor seeing: OP #${currentOP} 
                             <br> 🧑‍🦱 Your OP Number: #${enteredOP} 
                             <br> ⏳ Approx Waiting Time: ${waitTime} mins`;
    });
  }
});

