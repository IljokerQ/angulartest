var nome = "pippo";
var cognome = "pippone";
var age = 1;
var chiledren = ["ciao", "ss", "baubau"];
var Person;
Person = { nome: "Pippo", age: 10 };
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
    console.log(direction, distance);
}
go();
go("right");
go("left", 50);
function drive(param) {
}
;
drive({ distance: 100 });
function add(x, y) {
    return x + y;
}
add(2, 3);
var add2 = function (x) {
};
var add3 = function (x) { return x + 3; };
