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
