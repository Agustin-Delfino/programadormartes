var numeros = [10, 20, 80, 30, 40];

let max=0;

for(i=1; i< numeros.length; i++) {
    if(max < numeros[i]){
        max=numeros[i];
    }
}

document.write('el número mayor es ' + max)
console.log(max);
