const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 12;
let copied = document.getElementById('demo2');


function getRandom(){
    let randomCharacters = Math.floor(Math.random() * characters.length);
    return characters[randomCharacters];
}
function randomPassword(){
    let generatedPassword = "";
    for(let i = 0;i < passwordLength;i++){
        generatedPassword += getRandom();
    }
    return generatedPassword;
}

function generatePsw(){
    let allPasswords = randomPassword();
    let genPassword1 = document.getElementById('genPassword1');
    genPassword1.value = allPasswords;
}
function generatePsw2(){
    let allPasswords = randomPassword();
    let genPassword2 = document.getElementById('genPassword2');
    genPassword2.value = allPasswords;
}

//COPYAND PASTE
function copyPastePassword1() {
    let copyText = document.getElementById("genPassword1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    copiedText();
}
function copyPastePassword2() {
    let copyText = document.getElementById("genPassword2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    copiedText();
}
function copiedText(){
    copied.style.visibility = 'visible';
    copied.innerHTML = "Copied!";
    setTimeout(() => {
        copied.style.visibility = 'hidden'
        copied.innerHTML = '';
    }, 1000);
}






