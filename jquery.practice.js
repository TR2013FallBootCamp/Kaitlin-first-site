// $(document).ready(function(){
//   $(".navigation").on("mouseenter", function() {
//     $(this).css({"color" : "#252b30", "font-weight": "bold"});
//   });
// });

$(document).ready(function() {
  $(".navigation li").on("click", "li" function() {
    $(this).css({"background-color": "#252b30", "font-weight": "bold"});
    $(this).animate({'top': '-10px'});
  });
});
