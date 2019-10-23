// var liter = function() {
//   return gallon * 3.785;
// };
  $(document).ready(function(){

  $("form#formOne").submit(function(event){
    event.preventDefault();
      var gallon = parseFloat($("input#gallons").val());
      var result = gallon * 3.785;
      $("#liters").text(result + " liters");
  });
  $("form#formTwo").submit(function(event){
    event.preventDefault();
      var liter = parseFloat($("input#liters").val());
      var result2 = liter / 3.785;
      $("#gallons2").text(result2 + " gallons");
  });
});


// var quart = function(gallon) {
//   return gallon * 4;
// };
//
//   ("Enter gallons to covert to liters:"));
//
// var result = liter(gallon);
// var result2 = quart(gallon);
// alert(result, result2);
// )};
