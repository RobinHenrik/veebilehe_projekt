function esitaPildid(){
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(kaerahelbepuder.jpeg)";
    }, 0)
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(oplett.jpeg)";
    }, 5000)
}
esitaPildid();
setInterval(esitaPildid, 10000);
