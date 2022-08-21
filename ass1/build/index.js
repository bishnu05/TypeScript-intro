let nams = "Masai";
let age = 20;
let isFetching = false;
let array = [1, 2, 3, 4];
let array2 = ["Masai", "school"];
let tuple = ["Masai", false];
var Office;
(function (Office) {
    Office[Office["User"] = 0] = "User";
    Office[Office["SuperUser"] = 1] = "SuperUser";
    Office[Office["Admin"] = 2] = "Admin";
    Office[Office["SuperAdmin"] = 3] = "SuperAdmin";
})(Office || (Office = {}));
function divide(x, y) {
    return x / y;
}
console.log(divide(40, 20));
function names(y) {
    console.log(y);
}
names("Masai");
//# sourceMappingURL=index.js.map