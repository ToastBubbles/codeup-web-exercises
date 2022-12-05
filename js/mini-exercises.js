// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once
// and also try defining empty objects and assign property values in separate statements
// using the dot notation.

let beverages = {
    bev1:{
        brandName: "Sprite",
        type: "Normal",
        volumeInLiters: 2,
        priceInCents: 250,
        expiration: "12/12/12",
        datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],
        isOpen: true,
    },
    bev2:{
        brandName: "Dr Pepper",
        type: "Normal",
        volumeInLiters: 2,
        priceInCents: 250,
        expiration: "12/12/12",
        datesOfPreviousSips: [],
        isOpen: false,
    },
    bev3:{
        brandName: "Coke",
        type: "Diet",
        volumeInLiters: 2,
        priceInCents: 250,
        expiration: "12/12/12",
        datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],
        isOpen: true,
    },
    bev4:{
        brandName: "Coke",
        type: "Diet",
        volumeInLiters: 2,
        priceInCents: 250,
        expiration: "12/12/12",
        datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],

    }
}


beverages.bev4.isOpen = true;

beverages.bev5 = {
    isOpen: true
}
console.log(beverages.bev5);


// -- Mini Exercise 2
const users = [
    {
        givenName: 'Sam',
        age: 21,
},
{
    givenName: 'Cathy',
    age: 34,
},
{
    givenName: 'Kathy',
    age: 43,
},
];

let concatStr = ''
users.forEach(function (user){

    console.log(user.givenName)
    user.givenName = 'John Doe'
    concatStr += ` ${user.givenName}`
    console.log(user.givenName)
    console.log(user.age)
    user.age += 1;
    console.log(user.age)



})
console.log(concatStr.slice(1))
// 0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?
