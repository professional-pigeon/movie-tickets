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


// function attachContactListeners() {
//   $('ol#ticketReturn').on('click', 'li', function() {
//     coolTicket.hide();
//   })
//   }

$(document).ready(function() { 
  
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
      ticketString = ticketString.concat(key + ": " + coolTicket[key] + " \n");
      });
    $('#ticketOutput').append("<li>" + ticketString + "</li>")
  })

  let movieKeys = Object.keys(Titanic);
  let movieString = "";
  movieKeys.forEach(function(key) {
  movieString = movieString.concat(key + ": " + Titanic[key] + "\n"); 
  });
  $("ul").prepend("<li>" + movieString + "</li>")
});