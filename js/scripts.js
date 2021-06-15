// Business Logic

function Movie (name, time1, time2, time3, time4) {
  this.name = name
  this.time1 = time1
  this.time2 = time2
  this.time3 = time3
  this.time4 = time4
}

function Ticket (movieInput, timeInput, ageInput, price) {
  this.name = movieInput
  this.time = timeInput
  this.age = ageInput
  this.price = price
}

let Titanic = new Movie("Titanic", "8:15", "12:00", "2:30", "6:00")

//User-Interface Logic

$(document).ready(function() {

  let movieKeys = Object.keys(Titanic);
  let movieString = "";
  movieKeys.forEach(function(key) {
  movieString = movieString.concat(key + ": " + Titanic[key] + "\n"); 
  });
  $("ul").prepend("<li>" + movieString + "</li>")

});

let movieKeys = Object.keys(Titanic);
let movieString = "";
movieKeys.forEach(function(key) {
  movieString = movieString.concat(key + ": " + Titanic[key] + "\n"); 
});