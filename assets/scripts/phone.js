function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; 

    if(telefone.value.length == 9)
        telefone.value = telefone.value + '-';

}


var btnplay = document.getElementById('btnplay');
var btnSom = document.getElementById('btnSom');
var videoON = document.querySelector("#player");

function playPause() {
    if(videoON.paused){
        btnplay.style.backgroundImage = `url('../img/botao-de-pausa.png')`;
        videoON.play();
    }else {
        btnplay.style.backgroundImage = `url('../img/btn_play.png')`;
        videoON.pause();
    }
}

function somAudioVideo(){
    
    if(videoON.paused){
        btnSom.style.backgroundImage = `url('../img/alto-falante-on.png')`;
    }else {
        if(videoON.muted==false){
            btnSom.style.backgroundImage = `url('../img/alto-falante-off.png')`;
            videoON.muted = true;
        } else {
            btnSom.style.backgroundImage = `url('../img/alto-falante-on.png')`;
            videoON.muted = false;
        }
    }
    console.log(estadoImagem)
}




