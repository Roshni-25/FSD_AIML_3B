//Borrowing function

let obj1={
    f_name:"abc",
    l_name:"xyz",
    printName: function (College){
        console.log(`Hello ${this.f_name} ${this.l_name} from ${College}`);
    }
}
let obj2={
    f_name:"Roshni",
    l_name:"Yadav",
}
obj1.printName.call(obj2,"ABESEC");


let obj1 = {
    f_name: "abc",
    l_name: "xyz",
    printName: function (College) {
        console.log(`Hello ${this.f_name} ${this.l_name} from ${College}`);
    }
}

let obj2 = {
    f_name: "Roshni",
    l_name: "Yadav",
}

obj1.printName.apply(obj2, ["ABESEC"]);



let obj1 = {
    f_name: "abc",
    l_name: "xyz",
    printName: function (College) {
        console.log(`Hello ${this.f_name} ${this.l_name} from ${College}`);
    }
}
let obj2 = {
    f_name: "Roshni",
    l_name: "Yadav",
}
let newFunction = obj1.printName.bind(obj2, "ABESEC");
newFunction();