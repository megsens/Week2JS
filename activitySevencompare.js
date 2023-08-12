const compare = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`;
const hasA = compare.lastIndexOf("a");
const hasE = compare.lastIndexOf("e");
const hasI = compare.lastIndexOf("i");
const hasO = compare.lastIndexOf("o");
const hasU = compare.lastIndexOf("u");

const maxFirstCompare = Math.max(hasA, hasE);
const maxSecondCompare = Math.max(hasI, hasO);
const maxThirdCompare = Math.max(maxSecondCompare, hasU);
const maxLastCompare = Math.max(maxThirdCompare, maxFirstCompare);

console.log(maxLastCompare);