let years: number[] = [];
const currentYear = 2024;

for (let yearsCount = 2000; yearsCount <= currentYear; yearsCount++) {
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

let orderedScores = scores.sort((scoreA, scoreB) => {
  return scoreA - scoreB;
});

let approvedScore = scores.filter((score) => {
  return score >= 5;
});
console.log(`The approved scores are: ${approvedScore}`);

let sumScore = scores.reduce((scoreA, scoreB) => {
  return scoreA + scoreB;
}, 0);
let averageScore = sumScore / scores.length;
console.log(`The average scores is: ${averageScore}`);

let highestScore = scores[0];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] > highestScore) highestScore = scores[index];
}

console.log(`The highest score is: ${highestScore}`);

let lowestScore = scores[0];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] < lowestScore) lowestScore = scores[index];
}
console.log(`The lowest score is: ${lowestScore}`);
