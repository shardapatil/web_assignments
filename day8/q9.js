//Putting Condtion Putting shortcut using || By Default Value

function eatFruit (fruit) {
    let fruits = fruit || "strawberry";
    console.log(fruits);
}

let res = eatFruit();

let res1 = eatFruit("grapes");