function encrypt() {

    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/e/igm,"enter");
    var encryptedText = encryptedText.replace(/o/igm,"ober");
    var encryptedText = encryptedText.replace(/i/igm,"imes");
    var encryptedText = encryptedText.replace(/a/igm,"ai");
    var encryptedText = encryptedText.replace(/u/igm,"ufat");

    document.getElementById("output-text").innerHTML = encryptedText;


}
function decrypt() {

    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/enter/igm,"e");
    var encryptedText = encryptedText.replace(/ober/igm,"o");
    var encryptedText = encryptedText.replace(/imes/igm,"i");
    var encryptedText = encryptedText.replace(/ai/igm,"a");
    var encryptedText = encryptedText.replace(/ufat/igm,"u");

    document.getElementById("output-text").innerHTML = encryptedText;

}
function copy() {

    var copiedtext = document.getElementById("output-text");
    copiedtext.select();
    navigator.clipboard.writeText(copiedtext.value);

}