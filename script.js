  function hideModal() {
    document.getElementsByClassName("modalStart")[0].style.display = "none";
  }

// Should I try to figure out a way to display the letters chosen? I'd need to remove duplicates from the array.

// function uniq(chosenBank) {
//     var seen = {};
//     return chosenBank.filter(function(item) {
//         return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//     });
// }

// My word bank.
  var wordBank = [
    ["dog", "woof"],
    ["jacket", "baby it's cold outside"],
    ["yesterday", "not today or tomorrow but.."],
    ["reading", "bad for your eyes, good for your mind"]
  ]

  // Create an array of letters.
  // Split the word into individual letters.
  // Declare arr variable at global scope (above).

  function splitWord(word) {
    arr = [...word];
    console.log(arr);
    }

// Show rules of the game.
  function showRules() {
    document.getElementsByClassName("rulesDiv")[0].style.display = "block"
  }

  function closeRules() {
    document.getElementsByClassName("rulesDiv")[0].style.display = "none";
  }

  function hideNextRound() {
    document.getElementsByClassName("hideNextRound")[0].style.display = "none";
  }

  function showNextRound() {
    document.getElementsByClassName("hideNextRound")[0].style.display = "inline-block";
  }

  function hideHint() {
    document.getElementsByClassName("hint")[0].style.display = "none";
  }

  function hideGuess() {
    document.getElementsByClassName("__correctGuess")[0].style.display = "none";
  }

  function showGuess() {
    document.getElementsByClassName("__correctGuess")[0].style.display = "block";
  }

  function clearInput () {
    input.value = "";
  }

// This gives me the next word in the game.
  function nextRound() {
    next = wordBank[r][0];
    arr = [...next];
    console.log(arr);
    chosenBank = [];
    document.getElementsByClassName('hint')[0].innerText = "";
    printWord1.innerHTML = "";
    printWord1.innerHTML = "";
    document.getElementsByClassName("hideNextRound")[0].style.display = "inline-block";
    }

  function getHint() {
    document.getElementsByClassName('hint')[0].innerText = wordBank[r][1];
  }
  // set my variables
  var arr;
  var printWord1 = $(".printWord1")[0];
  var incorrectGuess = document.getElementsByClassName("__incorrectGuess")[0];
  var correctGuess = document.getElementsByClassName("__correctGuess")[0];
  var currentIndex = 0;
  var currentSpan;
  var letterToCheck;
  var chosenBank = [];
  var input = document.getElementById('checkLetter');
  var clickIndex = 0;
  var x = false;
  var y = false;
  var z = false;
  var r = 0;
  var s = 0;
  var next;
  // newWord function to create new word and hide it.
  function newWord(arr) {
    currentIndex = 0;
    printWord1.innerHTML = "";
    printWord1.innerHTML = "";
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

  function addLetterChosen() {
    chosenBank.push(input.value);
    console.log(chosenBank);
  }

  function compareLetterArrays() {
      y = false;
      for (var i = 0; i < chosenBank.length; i++) {
      if (input.value == chosenBank[i]) {
        y = true;
      }
    } if (y === true) {
      alert(`${input.value} has already been chosen. Please choose again.`);
    } else if (y === false) {
      console.log("test false");
    }
  }

  // function to compare values in each array and determine if every value in chosenBank array matches at least one value in arr array.
  function winRound() {
    var isSuperset = arr.every(function(val) {
      return chosenBank.indexOf(val) >= 0;
    });
    if (isSuperset === true) {
      alert("You just won the round!");
      r++;
      s++;
      nextRound();
      hideGuess();
      clearInput();
    } if (r == wordBank.length) {
      alert("you just won the game!");
    }
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

  function checkLetter() {
      // __incorrectGuess.innerText = "";
      x = false;
      for (var i = 0; i < arr.length; i++) {
      if (input.value == arr[i]) {
        document.getElementById('letter[' + i + ']').style.display = "inline";
        document.getElementById('dash[' + i + ']').style.display = "none";
        x = true;
      } else if (input.value != arr[i]) {
        console.log("false");
      }
    }
    if (x === true) {
      correctGuess.innerText = `Correct!`
    } else if (x === false) {
      incorrectGuess.innerText = `Incorrect!`
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
