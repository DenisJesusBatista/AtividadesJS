function localizarString(){
    var string = document.getElementById('string');
    var substring = document.getElementById('substring');

    var posicao = string.indexOf(substring);
    var resultado;

    if(posicao === -1){
        resultado = 'Elemento não encontrado no texto';        
    } else{
        resultado = 'A posição do elemento é: ' + posicao;
    }

    document.getElementById('resultado').innerHTML = resultado;
}