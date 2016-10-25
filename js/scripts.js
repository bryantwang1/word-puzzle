var input = "Dude, I have no clue what I should enter as a test string";
var output = "";

function replaceVowels(sentence){
	for (var i=0;i<sentence.length;i++) {
  	var test=sentence.charAt(i).toLowerCase();
  	if (test === "a" || test === "e" || test === "i" || test === "o" || test === "u") {
      output += "-"
    } else {
      output += sentence.charAt(i);
    };
  };
  return output;
};

$(function() {
  alert(replaceVowels(input));
});
