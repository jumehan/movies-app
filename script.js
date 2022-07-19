"use strict";

/**
 * Adds movie name and rating input and displays it in the HTML
 * List elements (movie +rating) can be deleted with a Delete button
 */

$("#submit").on("click", function (e) {
  e.preventDefault();

  const $movieName = $(".title").val();
  const $movieRating = $(".rating").val();

  // if (!checkRating($movieRating)) {
  //   alert("Rating should be between 0 and 10");
  // }

  // if (!checkTitle($movieName)) {
  //   alert("Please enter a valid movie title of over 2 characters");
  // }

  $("ul").append($("<li>")); //add new list element

  const deleteButton = $("<button/>").text("delete");

  $("li:last-child") //add movie name and rating to list created
    .text(`Title: ${$movieName} Rating: ${$movieRating}`)
    .append(deleteButton); //adds delete button

  $("ul").on("click", "li", deleteList); //deletes content on click

});

/** Deletes the entire list (movie + rating) the delete button targets */
function deleteList(e) {
  $(e.target).parent().remove();
}

// function checkRating(rating) {
//   if (Number(rating) < 0 || Number(rating) > 10) {
//     return false;
//   }
// }

// function checkTitle(title) {
//   if (title.length < 2) {
//     return false;
//   }
// }