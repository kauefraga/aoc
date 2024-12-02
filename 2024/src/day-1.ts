function sumPairedElementsDistance(leftList: number[], rightList: number[]) {
  if (leftList.length !== rightList.length) {
    throw new Error('Impossible to pair up');
  }

  let totalDistance = 0;

  const ll = leftList.sort((a, b) => a - b);
  const rl = rightList.sort((a, b) => a - b);

  ll.shift(); // POR QUÊ?!

  for (let i = 0; i < ll.length - 1; i++) {
    totalDistance += Math.abs(ll[i] - rl[i]);
  }

  return totalDistance;
}

async function getLists(inputPath: string) {
  const file = await Bun.file(inputPath).text();

  const leftList: number[] = [];
  const rightList: number[] = [];

  for (const line of file.split('\n')) {
    const [leftNum, rightNum] = line.split('   ');
    leftList.push(Number(leftNum));
    rightList.push(Number(rightNum));
  }

  return { leftList, rightList };
}

const { leftList, rightList } = await getLists('inputs/day-1.txt');

// console.log(leftList, rightList);

console.log(sumPairedElementsDistance(leftList, rightList))
