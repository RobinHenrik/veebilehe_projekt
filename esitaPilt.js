function esitaPildid(){
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(kaerahelbepuder.jpeg)";
    }, 1000)
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(oplett.jpeg)";
    }, 2000)
}
esitaPildid();
setInterval(esitaPildid, 3000);
