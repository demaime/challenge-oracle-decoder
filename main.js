//agregar limitacion cuando se intentan enviar mayusculas o acentos 


const enterTextInput = document.getElementById("enter_text");
const outputText = document.getElementById("output_text");
const encryptBtn = document.getElementById("btn_encrypt");
const decryptBtn = document.getElementById("btn_decrypt");
const copyBtn = document.getElementById("btn_copy")
const modalCopy = document.getElementById("modal_copy")

enterTextInput.focus();

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
    copyBtn.classList.remove("hide");
    copyBtn.classList.add("show")
  }
  outputText.scroll()  
  }

function decrypt() {
  enterTextInput.value = "";
  enterTextInput.placeholder = "Desencriptando...";
  setTimeout(() => {
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
  enterTextInput.value = result;
  }
  },500)

}

function copyToClipboard () {
  const value = outputText.value
  navigator.clipboard.writeText(value)
  modalCopy.classList.remove("hide");
  setTimeout(() => {modalCopy.classList.add("hide")}, 2000)
}
 
encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;
copyBtn.onclick = copyToClipboard;

