// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
for (x=0; x<101; x++){
       
    if (x%3==0 && x%5==0) {
        console.log('GEEKSHUBS');
    }
    else if (x%5==0) {
        console.log('HUBS');
    }
    else if (x%3==0){
        console.log('GEEKS');
    }
    else {
        console.log(x);
    }
}