const enterTextInput = document.getElementById("enter_text");
const outputText = document.getElementById("output_text");
const encryptBtn = document.getElementById("btn_encrypt");
const decryptBtn = document.getElementById("btn_decrypt");

function encrypt(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }
  
  function codificar(s) {
    var r = '';
    for (const c of s) {
        r += Cod(c);
    }
    return r;
  }

encryptBtn.onclick = encrypt;
// decryptBtn.onclick = decrypt;