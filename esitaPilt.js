function esitaPildid(){
    setTimeout(function() {
    document.getElementById("isapilt").style.backgroundImage="url(kaerahelbepuder.webp)";
    }, 0)
    setTimeout(function() {
    document.getElementById("isapilt").style.backgroundImage="url(munaPuder.webp)";
    }, 5000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(pannkook.jpg)";
    }, 10000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(harg.jpg)";
    }, 15000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(koduJuust.jpeg)";
    }, 20000)
}
esitaPildid();
setInterval(esitaPildid, 25000);
