/* I used my google map as a background for the 
home page so the ticker handling is in google-map.js*/

// DOM objects

const reqRide = document.querySelector('#req'); // nav bar
const status = document.querySelector('#status');
const reset = document.querySelector('#reset');

const form = document.querySelector('#reqRide'); // display elements
const bookReceipt = document.querySelector('#booking');
const carstatus = document.querySelector('#carstatus');
const cancelNotif = document.querySelector('#cancelled');

const pickup = document.querySelector('#pickup'); // form elements
const dropoff = document.querySelector('#dropoff');
const bookingErr = document.querySelector('#err');

const carID = document.querySelector('#id');  // status and receipt elements
const pos = document.querySelector('#pos');


/* This function is to manage displaying elements on the page when a user 
clicks on something.  bookingErr is in the array but not checked for so it is 
only dismissed if still present after a user clicks away from the form */

function showHide(element) {

  const infoElements = [form, bookReceipt, carstatus, cancelNotif, bookingErr];

  infoElements.forEach( (item) => {

    if (item === element && item === cancelNotif) {
      cancelNotif.style.display = 'block';
      setTimeout( () => {
        cancelNotif.style.display = 'none'; 
      }, 3000);

    } else if (item === element) {
      element.style.display = 'block';

    } else {
      item.style.display = 'none';
    }
  });
}


// Booking functionallity

reqRide.addEventListener('click', () => {
  showHide(form);
});


form.addEventListener('submit', event => {

  event.preventDefault();
  let src = pickup.value.split(', ');
  let dest = dropoff.value.split(', ');

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "source": {
      "x": `${src[0]}`,
      "y": `${src[1]}`
    },
    "destination": {
      "x": `${dest[0]}`,
      "y": `${dest[1]}`
    }
  });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/book", requestOptions)
    .then(response => response.text())
    .then( (data) => {

      console.log(data);

      /* Formats a receipt for the user so they know id of 
      their car with an else if to display feedback if needed*/

      if (data.length < 10) {
        carID.innerText = `${data}`;
        showHide(bookReceipt);
      } else {
        bookingErr.style.display = 'block';
        setTimeout( () => {
          bookingErr.style.display = 'none';
        }, 5000)
      }
    })
    .catch(error => console.log('error', error));
});


// Reset functionallity

reset.addEventListener('click', () => {

  fetch("http://localhost:8080/api/reset", {
    method: 'DELETE'
  })
  .then(response => response.text())
  .then( (data) => {

    console.log(data);
    showHide(cancelNotif);
  });
});


// Status

status.addEventListener('click', () => {

  fetch("http://localhost:8080/api/status", {
    method: 'GET'
  })
  .then(response => response.text())
  .then( (data) => {

    /* Cycles through each item and returns a formatted li with 
    the necessary information based on if the car is booked */

    let cars = (JSON.parse(data));

    cars.forEach( (item) => {

      console.log(item.id);
      const li = document.querySelector(`#car-${item.id}`);

      if (item.isBooked === true) {
        li.innerHTML = `                
        <div id="carinfo">
          <h3>Car ID:</h3> 
          <span id="id">${item.id}</span>
          <br><br>
          <h3>Position:</h3>
          <span id="pos">lat: ${item.currentPosition.x.toFixed(5)}<br>
          lng: ${item.currentPosition.y.toFixed(5)}</span>
        </div>`;
      } else {
        li.innerHTML = `
        <div id="carinfo">
          <h3>Car ID:</h3> 
          <span id="id">${item.id}</span>
          <br><br>
          <h3>Is Available</h3>
          <span id="pos">For Hire</span>
        </div>`;
      }
      showHide(carstatus);
    });
  });
});
