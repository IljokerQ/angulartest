const nome="pippo";
let cognome= "pippone";
let age: number = 1;
let chiledren : string[] = ["ciao","ss","baubau"];
let Person:{ 
    nome: string,
    age: number
};
Person = { nome:"Pippo", age:10 };
function go(direction: string= "left", distance: number=100){
console.log(direction,distance);
}
go();
go("right");
go("left",50);
function drive(param:any){
};
drive({distance: 100});
function add(x:number, y:number){
    return x+y;
}
add(2,3);
const add2= function(x){};
const add3 = (x) => x+3;
