let person: [string, number] = ['john', 25];

let date: readonly [number, number, number] = [17, 12, 2001];
// date.push(30);
// date.push(30);
// date.push(30);

console.log(date);

function getPerson(): [string, number] {
  return ['john', 25];
}

let susan: [string, number?] = ['susan'];
