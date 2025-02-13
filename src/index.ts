let years: number[] = [];
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
const inverseWords = words.reverse();
const separatedWords = words.join(" ");
console.log(`${separatedWords + inverseWords}`);

let scores: number[] = [];
scores = [3, 7, 9, 5, 6];

let orderedScores = scores.sort();

for (let index = 0; index < scores.length; index++) {
  if (scores[index] >= 5) {
    console.log(scores[index]);
  }
}

let averageScores = 0;
for (let index = 0; index < scores.length; index++) {
  averageScores = averageScores + scores[index];
}
console.log(`The average score is: ${averageScores / scores.length}`);

let higuestScores = scores[0];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] > higuestScores) {
    higuestScores = scores[index];
  }
}
console.log(`The highest score is: ${higuestScores}`);

let lowestScores = scores[0];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] < higuestScores) {
    lowestScores = scores[0];
  }
}
console.log(`The lowest score is: ${lowestScores}`);
