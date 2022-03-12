let num1 = parseInt(prompt("ingresa un Número")); //Número ingresado por el usuario

multi = x =>{ //Función arrow para Multiplicar
    
    for(let i = 1; i <= x; i++){
        
        if( x >= 20){
            alert("Numero fuera del rango!")
            break;
        }
        console.log(`${i} X ${x} = ${i * x}`);
    }
}

factorial = y =>{ //Función arrow para Factorial
    
    for(let i = 1; i <= y; i++){
        var res = 1;
        for(let j = 1; j <= i; j++){
            res = res * j;
        }

        if( y >= 20){
            alert("Numero fuera del rango!")
            break;
        }
        
      console.log(`Factorial de ${i} es ${res}`);
        
    }
}



multi(num1);
factorial(num1);