function* gen() {
    yield 1;
    yield 2;
    yield 3
};

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const pokemon = ['Pikachu', 'Bulbasor', 'Charizar', 'Toglepi', 'Rosalia'];

const compañero = iterate(pokemon);
console.log(compañero.next().value);
console.log(compañero.next().value);
console.log(compañero.next().value);
console.log(compañero.next().value);
console.log(compañero.next().value);
console.log(compañero.next().value);

function* heroes(array) {
    for (let nombre of array) {
        yield nombre
    }
}

const SuperHeroes = ['Superman', 'Batman', 'Wonderwoman', 'Hull', 'Spiderman'];
const SuperVillanos = ['Guason', 'Dos Caras', 'Lex Luctor', 'Harley', 'scareface'];

const myHero = heroes(SuperHeroes);
console.log(myHero.next().value);
console.log(myHero.next().value);
console.log(myHero.next().value);
console.log(myHero.next().value);
console.log(myHero.next().value);
console.log(myHero.next().value);
SuperHeroes

const MyVillan = heroes(SuperVillanos);
console.log(MyVillan.next().value);
console.log(MyVillan.next().value);
console.log(MyVillan.next().value);
console.log(MyVillan.next().value);
console.log(MyVillan.next().value);
console.log(MyVillan.next().value);
SuperVillanos

const caballeroz = heroes(['Pegasso', 'Dragon', 'Fenix', 'Cisne', 'Andromeda']);
console.log(caballeroz.next().value);
console.log(caballeroz.next().value);
console.log(caballeroz.next().value);
console.log(caballeroz.next().value);
console.log(caballeroz.next().value);
console.log(caballeroz.next().value);
caballeroz
console.log(SuperHeroes[1]);
