// it's business time logic
var leapYear = function(year) {
  if ((year % 400 === 0) || (year % 100 !== 0) && (year % 4 === 0)) {
    return true;
  }
  else {
    return false;
  }
};


// user interface logic
$(document).ready(function()  {

  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if(!result) {               //(!result) is the same as (result === false)
      $(".not").text("not");

    }
    else {
      $(".not").text("");
    }

    $("#result").show();

  });

});
