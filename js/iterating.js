(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Sharon","Sherry","Sally","Shrimpler"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    names.forEach(element => console.log(element));

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(element => console.log(element));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let numArray = [1,2,3,4,5]
    function first(array){
        return array[0];
    }
    function second(array){
        return array[1];
    }
    function last(array){
        return array[array.length - 1]
    }


    console.log(`first element in names array is ${first(numArray)}.`)
    console.log(`second element in numArray array is ${second(numArray)}.`)
    console.log(`last element in numArray array is ${last(numArray)}.`)


    const numbers = [12, 32, 10, 53, 43, 2]

    function arrSum(arr){
        let total = 0;
        arr.forEach(num => total += num);
        return total;
    }

    console.log(arrSum(numbers));


})();