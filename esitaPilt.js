//Looja Martin Toomiste

//skripti eesmärk on näidata pealehel teatud intervalliga erinevaid roogi, mille valmistusjuhend sisaldub alamlehtedel.


function esitaPildid(){   //funktsiooni algus
    setTimeout(function() {//ajastamis funktsioon
    document.getElementById("isapilt").style.backgroundImage="url(kaerahelbepuder.webp)"; //leiab elemendi id-ga "isapilt" ja muudab selle tausta
    }, 0)
    setTimeout(function() {
    document.getElementById("isapilt").style.backgroundImage="url(munapuder.webp)"; //sama nagu eelmine aga vahetab tausta alles 5s möödumisel
    }, 5000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(pannkook.jpg)";
    }, 10000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(harg.jpg)";
    }, 15000)
    setTimeout(function() {
        document.getElementById("isapilt").style.backgroundImage="url(kodujuust.jpeg)";
    }, 20000)
}
esitaPildid(); //funktsiooni kasutamine
setInterval(esitaPildid, 25000); //funktsiooni tsüklisse määramine
