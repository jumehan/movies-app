"use strict";

// add event listener for submit button
// get values of each input
// append to DOM
// add a delete button to delete line items

$("#submit").on("click", function (e) {
  e.preventDefault();

  const $movieName = $(".title").val();
  const $movieRating = $(".rating").val();

  const deleteButton = $("<button/>")
                          .text("delete")
                          .on("click", deleteList)

  $("ul").append($("<li>"));

  $("li:last-child")
    .text(`Title: ${$movieName} Rating: ${$movieRating}`)
    .append(deleteButton);

});

function deleteList() {
  $("li").remove();
}