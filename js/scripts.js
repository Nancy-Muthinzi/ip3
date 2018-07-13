// user interface logic
$(document).ready(function(){
  $("form").click(function(event){
    event.preventDefault();
    var number =$("#number").val();
    var result = parseInt(number);
    user(result);
    my.forEach(function(result){
    $("#outcome").append("<li>" + result + "</li>");
  });
});
});

// business logic
var my=[];
  function user(result){
    for(index=1;index<=result;index++){

  if (index % 15 === 0) {
    my.push("pingpong");
}
  else if (index % 3 === 0){
    my.push("ping");
}
  else if (index % 5 === 0){
    my.push("pong");
  }
  else {
    my.push(index);
  }
}
}
