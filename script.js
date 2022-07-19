"use strict";

// add event listener for submit button
// get values of each input
// append to DOM
// add a delete button to delete line items

$("#submit").on("click", function (e) {
  e.preventDefault();

  const $movieName = $(".title").val();
  const $movieRating = $(".rating").val();
  const $listID = $("ul").length;

  $("ul").append($("<li>"));
  $("li").attr("id", $listID);
});
