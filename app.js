const container= document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(.occupied)');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movieSelect= document.getElementById('movie');

populateUI()

// add (+)to Switch to the number insetad of wrapping into ParsInt function. 
// Let because price are changing We can Not have const
let ticketPrice= +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('moviePrice', moviePrice)
}

// Update Total and Count tickets)
function updateSelectedCount(){
const selectedSeats= document.querySelectorAll('.row .seat.selected');

//1- Copy the selected seats to arr (Using Spread operator or Spread Syntax...)-Convert the nodList to array
// 2- Map through array
//3- Return a new array index

/* Clean Code */
// const seatsIndex= [...selectedSeats].map(seat=>[...seats].indexOf(seat));

const seatsIndex= [...selectedSeats].map(function(seat){
  return[...seats].indexOf(seat)
})

// Wrap in JSON.stringify because SeatsIndex is an array
localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
localStorage.setItem
const selectedSeatsCount= selectedSeats.length;

count.innerText= selectedSeatsCount;
total.innerText= selectedSeatsCount * ticketPrice;
}


// Get Dta from LS and Populate populateUI
function populateUI(){
  // Wrap in JSON.pars to have a number in array.(JSON.pars is opposite of JSON.strigify)
  const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats'));

  // If any seat is in selected seats and not empty array neither
  if (selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) =>{
      if( selectedSeats.indexOf(index) >-1){
        seat.classList.add('selected');
      }
    });
  }
  //Implementing the Total price and nummber of the seats 
  const selectedMovieIndex= localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null){ 
    movieSelect.selectedIndex= selectedMovieIndex;
  }

}

/* Movie select event **/ 
// +sign change the varible to Number
movieSelect.addEventListener('change', e =>{
  ticketPrice= +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value)
  updateSelectedCount()

})


/* EventListener for seat select ***/
container.addEventListener('click', (e) =>{

//  If  the seat which we choose has class of seat and NOT class of Occupied, if so add the class of selected  and make seat to the blue color and then run updateCount Function 
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
  {
    // Toggle the selected seats 
  e.target.classList.toggle('selected')
  // console.log(e.target)
  updateSelectedCount()

  }

});

// Initial Count and Total seat to keep our reservation on even after reload 
updateSelectedCount()

