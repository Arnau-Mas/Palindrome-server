

let palabra1="patatar";


function comprobarPalindromo(palabra){
    let palabra2="";
    for(i=palabra.length-1; i>=0; i--){
        palabra2+=palabra[i];
    };
    
    console.log("La palabra al revés es: "+palabra2);
    
    return (palabra==palabra2);
};

console.log(comprobarPalindromo(palabra1));