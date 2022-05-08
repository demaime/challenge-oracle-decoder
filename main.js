const enterTextInput = document.getElementById("enter_text");
const outputText = document.getElementById("output_text");
const encryptBtn = document.getElementById("btn_encrypt");
const decryptBtn = document.getElementById("btn_decrypt");

function encrypt() {
  const enteredText = (enterTextInput.value).split("")
  let result = "";

  for (const character of enteredText) {
    if (character === "e") {
      result += "enter"
    }
    else if (character === "i") {
      result += "imes"
    }
    else if (character === "a") {
      result += "ai"
    }
    else if (character === "o") {
      result += "ober"
    }  
    else if (character === "u") {
      result += "ufat"
    }
    else  {
      result += character
    }
    outputText.value = result 
  }
}

function decrypt() {
  const textToDecrypt = (outputText.value).split("")
  let result = "";

  let i = 0;
  while ( i < textToDecrypt.length) {
    if (textToDecrypt[i] === "e" && textToDecrypt[i + 4] === "r") {
      result += "e"
      i += 5;
    }
    else if (textToDecrypt[i] === "i" && textToDecrypt[i + 3] === "s") {
      result += "i"
      i += 4;
    }
    else if (textToDecrypt[i] === "a" && textToDecrypt[i + 1] === "i") {
      result += "a"
      i += 2;
    }
    else if (textToDecrypt[i] === "o" && textToDecrypt[i + 3] === "r") {
      result += "o"
      i += 4
    }  
    else if (textToDecrypt[i] === "u" && textToDecrypt[i + 3] === "t") {
      result += "u"
      i += 4;
    }
    else  {
      result += textToDecrypt[i]
      i++;
   }
    console.log(result)
    enterTextInput.value = result;
  }
}

encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;