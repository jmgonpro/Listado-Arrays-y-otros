{
    /**
     * Indica qué hace miArray.slice();
     * Indica qué hace JSON.parse( JSON.stringify( miArray ) );
     * Indica la diferencia de funcionalidad entre las dos sentencias anteriores
     * Realiza el siguiente ejercicio con ambos métodos e indica la diferencia.
     *      Crea el siguiente array a=[1, 2, {3:3, 5:5}]; 
     *      Utiliza los métodos anteriores obteniendo las variables c1 y c2;
     *      En el objeto a modifica el tercer elemento: modifica el valor 5 en 55. NO CAMBIES la clave 5, sino el valor 5.
     *      Comprueba los valores de c1 y c2.
     * Utilizando la destructuración de un array, y sin definir ninguna función, convierte la siguiente cadena en las variables nombre y apellido: "Zenda Menchú";
     * Usando funciones arrow básicas (evita return)
     *      Ordena alfabéticamente mediante el método sort() array= ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];
     *      Ordena por apellido let alumnas = [    { nombre: 'Anacleta', apellido: 'Cándida' },    { nombre: 'Manola', apellido: 'CÁNTICO' },    { nombre: 'Simona', apellido: 'Carola' }]; 
    */

    document.addEventListener('DOMContentLoaded', () => {
        const parrafos = document.querySelectorAll("p");
        const miArray = ["manzana", "naranja", "melón", "piña", "mango", "coco", "plátano"];
        const a = [1, 2, {3:3, 5:5}];
        const cadena = "Zenda Menchú";
        const [nombre, apellido] = cadena.split(" ");
        const array = ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];
        const alumnas = [{ nombre: 'Anacleta', apellido: 'Cándida' }, { nombre: 'Manola', apellido: 'CÁNTICO' }, { nombre: 'Simona', apellido: 'Carola' }];

        parrafos[0].innerHTML = `Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
                                <br><br>miArray: ${miArray.join(" ")}
                                <br>slice 1 al 3: ${miArray.slice(1,3).join(" ")}`;
        parrafos[1].innerHTML = `Analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis
                                 <br><br>${JSON.parse(JSON.stringify(miArray))}`;
        parrafos[2].innerHTML = `El método slice() se usa para hacere copias de un array y JSON.parse() se usa más para hacer copias de objetos`;
        parrafos[3].innerHTML = `${JSON.stringify(a)}`;
        parrafos[4].innerHTML = `3: ${JSON.parse(JSON.stringify(a.slice(2,4)))[0][3]} => 5: ${JSON.parse(JSON.stringify(a.slice(2,4)))[0][5]}`;
        
        a[2][5] = 55;
        
        parrafos[5].innerHTML = `${JSON.stringify(a)}`;
        parrafos[6].innerHTML = `3: ${JSON.parse(JSON.stringify(a.slice(2,4)))[0][3]} => 5: ${JSON.parse(JSON.stringify(a.slice(2,4)))[0][5]}`;
        parrafos[7].innerHTML = `cadena: ${cadena} => nombre: ${nombre} => apellido: ${apellido}`;
        parrafos[8].innerHTML = `${array.sort((a,b) => a - b).join(" ")}`;
        parrafos[9].innerHTML = `${JSON.stringify(alumnas.sort((a,b) => a.apellido - b.apellido))}`;
    });
    
}