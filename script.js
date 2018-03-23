
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
  // var wordPhrase = $("#wordPhrase")[0];
  var arr;
  var printWord1 = $(".printWord1")[0];
  // var printWord2 = $(".printWord2")[0];
  var currentIndex = 0;
  // var spanIndex = 0;
  var currentSpan;
  var letterToCheck;

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

  // assign the letter in input field to a variable called letterToCheck
  // If input field is blank, shouldn't be able to run "setLetterToCheck()" function.
  function setLetterToCheck() {
  letterToCheck = $("#checkLetter")[0].value;
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

  // hide word in span tags
  function hideWord(arr) {
    $('span').hide();
    }

  // function setSpanIndex() {
  //   spanIndex = 0;
  // }

  // function setCurrentSpanVar() {
  //   currentSpan = $('span')[spanIndex];
  // }

  function checkLetter(letterToCheck) {
      for (var i = 0; i < arr.length; i++) {
      if (letterToCheck == arr[i]) {
          document.getElementById('letter[' + i + ']').style.display = "inline";
          document.getElementById('dash[' + i + ']').style.display = "none";
      } else {
        console.log("No " + letterToCheck);
      }
    }
  }

  // If I do:
  // var currentSpan = document.getElementById("letter[0]");
  // Then currentSpan.innerText;
  // I get "b"
  // Wy can't I get the checkLetter(letterToCheck) function to work? scope thing, I think.




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

// The below is what I used to log the key pressed to the screen. But I don't know if I want to use this. I think I'd rather use the input field.
// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;
//
//   console.log(keyName);
//   document.getElementById("changeHere").innerHTML = "The key you pressed is " + keyName + ".";
// });
