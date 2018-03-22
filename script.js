
// My word bank.

  var wordBank = [
    "bumblebee",
    "jacket",
    "yesterday"
  ]

  // Now for the array.
  // First split the word into individual letters.
  // Declare arr variable at global scope (above).

    function splitWord(word) {
      arr = [...word];
      console.log(arr);
      }


  var wordPhrase = $("#wordPhrase")[0];
  var arr;
  var printWord = $(".printWord")[0];
  var currentIndex = 0;

  function newWord(arr) {
    // wordPhrase.innerText = arr;
    for (var i = 0; i < arr.length; i++) {
      printWord.innerHTML += ("<span id='letter" + currentIndex + "'>" + arr[i] + "</span>");
      currentIndex++;
      $("span").hide();
    }
  }

  var letterToCheck;
  // If input field is blank, shouldn't be able to run "setLetterToCheck()" function.
  function setLetterToCheck() {
  letterToCheck = $("#checkLetter")[0].value;
}

// These are unnecessary
  var firstLetter = $("#first__letter")[0];
  var secondLetter = $("#second__letter")[0];
  var thirdLetter = $("#third__letter")[0];
  var fourthLetter = $("#fourth__letter")[0];
  var fifthLetter = $("#fifth__letter")[0];
  var sixthLetter = $("#sixth__letter")[0];
  var seventhLetter = $("#seventh__letter")[0];
  var eighthLetter = $("#eighth__letter")[0];
  var ninthLetter = $("#ninth__letter")[0];


  function checkLetter(letterToCheck) {
    console.log(letterToCheck);
    arr.forEach(function(letter) {
    if (letterToCheck == letter) {
      console.log("Yay!");

    }
  });
}


  // This will be for getting the next word to appear when you "level up". No button for this yet.
  function nextWord() {
      if (currentIndex < wordBank.length) {
      wordPhrase.innerText = wordBank[currentIndex];
      currentIndex++;
    } else if (currentIndex == wordBank.length) {
        currentIndex = 0;
        wordPhrase.innerText = wordBank[currentIndex];

      }
  }

  // Then I want to hide the word.

  function addWord () {
    let string = $("#addWordField")[0].value;
    wordBank.push(string);
    console.log(wordBank);
  }

// massage to make lower case? only take letters and spaces?

// The below is what I used to log the key pressed to the screen. But I don't know if I want to use this. I think I'd rather use the input field.
// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;
//
//   console.log(keyName);
//   document.getElementById("changeHere").innerHTML = "The key you pressed is " + keyName + ".";
// });
