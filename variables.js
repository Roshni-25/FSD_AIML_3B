let a=45;
console.log(a);
// let a=46;
 a=46;
console.log(a);

console.log(a);
a=31;
var a;
a=65;
{
    console.log(a);
    var b=81;
    var a=21;
    console.log(a);
    console.log(b);
    b=67;
}
console.log(b);

console.log(a);
a=31;
var a;
a=65;
{
    console.log(a);
    let b=81;
    var a=21;
    console.log(a);
    console.log(b);
    b=67;
}
console.log(b);

console.log(a);
a=31;
var a;
a=65;
function f(){
    console.log(a);
    let b=81;
    var a=21;
    console.log(a);
    console.log(b);
    b=67;
}
console.log(f);
f();


function f(){
    var a=34;
    f2();
    function f2(){
        console.log(a);
        var b=65;
        f3();
        function f3(){
            var c = 12;
            console.log(b);
            f4();
            function f4(){
                console.log(a);
                  console.log(b);
                    console.log(c);
            }


        }

    }
}
f();
