// function should have type at both the arguments and return type
function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // return "helllo";
}
console.log(addTwoNumbers(2, 4));
var addTwoNum = function (num1, num2) {
    return num1 + num2;
};
console.log(addTwoNum(6, 9));
var consoleError = function (err) {
    console.error(err);
};
var throwErro = function (err) {
    throw new Error(err);
};
var arr = [1, 2, 3];
var otherArr = ["1", "2", "3"];
arr.map(function (item) { return item; });
otherArr.map(function (other) { return other; });
