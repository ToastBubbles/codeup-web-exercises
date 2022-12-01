function whileTest(){
    let i = 1;
    while (i<40000){
        console.log(i*=2);
    }
}
//whileTest();


function doWhileTest(){
    let cones = (Math.floor(Math.random()* 51) + 50)

    do{
        let conesSold = Math.ceil(Math.random()* 5);
        console.log(`Sold ${conesSold}.`);
        if(conesSold < cones) {
            cones -= conesSold;
        }else {
            console.log(`Sorry only ${cones} left, you'll be ${conesSold - cones} short`)
            cones = 0;
        }
        console.log(`${cones} cones remaining.`);
    }while(cones > 0);
    console.log("All cones have been sold!");

}

doWhileTest();