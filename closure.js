function f1(){
    var a=78;
    f2();
        function f2(){
            console.log(a);
        }
    }
    f1();


    function sum(a){
        return function f2(){
            return function f3(){

            }
        }
    }
    let a;
    let b;
    let c;

    

function add(a) {
    return function(b) {
        return a + b;
    };
}

console.log(add(2)(3)); // 5  