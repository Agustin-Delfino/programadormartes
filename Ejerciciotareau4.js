var num1

num1 = prompt('Ingrese la distancia (en metros) a la que se encuentra de la ciudad de Rosario :', '');

num1 = (num1)

if (num1 < 1000) {
    document.write('usted debe recorrer esta distancia a pie');
} else {
    if (num1 < 10000) {
        document.write('usted debe recorrer esta distancia en bicicleta')
    }
    else {
        if (num1 < 30000) {
            document.write('usted debe recorrer esta distancia en colectivo')
        }
        else{
            if (num1<100000) {
                document.write('usted tiene que recorrer esta distancia en auto')
            }
            else{
                document.write('usted debe recorrer esta distancia en avión')
            }
        }
    }
}


