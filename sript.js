class Ejercicio{

    // ejercicio 21
    esBisiesto() {
        let year, resultado
        year = parseInt(document.getElementById("year").value)
       // resultado = parseInt(document.getElementById("resultado").value)

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            //resultado.textContent = year + " es un año bisiesto.";
            document.getElementById("resultado").innerHTML = `${year} es un año bisiesto`
        } else {
            //resultado.textContent = year + " no es un año bisiesto.";
            document.getElementById("resultado").innerHTML = `${year} no es un año bisiesto`

        }
    }

    // Ejercicio 22
    determinarSigno() {
        let mes, dia, resultado, signo
        mes = document.getElementById("mes").value;
        dia = document.getElementById("dia").value;
        resultado = document.getElementById("resultado");

        // Convertir mes y día a números enteros
        mes = parseInt(mes);
        dia = parseInt(dia);

        //signo = "";

        // Lógica para determinar el signo zodiacal
        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Aries" 
        } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Tauro" 
        } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Géminis" 
        } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Càncer" 
        } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Leo" 
        } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Virgo" 
        } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Libra" 
        } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Escorpio" 
        } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Sagitario" 
        } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Capricornio" 
        } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Acuario" 
        } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Piscis" 
        }
    }

    // ejercicio 23
    quincena() {
        // Definir variables
        let dia

        // Pedir al usuario que ingrese un día
        dia = document.getElementById("dia").value;

        // Verificar si el número pertenece a la primera o segunda quincena
        if (dia >= 1 && dia <= 15) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la primera quincena.` 
        } else if (dia >= 16 && dia <= 31) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la segunda quincena.` 
        } else {
            document.getElementById("resultado").innerHTML = "Número de día no válido.";
        }
    }

    // Ejercicio 24
    semana() {
        // Definir las variables
        let numdia;

        // Pedir al usuario que ingrese un número en el rango establecido
        numdia = parseInt(document.getElementById("numdia").value)

        // Utilizar la estructura switch para determinar el día de la semana
        switch (numdia) {
            case 1:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el domingo.`
                break;
            case 2:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el lunes.`
                break;
            case 3:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el martes.`
                break;
            case 4:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el miercoles.`
                break;
            case 5:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el Jueves.`
                break;
            case 6:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el viernes.`
                break;
            case 7:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el sàbado.`
                break;
            default:
                document.getElementById("resultado").innerHTML = `El número ingresado no es válido. Por favor, ingrese un número del 1 al 7.`;
        }
    }

    //Ejerciio 25
    verificarFrasesIguales() {
        // Obtener el valor de las frases ingresadas por el usuario
        let frase1, frase2
        frase1 = document.getElementById("frase1").value;
        frase2 = document.getElementById("frase2").value;

         // Convertir ambas frases a minúsculas antes de comparar
        frase1 = frase1.toLowerCase();
        frase2 = frase2.toLowerCase();
    
        // Comparar las frases y mostrar el resultado en la página
        if (frase1 === frase2) {
            document.getElementById("resultado").textContent = "Las frases son iguales.";
        } else {
            document.getElementById("resultado").textContent = "Las frases son diferentes.";
        }
    }

    //Ejercicio 26
    calcularPrecioFinal() {
        // Obtener el valor del precio y el porcentaje de descuento ingresados por el usuario
        let precio, descuento, precioFinal
        precio = parseInt(document.getElementById("precio").value)
        descuento = parseInt(document.getElementById("descuento").value)
    
        // Convertir los valores a números
        precio = parseFloat(precio);
        descuento = parseFloat(descuento);
    
        // Validar que los valores sean válidos
            precioFinal = precio - (precio * (descuento / 100));
    
            // Mostrar el resultado en la página
            document.getElementById("resultado").innerHTML = `El precio final con descuento es: $ ${precioFinal}` 
    }

    //Ejercicio 27
    calcularTotal() {
        // Obtener los valores del formulario
        let total, impuestos, totalConImpuestos
        total = parseFloat(document.getElementById("total").value);
        impuestos = parseFloat(document.getElementById("impuestos").value);

        // Calcular el monto total a pagar, incluyendo impuestos
        totalConImpuestos = total + (total * (impuestos / 100));

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `El monto total a pagar, incluyendo impuestos, es: $ ${totalConImpuestos}`
    }

    //Ejercicio 28
    calcularNuevoSalario() {
        // Obtener los valores del formulario
        let salarioActual, porcentajeAumento, nuevoSalario
        
        salarioActual = parseFloat(document.getElementById("salarioActual").value);
        porcentajeAumento = parseFloat(document.getElementById("porcentajeAumento").value);

        // Calcular el nuevo salario después del aumento
        nuevoSalario = salarioActual + (salarioActual * (porcentajeAumento / 100));

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `Su nuevo salario después del aumento es: $ ${nuevoSalario}` 
    }

    //Ejercicio 29
    calcularCompra() {
        // Definir variables
        let totalCompra, descuento, totalConDescuento, cantidad, precio, i, total
        totalCompra = 0; descuento = 0; totalConDescuento = 0;

        // Obtener la cantidad de artículos
        cantidad = parseFloat(document.getElementById("cantidad").value);
        precio = parseFloat(document.getElementById("precio").value);
        //parseInt(prompt("Ingrese la cantidad de artículos que va a comprar:"));

        // Calcular el total de la compra
        total = 0;
        for (i = 1; i <= cantidad; i++) {
            precio = parseFloat(prompt(`Ingrese el precio del artículo ${i}:`));

            totalCompra += precio * cantidad;
        }

        // Aplicar descuento si el total de la compra es mayor a 100
        if (totalCompra > 100) {
            descuento = totalCompra * 0.10;
            totalConDescuento = totalCompra - descuento;
            document.getElementById("resultado").innerHTML = `El total de la compra con un 10% de descuento es: ${totalConDescuento}`
            //alert("El total de la compra con un 10% de descuento es: " + totalConDescuento);
        } else {
            document.getElementById("resultado").innerHTML = `El total de la compra es: ${totalCompra}`
        }
    }

}

let ope = new Ejercicio()