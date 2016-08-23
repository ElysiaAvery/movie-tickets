//BUSINESS

function Ticket(movie, time, discount, price){
  this.movie = movie;
  this.time = time;
  this.discount = discount;
  this.price = 16;
}

Ticket.prototype.ticketPrice = function() {
  if (this.time === "9:00AM" || this.time === "11:15AM" && this.discount === "child"){
    this.price = 0;
  } else if (this.time === "2:00PM" || this.time === "7:00PM" || this.time === "9:15PM" && this.discount === "child"){
    this.price = 0;
  } else if (this.time === "9:00AM" || this.time === "11:15AM" && this.discount === "senior"){
    this.price = 4;
  } else if (this.time === "2:00PM" || this.time === "7:00PM" || this.time === "9:15PM" && this.discount === "senior"){
    this.price = 8;
  } else if (this.time === "9:00AM" || this.time === "11:15AM" && this.discount === "student"){
    this.price = 6;
  } else if (this.time === "2:00PM" || this.time === "7:00PM" || this.time === "9:15PM" && this.discount === "student"){
    this.price = 14;
  }
  return this.price;
}




//FRONT END

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var selectedMovie = $("select#movie-name").val();
    var selectedTime = $("select#time").val();
    var selectedDiscount = $("select#discount").val();

    var newTicket = new Ticket(selectedMovie, selectedTime, selectedDiscount);

    $(".ticket-result").append("<h3>Your Movie is: "+ newTicket.movie +"</h3>");
    $(".ticket-result").append("<h3>Your movie time is: "+ newTicket.time +"</h3>");
    $(".ticket-result").append("<h3>Your Price is: $"+ newTicket.ticketPrice() +"</h3>");
  });

  resetFields();
});
