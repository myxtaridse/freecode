const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultInput = document.getElementById('result');


const checkPalindrome = (input) => {
    if (input === '') {
        alert('Please input a value');
        return;
    } 
    const lowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    // reverse - порядок элемента в обратную
    // join - для объединения в строку
    let resultDiv = `<strong>${input}</strong> ${lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'} a palindrome.`;
    resultInput.innerHTML = resultDiv;
}

checkButton.addEventListener('click', () => {
    checkPalindrome(textInput.value);
    textInput.value = '';
});

window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrome(textInput.value);
        textInput.value = '';
    }
});

function closeAlertBox(){
    alertBox = document.getElementById("alertBox");
    alertClose = document.getElementById("alertClose");
    alertBox.style.visibility = "hidden";
    alertClose.style.visibility = "hidden";
}
window.alert = function(msg){
    var id = "alertBox", alertBox, closeId = "alertClose", alertClose;
    alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.id = id;
    alertBox.innerHTML = msg;
    alertClose = document.createElement("div");
    alertClose.id = closeId;
    alertClose.innerHTML = "x";
    alertBox.appendChild(alertClose);
    alertBox.style.visibility = "visible";
    alertClose.style.visibility = "visible";
    alertClose.onclick = closeAlertBox;
};

/*
const checkForPalindrome = input => {
  const originalInput = input; // Store for later output*/

  /*if (input === '') {
    alert('Please input a value');
    return;
  }*/

  /*// Remove the previous result
  resultDiv.replaceChildren();*/

  /*const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;*/

  /*const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};*/

/*checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});*/
/*
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
*/