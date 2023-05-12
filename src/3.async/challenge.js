import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const anoTherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}
anoTherFn(API);

class Vaca {
    constructor (pati, cuki, yuyi) {
        this.pati = pati;
        this.cuki = cuki;
        this.yuyi = yuyi
    }
}

const negra = new Vaca ('cuatro', 2, 'yellow');
const petro = new Vaca ('guerrillo', 4, 'rojo');
console.log(petro);
console.log(negra);
console.log(negra.yuyi);
negra.africa = 'congo';
console.log(negra);
const santos = new Vaca ('tres', null, 'buitre');
santos
console.log(santos.cuki);
