//let userName = prompt("whats ur name");
//let message = myFunction(userName);
//console.log(message);
console.log(isEven(33));

function myFunction(name){
    //let name = "jimbo";
    return "Thanks, " + name + " u did a thing";

}

//myFunction();
function fight(person1, person2, time){

    return (person1 + " punched " + person2 + " right in the kisser " + time + " times");

}
document.getElementById("fight").innerHTML = fight("jimbo", "billy bob ", 24);



function isEven (num){

    //return (num % 2 == 0);

}


