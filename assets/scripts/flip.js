

function myfunction() {
    let containerFlip = document.getElementById('flip-select-inner')
    var contador =0;

    setInterval(function() {
        contador ++
                
        if(contador > 2){
            contador = 0;
        }

        if(contador == 0) {
            containerFlip.innerHTML= 'Por favor, selecione o Idioma';
        } else if(contador == 1) {
            containerFlip.innerHTML = 'Please select Language';
        } else if(contador == 2){
            containerFlip.innerHTML = 'Bitte Sprache auswählen';
        }
        
    }, 4000);

    let imgTour = document.getElementById('figura-footer')
    let contaImg = 0;
    let arrayFoto = ['img-codigo-fundo', 'img-celular-fundo', 'img-dados-fundo']
    imgTour.style.backgroundImage= `linear-gradient(to bottom, rgba(34, 33, 33, 0.9),rgba(255, 255, 255, 0.041)), url('./assets/img/img-codigo-fundo.jpg')`;
    setInterval(function(){
        contaImg++
        
        let mudaFoto = 0;
        if(contaImg == 3) {
            contaImg = 0;
        }
        mudaFoto = arrayFoto[contaImg];
        imgTour.style.backgroundImage = `linear-gradient(to bottom, rgba(34, 33, 33, 0.9),rgba(255, 255, 255, 0.041)), url('./assets/img/${mudaFoto}.jpg')`;
        imgTour.style.transition= '4s';
        console.log(contaImg)
    }, 5000)
}
