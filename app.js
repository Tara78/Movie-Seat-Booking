const container= document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(.occupied)');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movieSelect= document.getElementById('movie');

// adding + to trun to the number insetad of wrap to the ParsInt function
let ticketPrice= +movieSelect.value;

// Update Total and Count tickets)
function updateSelectedCount(){
const selectedSeats= document.querySelectorAll('.row .seat.selected');
// Length of selected seats
const selectedSeatsCount= selectedSeats.length;

count.innerText= selectedSeatsCount;
total.innerText= selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e =>{
  ticketPrice= +e.target.value;
  updateSelectedCount()

})


// EventListener for seat select
container.addEventListener('click', (e) =>{

//  If statment show just open sats & if doesNot have class of Occupied run the function
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
  {
    // Toggle the selected seats 
  e.target.classList.toggle('selected')
  // console.log(e.target)
  updateSelectedCount()

  }

})

