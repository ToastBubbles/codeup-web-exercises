


function showMultiplicationTable(num){
    for (let i = 1;i<=10;i++) {
        console.log( `${num} x ${i} = ${num * i}`);
    }
}


function isEven(n){
    return n%2===0 ? "even" : "odd";
}


function randNumCheck(){
    let rand;
    for(let i = 1;i<=10;i++){
        rand = (Math.floor(Math.random()* 181) + 20)
        console.log(`${rand} is ${isEven(rand)}`)
    }
}

function pyramidNum(){
    for(let i = 1; i<10; i++) {
       // console.log(("" + i + i + i + i + i + i + i + i + i).slice(-i))

        let str = "";
        for(let l = 0; l<i; l++) {
            str = str + i.toString();
        }
        console.log(str);
    }
}

function countDown(){
    for(let i = 100;i>0;i-=5) {
        console.log(i)
    }
}







// showMultiplicationTable(7);
// randNumCheck();
pyramidNum();
// countDown();