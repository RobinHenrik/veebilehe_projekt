function esitaPildid(){
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(kaerahelbepuder.webp)";
    }, 0)
    setTimeout(function() {
    document.getElementById("hommik").style.backgroundImage="url(harg.jpg)";
    }, 5000)
}
esitaPildid();
setInterval(esitaPildid, 10000);
