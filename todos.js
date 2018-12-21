// Check off specific to dos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (event) {
   $(this).parent().fadeOut(500, function(){
$(this).remove();
   });
    event.stopPropagation();
});

//add event listener to the text input that fires when we hit enter
$("input[type='text']").keypress(function(event){
if(event.which===13){
    //grabbing new todo text from the input
  var todoText=$(this).val();
  $(this).val("");
  //create a new li and add it to the ul
  $("ul").append("<li><span><i class="fas fa trash"></i>"</span>" +todoText+ "</li>")

});