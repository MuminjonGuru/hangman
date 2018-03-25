
class Game {
  constructor() {

  }
}
// My word bank.

  var wordBank = [
    ["bumblebee", "buzz buzz"],
    ["jacket", "baby it's cold outside"],
    ["yesterday", "not today but"]
  ]

  // Create an array of letters.
  // Split the word into individual letters.
  // Declare arr variable at global scope (above).

  function splitWord(word) {
    arr = [...word];
    console.log(arr);
    }

  function getHint(hint) {
    document.getElementsByClassName('hint')[0].innerText = hint;
  }
  // set my variables
  var arr;
  var printWord1 = $(".printWord1")[0];
  var __incorrectGuess = document.getElementsByClassName("__incorrectGuess")[0];
  var correctGuess = document.getElementsByClassName("__correctGuess")[0];
  var currentIndex = 0;
  var currentSpan;
  var letterToCheck;
  var chosenBank = [];
  var input = document.getElementById('checkLetter');
  var clickIndex = 0;

  // newWord function to create new word and hide it.
  function newWord(arr) {
    for (var i = 0; i < arr.length; i++) {
      printWord1.innerHTML += ("<span id='letter[" + currentIndex + "]'>" + arr[i] + "</span>");
      printWord1.innerHTML += ("<span id='dash[" + currentIndex + "]'>" + "-" + "</span>");
      currentIndex++;
      // $("span").hide();
      document.getElementById('letter[' + i + ']').style.display = "none"
    }
  }

  // assign the letter in input field to a variable called letterToCheck. This fires on event listener for input element.
  // If input field is blank, shouldn't be able to run "setLetterToCheck()" function.
  function setLetterToCheck() {
  letterToCheck = $("#checkLetter")[0].value;
}

  // To add the letter chosen to a new array to avoid choosing duplicate letters if user forgets what was chosen already.

  // function addLetterChosen() {
  //   chosenBank.push(input.value);
  //   console.log(chosenBank);
  // }

  // function addLetterChosen() {
  //   chosenBank.forEach(function() {
  //     if (chosenBank == input.value) {
  //       console.log(`do nothing`);
  //     } else {
  //       chosenBank.push(input.value);
  //       console.log(chosenBank);
  //     }
  //   })
  // }

  function addLetterChosen() {
    for (var i = -1; i < chosenBank.length; i++) {
      if (clickIndex == 0 && input.value != chosenBank[i]) {
        chosenBank.push(input.value);
        console.log(chosenBank);
        clickIndex++;
        break;
      } else if (clickIndex == 1 && input.value == chosenBank[i]) {
        console.log(`do nothing`);
        break;
      }
    }

  }


  //     if (input.value == chosenBank[i]) {
  //       console.log(`do nothing`);
  //       break;
  //     } else if (input.value != chosenBank[i]) {
  //       chosenBank.push(input.value);
  //       console.log(chosenBank);
  //     }
  //   }
  // }



    // if the letterToCheck is not in arr, don't run. Else run?


// The below is only working the first time.
  function compareLetterArrays() {
      chosenBank.forEach(function() {
      if (input.value == chosenBank) {
        alert(`${input.value} has already been chosen. Please choose again.`);
    } else if (clickIndex = 0){
      // creates error: chosenBank.push is not a function
        chosenBank.push(input.value);

        console.log(chosenBank);
    }
  });
}


  // test to see if letterToCheck has been set. Prints to console.
  function showLetterToCheck() {
    console.log(letterToCheck);
  }

  // Show word in span tags
  function showWord(arr) {
    // $('span').show();
      document.getElementsByClassName('printWord1')[0].innerText = arr.join("");
      }

  // hide word in span tags - currently not working.
  function hideWord(arr) {
    $('span').hide();
    }

  // function setSpanIndex() {
  //   spanIndex = 0;
  // }

  // function setCurrentSpanVar() {
  //   currentSpan = $('span')[spanIndex];
  // }

  function checkLetter() {
      // __incorrectGuess.innerText = "";
      for (var i = 0; i < arr.length; i++) {
      if (input.value == arr[i]) {
        document.getElementById('letter[' + i + ']').style.display = "inline";
        document.getElementById('dash[' + i + ']').style.display = "none";
        correctGuess.innerText = `Correct!`
      } else {
        // __incorrectGuess.innerText = `Incorrect!`
      }
    }
  }

  // This will be for getting the next word to appear when you "level up". No button for this yet.
  function nextWord() {
      if (currentIndex < wordBank.length) {
      // wordPhrase.innerText = wordBank[currentIndex];
      currentIndex++;
    } else if (currentIndex == wordBank.length) {
        currentIndex = 0;
        // wordPhrase.innerText = wordBank[currentIndex];

      }
  }

  // Then I want to hide the word.

  function addWord () {
    let string = $("#addWordField")[0].value;
    wordBank.push(string);
    console.log(wordBank);
  }

// massage to make lower case? only take letters and spaces?
