function calcular (){

    var n1 = document.getElementById ('n1').value
    var n2 = document.getElementById ('n2').value
    var n3 = document.getElementById ('n3').value

    var media  =(Number(n1)+ Number(n2)+ Number(n3)) /3

    if (media >=7){
        
        document.getElementById('resultado').innerHTML = " Aprovado 😄 com media  : " + media.toFixed(2) ;
    }else {
        document.getElementById('resultado').innerHTML = " Reprovado 😢 com media  : " + media.toFixed(2) ;
    }
    

    
}