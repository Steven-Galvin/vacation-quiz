//leaving commented out code in to ask questions on review

//backend logic

// var lastName = $("input#last-name").val();
//
// var age = $("input#age").val();
//
// var firstName = $("input#first-name").val();

//frontend logic

$(document).ready(function() {
  $("form.quiz").submit(function(event) {
    var answer1 = parseInt($('input:radio[name=question1]:checked').val());

    var answer2 = parseInt($('input:radio[name=question2]:checked').val());

    var answer3 = parseInt($('input:radio[name=question3]:checked').val());

    var answer4 = parseInt($('input:radio[name=question4]:checked').val());

    var answer5 = parseInt($('input:radio[name=question5]:checked').val());

    var userScore = (answer1 + answer2 + answer3 + answer4 + answer5)

    var firstName = $("input#first-name").val();

    $(".first-name").text(firstName);

    // if (firstName === "") {
    //   alert('Please enter your first name')
    // }

    $("#quiz").hide();

    $("#results").show();

    if (userScore <= 9) {
      $("#losangeles").show();

    } else if (userScore <= 12) {
      $("#ketchikan").show();

    } else if (userScore <= 15) {
      $("#tokyo").show();

    }

    event.preventDefault();
  });
});
