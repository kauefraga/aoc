function firstPart(leftList: number[], rightList: number[]) {
  if (leftList.length !== rightList.length) {
    throw new Error("Impossible to pair up");
  }

  let totalDistance = 0;

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  leftList.shift(); // POR QUÊ?!

  for (let i = 0; i < leftList.length - 1; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  return totalDistance;
}

function secondPart(leftList: number[], rightList: number[]) {
  let similarityScore = 0;

  for (const lNumber of leftList) {
    const frequency = rightList.filter((rNumber) => rNumber === lNumber).length;
    similarityScore += lNumber * frequency;
  }

  return similarityScore;
}

async function getLines(path: string) {
  const file = await Bun.file(path).text();

  return file.split("\n");
}

const lines = await getLines("inputs/day-1.txt");

const leftList: number[] = [];
const rightList: number[] = [];

for (const line of lines) {
  const [leftNum, rightNum] = line.split("   ");
  leftList.push(Number(leftNum));
  rightList.push(Number(rightNum));
}

console.log(leftList);
console.log("first part:", firstPart(leftList, rightList));
console.log(leftList);
console.log("second part:", secondPart(leftList, rightList));
