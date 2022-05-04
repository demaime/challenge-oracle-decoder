function encrypt () {
    const enteredText = enterTextInput.value;
    
    const regexA = /a/g;
    const regexE = /e/g;
    const regexI = /i/g;
    const regexO = /o/g;
    const regexU = /u/g;

    const encryptedResult = enteredText.replace(regexA, "ai").replace(regexE, "enter").replace(regexI, "imes").replace(regexO, "ober").replace(regexU, "ufat");
    //funciona pero reemplaza las vocales de la anterior solucion (por ejemplo, reemplaza la i de "ai" por "imes")
    outputText.value = encryptedResult;
}

function decrypt () {
    const encryptedText = outputText.value;
    
    const regexA = /ai/g;
    const regexE = /enter/g;
    const regexI = /imes/g;
    const regexO = /ober/g;
    const regexU = /ufat/g;

    const decryptedResult = encryptedText.replace(regexA, "a").replace(regexE, "e").replace(regexI, "i").replace(regexO, "o").replace(regexU, "u");
    
    enterTextInput.value = decryptedResult;
}

encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;