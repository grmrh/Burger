$(function () {

$(".create-burger-form").on('submit', function (e) {
  e.preventDefault();

  var newBurger = {
    burger_name: $("#burger_name").val().trim(),
    devoured: 0
  }

  $.ajax({
    url: "/api/burgers",
    type: "POST",
    data: newBurger
  }).then(() => {
    console.log("created new burger");
    location.reload();
  });
});

$(".devour").on("click", function (e) {
  e.preventDefault();

  var id = $(this).data("id");
  var burger_name = $(this).attr("data-burgerName");
  console.log('button click ', id, burger_name);
  var devoured_indeed = {
    burger_name: burger_name,
    devoured: 1
  }

  $.ajax('/api/burgers/' + id, {
    type: "PUT",
    data: devoured_indeed
  }).then(() => location.reload());
})

});
