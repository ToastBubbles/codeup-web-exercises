function yikers(){
    let userNum = parseInt(prompt("Pick an Odd number between 1 - 50"));

    for(let i = 1;i<50;i+=2) {

        if(userNum % 2 === 0 || userNum > 49 || userNum < 1 || isNaN(userNum)){
            alert("Pick an Odd number between 1 - 50");
            break;
        }
        // if(i % 2 === 0){
        //     continue;
        // }
        if(i === userNum){

            console.log(`yikes, skipping ${userNum}`)
            continue;
        }
        console.log(`here is odd number ${i}`);


    }
}