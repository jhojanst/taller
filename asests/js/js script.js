let continuar = true;

while(continuar){
    opcion = Number(prompt('Menú de Ejercicios:\n' +
'1. Contador de Números Pares e Impares\n' +
'2. Calculadora de Factorial\n' +
'3. Validación de Contraseña\n' +
'4. Generador de Tablas de Multiplicar\n' +
'5. Adivinar el Número\n' +
'6. Suma de Números Primos\n' +
'7. Secuencia de Fibonacci\n' +
'8. Convertidor de Temperatura\n' +
'9. Calculadora de Potencia\n' +
'10. Juego de Piedra, Papel o Tijeras\n' +
'0. Cerrar o Finalizar'));


let respuesta = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
    if (respuesta === "si") {
        switch (opcion) {
            case 1:
                console.log("Contador de Números Pares e Impares");
                
                    console.log("Ejecutando el ejercicio...");
                    const numero = parseInt(prompt("Ingrese un número:"));
                    if (!isNaN(numero) && numero >= 1) {
                        let contadorPares = 0;
                        let contadorImpares = 0;
                        for (let i = 1; i <= numero; i++) {
                            if (i % 2 === 0) {
                                contadorPares++;
                            } else {
                                contadorImpares++;
                            }
                        }
                        console.log(`En el rango de 1 a ${numero}:`);
                        console.log(`Números pares: ${contadorPares}`);
                        console.log(`Números impares: ${contadorImpares}`);
                    } else {
                        console.log("Por favor, ingrese un número válido mayor o igual a 1.");
                    }
                break;
            
            case 2:
                console.log("Calculadora de Factorial");
                let respuesta1 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta1 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const numeros = parseInt(prompt("Ingrese un número para calcular su factorial:"));
                    if (!isNaN(numeros) && numeros >= 0) {
                        let factorial = 1;
                        for (let i = 1; i <= numeros; i++) {
                            factorial *= i;
                        }
                        console.log(`El factorial de ${numeros} es: ${factorial}`);
                    } else {
                        console.log("Por favor, ingrese un número válido (mayor o igual a 0).");
                    }
                } else if (respuesta1 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 3:
                console.log("Validación de Contraseña");
                const respuesta2 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta2 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const contraseñaIngresada = prompt("Ingrese la contraseña:");
                    const contraseñaCorrecta = "secreto123";
                    if (contraseñaIngresada === contraseñaCorrecta) {
                        console.log("Acceso concedido.");
                    } else {
                        console.log("Acceso denegado.");
                    }
                } else if (respuesta2 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 4:
                console.log("Generador de Tablas de Multiplicar");
                const respuesta3 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta3 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const numero1 = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));
                    if (!isNaN(numero1)) {
                        console.log(`Tabla de multiplicar del ${numero1}:`);
                        for (let i = 1; i <= 10; i++) {
                            const resultado = numero1 * i;
                            console.log(`${numero1} x ${i} = ${resultado}`);
                        }
                    } else {
                        console.log("Por favor, ingrese un número válido.");
                    }
                } else if (respuesta3 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 5:
                console.log("Adivinar el Número");
                const respuesta4 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta4 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                    let intentos = 0;
                    let adivinado = false;
                    while (!adivinado) {
                        const intento = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):"));
                        intentos++;
                        if (!isNaN(intento)) {
                            if (intento === numeroAleatorio) {
                                console.log(`¡Felicitaciones! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
                                adivinado = true;
                            } else if (intento < numeroAleatorio) {
                                console.log("Demasiado bajo. Intenta de nuevo.");
                            } else {
                                console.log("Demasiado alto. Intenta de nuevo.");
                            }
                        } else {
                            console.log("Por favor, ingresa un número válido.");
                        }
                    }
                } else if (respuesta4 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 6:
                console.log("Suma de Números Primos");
                const respuesta5 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta5 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const n = parseInt(prompt("Ingrese la cantidad de números primos a sumar:"));
                    if (!isNaN(n) && n > 0) {
                        let suma = 0;
                        let contador = 0;
                        let numero = 2;
                        while (contador < n) {
                            let esPrimo = true;
                            for (let i = 2; i <= Math.sqrt(numero); i++) {
                                if (numero % i === 0) {
                                    esPrimo = false;
                                    break;
                                }
                            }
                            if (esPrimo) {
                                suma += numero;
                                contador++;
                            }
                            numero++;
                        }
                        console.log(`La suma de los primeros ${n} números primos es: ${suma}`);
                    } else {
                        console.log("Por favor, ingrese un número válido mayor que 0.");
                    }
                } else if (respuesta5 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 7:
                console.log("Secuencia de Fibonacci");
                const respuesta6 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta6 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const e = parseInt(prompt("Ingrese la cantidad de términos de la secuencia de Fibonacci que desea generar:"));
                    if (!isNaN(e) && e >= 1) {
                        let a = 0;
                        let b = 1;
                        let resultado = a;
                        console.log("Secuencia de Fibonacci:");
                        for (let i = 1; i <= e; i++) {
                            console.log(resultado);
                            const temp = a + b;
                            a = b;
                            b = temp;
                            resultado = a;
                        }
                    } else {
                        console.log("Por favor, ingrese un número válido mayor o igual a 1.");
                    }
                } else if (respuesta6 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 8:
                console.log("Convertidor de Temperatura");
                const respuesta7 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta7 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const opcion = parseInt(prompt("Seleccione la dirección de la conversión:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius"));
                    if (opcion === 1) {
                        const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
                        if (!isNaN(celsius)) {
                            const fahrenheit = (celsius * 9 / 5) + 32;
                            console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
                        } else {
                            console.log("Por favor, ingrese una temperatura válida en grados Celsius.");
                        }
                    } else if (opcion === 2) {
                        const fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
            
                        if (!isNaN(fahrenheit)) {
                            const celsius = (fahrenheit - 32) * 5 / 9;
                            console.log(`${fahrenheit} grados Fahrenheit son equivalentes a ${celsius} grados Celsius.`);
                        } else {
                            console.log("Por favor, ingrese una temperatura válida en grados Fahrenheit.");
                        }
                    } else {
                        console.log("Opción no válida. Seleccione 1 o 2 para la dirección de la conversión.");
                    }
                } else if (respuesta7 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 9:
                console.log("Calculadora de Potencia");
                const respuesta8 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta8 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const base = parseFloat(prompt("Ingrese la base:"));
                    const exponente = parseInt(prompt("Ingrese el exponente:"));
                    if (!isNaN(base) && !isNaN(exponente)) {
                        const resultado = Math.pow(base, exponente);
                        console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);
                    } else {
                        console.log("Por favor, ingrese valores numéricos válidos para la base y el exponente.");
                    }
                } else if (respuesta8 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            case 10:
                console.log("Juego de Piedra, Papel o Tijeras");
                const respuesta9 = prompt("¿Deseas ejecutar este ejercicio? (Si/No)").toLowerCase();
                if (respuesta9 === "si") {
                    console.log("Ejecutando el ejercicio...");
                    const opciones = ["piedra", "papel", "tijeras"];
                    const indiceAleatorio = Math.floor(Math.random() * 3);
                    const opcionComputadora = opciones[indiceAleatorio];
                    const opcionUsuario = prompt("Elige: piedra, papel o tijeras:").toLowerCase();
                    if (opcionUsuario === "piedra" || opcionUsuario === "papel" || opcionUsuario === "tijeras") {
                        console.log(`Usuario eligió: ${opcionUsuario}`);
                        console.log(`Computadora eligió: ${opcionComputadora}`);
                        if (opcionUsuario === opcionComputadora) {
                            console.log("Empate");
                        } else if (
                            (opcionUsuario === "piedra" && opcionComputadora === "tijeras") ||
                            (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
                            (opcionUsuario === "tijeras" && opcionComputadora === "papel")
                        ) {
                            console.log("¡Ganaste!");
                        } else {
                            console.log("La computadora ganó.");
                        }
                    } else {
                        console.log("Por favor, ingresa una opción válida: piedra, papel o tijeras.");
                    }
                } else if (respuesta9 === "no") {
                    console.log("Ejercicio no ejecutado.");
                } else {
                    console.log("Respuesta no válida. Por favor, responde 'Si' o 'No'.");
                }
                break;
            
            default:
                break;

    }

    }else if(respuesta9 === "no"){
        continuar = false;
}

}