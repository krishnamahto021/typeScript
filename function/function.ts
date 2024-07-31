// function should have type at both the arguments and return type
function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
  // return "helllo";
}
console.log(addTwoNumbers(2, 4));

const addTwoNum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addTwoNum(6, 9));

const consoleError = (err: string): void => {
  console.error(err);
};

const throwErro = (err: string): never => {
  throw new Error(err);
};

const arr = [1, 2, 3];
const otherArr = ["1", "2", "3"];
arr.map((item): number => item);
otherArr.map((other): string => other);
