```js
🔥 𝗖𝗹𝗮𝘀𝗲 #𝟵: 𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗵𝗲𝗹𝗹 𝟵/𝟮𝟭 🔥
.
CallBacks Hell: Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’ y por eso se debe evitar.
.
✒️ Siguiendo con el proyecto:
.

Ir a la terminal, para compilar challenge.js se coloca: node src/callback/challenge.js
Se obtiene las 3 salidas: el id, el título que corresponde al id y el nombre del tipo de categoría:
{ //console.log(data1[0]);
  id: 7,
  title: 'Probando TS ed',
  price: 666,
  description: 'Probando TS',
  category: {
    id: 5,
    name: 'Others',
    image: 'https://api.lorem.space/image?w=640&h=480&r=9607'
  },
  images: [
    'https://api.lorem.space/image?w=640&h=480&r=1583',
    'https://api.lorem.space/image?w=640&h=480&r=3215',
    'https://api.lorem.space/image?w=640&h=480&r=8220'
  ]
}
Probando TS ed //console.log(data2.title);
Others //console.log(data3.name);

Para ejecutar mediante un script, se edita el archivo package.json y en la parte de “scripts” se sustituye la línea: "test": "echo \"Error: no test specified\" && exit 1" por "callback": "node src/callback/challenge.js"
Queda así:
"scripts": {
"callback": "node src/callback/challenge.js"
},

Se guarda con Ctrl + S y en la terminal, se ejecuta: npm run callback y debe aparecer la misma salida que node …
```