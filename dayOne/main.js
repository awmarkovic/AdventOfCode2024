// node --watch ./dayOne/main.js
import { readFile } from "node:fs/promises";

const data = await readFile("./dayOne/puzzleInput.txt", "utf-8");

let leftNumbers = [];
let rightNumbers = [];

for (const line of data.split("\n")) {
  const numbers = line.split("   ");

  const leftNumber = parseInt(numbers[0]);
  const rightNumber = parseInt(numbers[1]);

  leftNumbers.push(leftNumber);
  rightNumbers.push(rightNumber);
}

leftNumbers = leftNumbers.sort();
rightNumbers = rightNumbers.sort();

let totalDifference = 0;
let similarityScore = 0;

for (let i = 0; i < leftNumbers.length; i++) {
  // part one
  const leftNumber = leftNumbers[i];
  const rightNumber = rightNumbers[i];

  if (leftNumber > rightNumber) {
    totalDifference += leftNumber - rightNumber;
  } else {
    totalDifference += rightNumber - leftNumber;
  }

  // part two
  let matchCount = 0;

  for (const rightNumber of rightNumbers) {
    if (leftNumber === rightNumber) {
      matchCount++;
    }
  }
  similarityScore += leftNumber * matchCount;
}

console.log(totalDifference, similarityScore);
