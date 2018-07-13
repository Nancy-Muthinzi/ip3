$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#results").append("<li>"+number+"</li>");
  });
});

var pingPong = (function(number){
  // if ((number % 3 === 0) && (number % 5 === 0)) {
    return "pingpong";
}
  else if ((number % 3 === 0)){
    return "ping";
}
  else if ((number % 5 === 0)){
    return "pong";
  }
  else {
    return "index";
  }
});
