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
console.log(words.reverse().join(" "));

let scores: number[] = [];
scores = [3, 7, 9, 5, 6];

let orderedScores = scores.sort();
console.log(orderedScores);

for (const position in scores) {
  const allScores = scores[position];
  if (allScores >= 5) {
    console.log(allScores);
  }
}

let averageScores = 0;
for (const position in scores) {
  averageScores = averageScores + scores[position];
}
console.log(`The average score is: ${averageScores / scores.length}`);

let higuestScores = scores[0];
for (const position in scores) {
  if (higuestScores < scores[position]) higuestScores = scores[position];
}
console.log(`The highest score is: ${higuestScores}`);

let lowestScores = scores[0];
for (const position in scores) {
  if (lowestScores > scores[position]) lowestScores = scores[position];
}
console.log(`The lowest score is: ${lowestScores}`);
