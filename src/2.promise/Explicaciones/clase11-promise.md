```js
𝗖𝗹𝗮𝘀𝗲 #𝟭𝟬: 𝗤𝘂é 𝘀𝗼𝗻 𝗹𝗮𝘀 𝗽𝗿𝗼𝗺𝗲𝘀𝗮𝘀 𝟭𝟬/𝟮𝟭 🤞🏼
.
🪃 Un callback devuelve una función en los parámetros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de código y sería engorroso, por eso nacen las promesas, éstas optimizan y permiten leer mejor el código con pocas lineas.
.
🫱🏼‍🫲🏾 Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.
.
Las promesas pueden suceder:
.

Ahora
En el futuro
Nunca
.
🛠️ Para crear una promesa:
.
Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject.

El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
El parámetro reject, se usa en el que caso de que no funcione.
.
📝 Ejemplo:
const promise = new Promise(function (resolve, reject){
resolve('hey!');
});
.
🗃️ Una Promesa puede estar en uno de los siguientes estados:
.

Pendiente pending → Una promesa inicia en este estado: no cumplida, no rechazada:
Una promesa inicialmente está pendiente.
Cumplida fulfilled → Significa que la operación se completó satisfactoriamente, .then(va => …)
Cuando llamamos a resolve entonces la promesa pasa a estar resuelta.
Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then
Rechazada rejected → significa que la operación falló, .catch(err => …)
Si llamamos a reject pasa a estar rechazada (obtenemos un error que nos va a indicar la razón del rechazo).
Si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch
.
📝 Ejemplo con then y catch:
.

Para probar el código, en el proyecto se crea la carpeta llamada promise dentro de la carpeta src.
Se crea el archivo index.js en la ruta: src/promise
El código del ejemplo queda así:
//ejemplo de contar vacas
const cows = 15; //valor inicial de vacas

const countCows = new Promise(function(resolve, reject){
//solo si el número de vacas supera 10, se llama al resolve
//de lo contrario: se llama a reject
if(cows > 10){
resolve(`We have ${cows} cows on the farm`);
} else {
reject("There is no cows on the farm");
}
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows.then((result) => {
console.log(result);
}).catch((error) => {
console.log(error);
}).finally(() => console.log('Finally'));
//se usan arrow function () =>

Para ver el resultado por la consola de VSC, seleccionar el código y dar en Run Code, se puede ir probando cambiando la variable inicial cows
.
🏹 Si hay dudas de las funciones arrow en el enlace hay ejemplos: aquí


 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟭: 𝗙𝗲𝘁𝗰𝗵𝟭𝟭/𝟮𝟭 💾
.
Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.
.
🛠️ Para poder usar fetch, primero tenemos que instalarlo:
.

Ir a la terminal e instalar fetch con: npm i node-fetch
Para poder compilar desde VSC, debemos registrar el modulo en package.json, abrimos el archivo y al final se agrega:
"type": "module"
Importante agregar una coma (,) a la llave que cierra a “dependencies”.
En la ruta src/promise crear el archivo challenge.js
En el archivo challenge.js inicialmente se debe importar lo que acabamos de instalar, agregando el código: import fetch from 'node-fetch';
Dado que la API es una constante, nunca va a cambiar, por convección se coloca en letras mayúsculas: const API = 'https://api.escuelajs.co/api/v1';
Ahora se crea la lógica con fetch, then y catch:
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){
    return fetch(urlApi);
};
//el llamado
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('hola');
    }) //se pueden anidar múltiples .then
    .catch(error => console.log(error));
Para correrlo dentro de la consola de VSC, se selecciona el código, se da click derecho y se le da a Run Code. En la salida (OUTPUT) si no arroja error, sale una lista larga de elementos del llamado a la API.
.
Continuando con la clase, para compilar el segundo ejemplo debemos comentar fetchData() para evitar problemas de compilación.
.
🖊️ ¿Cómo comentar en JavaScript?
.
En JS se comenta cada línea con doble slash // o se puede comentar todo un párrafo iniciando con slash + asterisco /* y finalizar con asterisco + slash */
.
Pero para ahorrar tiempo se puede usar los shortcuts de VSC, se pueden ver y editar en File>Preferences>Keyboard Shortcuts o pulsando las teclas Ctrl + K Ctrl + S:
.

Para comentar con shortcut, seleccionar el texto que se quiere comentar y presionar las teclas Ctrl + K luego las sueltas y presionas las teclas Ctrl + C
Para quitar los comentarios con shortcut, seleccionas el texto comentado, presionar las teclas Ctrl + K luego las sueltas y presionas las teclas Ctrl + U
.
✏️ El código del segundo ejemplo queda:

fetchData(`${API}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(products.title);
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud

.

Al correrlo con Run Code, la salida muestra una lista larga con la última palabra impresa Finally.