// Business Logic

function Movie (name, time1, time2, time3, time4) {
  this.name = name
  this.time1 = time1
  this.time2 = time2
  this.time3 = time3
  this.time4 = time4
}

function Ticket (movieInput, timeInput, ageInput, price) {
  this.Name = movieInput
  this.Time = timeInput
  this.Age = ageInput
  this.Price = price
}

let Titanic = new Movie("Titanic", "8:15", "12:00", "2:30", "6:00")
let quietPlace = new Movie("A Quiet Place 2", "8:15", "12:00", "2:30", "6:00")
let fastFurious = new Movie("Fast and Furious 9", "8:15", "12:30", "3:00", "6:30")

//User-Interface Logic
function attachMovieListeners(movieName) {
  $("body").on('click', 'h5', function() {
    let movieKeys = Object.keys(movieName);
    let movieString = "";
    movieKeys.forEach(function(key) {
    movieString = movieString.concat(movieName[key] + "\n"); 
    });
    $("h6").text(movieString)
  });
};


function attachContactListeners() {
  $('ol#ticketReturn').on('click', 'li', function() { 
      alert('But have you seen Titanic?')
  })
}

// function giveMeThePrice {
//   if (age >= 65) {
//     newTicketPrice = ticketPrice - 3;
//   } else if (time < 4) {
//     newTicketPrice = ticketPrice - 2;
//   } else {
//     newTicketPrice = 8;
//   }
// }

// function clickTheTime() {
//   $("body").on('click', '8:15', function() {
//     let time = 8
//     let movieName = "Titanic"
//     let age = 60
//     giveMeThePrice
//   });
// };

$(document).ready(function() { 
  attachContactListeners();
  attachMovieListeners(Titanic)
  $("button#button1").click(function() {
    const ticketPrice = 8;
    let newTicketPrice = 0;
    let movieName = $("#movieInput").val();
    let time = $("#timeInput").val();
    let age = $("#ageInput").val();
      if (age >= 65) {
        newTicketPrice = ticketPrice - 3;
      } else if (time < 4) {
        newTicketPrice = ticketPrice - 2;
      } else {
        newTicketPrice = 8;
      }
      
    let coolTicket = new Ticket (movieName, time, age, newTicketPrice)
    let ticketKeys = Object.keys(coolTicket);
    let ticketString = "";
    
    ticketKeys.forEach(function(key){
      ticketString = ticketString.concat(key + ": " + coolTicket[key] + "<br>");
      });
    $('#ticketOutput').append("<li>" + ticketString + "</li>")
  })

  let movieKeys = Object.keys(Titanic);
  let movieString = "";
  movieKeys.forEach(function(key) {
  movieString = movieString.concat(": " + Titanic[key] + "<br>"); 
  
  });
});




function clickTheTime(movieName) {
  $("body").on('click', '8:15', function() {
    let time = 8
    let movie = "Titanic"
    let age = 60
  });
};