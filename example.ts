import { Monad } from './monad';

const names = ['Vitor', 'Victor', 'Caze', 'Carlos', 'Xande', 'Marques'];

// Using Moad to filter all names what contains letter 'c'
const firstNameWithC = new Monad<string[]>(names)
    .bind((names) => names.filter(name => name.toLowerCase().includes('c')))
    // Getting first of the array
    .bind((names) => names[0])
    .value;

// Output: Victor
console.log(firstNameWithC);

// Getting name with seven letters and formatting to upper case this name
const nameWithSevenLetters = new Monad<string[]>(names)
    .bind((names) => names.find(name => name.length == 7))
    .bind(name => name?.toUpperCase())
    .value;

// Output: MARQUES
console.log(nameWithSevenLetters);

// Geting a empty value
const emptyTest = new Monad<string[]>(names)
    .bind(names => names.find(name => name.length >= 100))
    .isEmpty;

// Output: true
console.log(emptyTest);