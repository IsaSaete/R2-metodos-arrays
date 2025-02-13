/*let years: number[] = [];
const actualYear = 2024;

for (let yearsCount = 2000; yearsCount <= actualYear; yearsCount++) {
  years.push(yearsCount);
}
console.log(years);

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
console.log(words.reverse().join(" ")); */

// Crea una variable que almacenará las notas de un examen. Créala primero con
// y un array vacío, y después asígnale un array con 5 notas.>>LISTO
// Crea una nueva variable y asígnale las notas anteriores pero ordenadas de menor a mayor.>>LISTO
// Imprime por consola las notas que han sido aprobadas (5 o más).
// Imprime por consola la nota media.
// Imprime por consola la nota más alta y la nota más baja.

let scores: number[] = [];
scores = [3, 7, 9, 5, 6];

let orderedScores = scores.sort((a, b) => {
  return a - b;
});

let aprovedScores = scores.filter((score) => {
  return score >= 5;
});
console.log(`The approved scores are: ${aprovedScores}`);

let sumScores = scores.reduce((a, b) => {
  return a + b;
}, 0);
let averageScores = sumScores / scores.length;
console.log(`The average scores is: ${averageScores}`);

let maximumScores = scores.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(`The highest score is: ${maximumScores}`);

let lowestScores = scores.reduce((a, b) => {
  return a < b ? a : b;
});
console.log(`The lowest score is: ${lowestScores}`);
