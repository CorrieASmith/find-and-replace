var findReplace = function (string, firstWord, secondWord) {
  var splitString = string.split(" ");
  var regEx = /[\w+\s?,.!""]/ig;

  for(var i = 0; i < splitString.length; i++) {
    if(splitString[i] === firstWord) {
      splitString[i] = secondWord;
    }
  }

  string = string.replace(regEx);
  string = splitString.join(" ");
  return string;

};

$(document).ready(function() {
  $("form#find-and-replace").submit(function(event) {
    var string = $("input#string").val();
    var firstWord = $("input#firstWord").val();
    var secondWord = $("input#secondWord").val();
    var output = findReplace(string, firstWord, secondWord);

    $(".string").text(string);
    $(".firstWord").text(firstWord);
    $(".secondWord").text(secondWord);
    $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
