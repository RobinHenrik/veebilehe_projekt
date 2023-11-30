function esitaPildid(){
    setTimeout(function() {
    document.getElementById("isa2pilt").style.backgroundImage="url(pastabolognese.jpg)";
    }, 2500)
    setTimeout(function() {
    document.getElementById("isa2pilt").style.backgroundImage="url(kananuudli.jpg)";
    }, 7500)
    setTimeout(function() {
        document.getElementById("isa2pilt").style.backgroundImage="url(kotletid.jpg)";
    }, 12500)
    setTimeout(function() {
        document.getElementById("isa2pilt").style.backgroundImage="url(hakklihakaste.jpg)";
    }, 17500)
    setTimeout(function() {
        document.getElementById("isa2pilt").style.backgroundImage="url(koduJuust.jpeg)";
    }, 22500)
}
esitaPildid();
setInterval(esitaPildid, 25000);
