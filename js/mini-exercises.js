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
  bev1: {
    brandName: "Sprite",
    type: "Normal",
    volumeInLiters: 2,
    priceInCents: 250,
    expiration: "12/12/12",
    datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],
    isOpen: true,
  },
  bev2: {
    brandName: "Dr Pepper",
    type: "Normal",
    volumeInLiters: 2,
    priceInCents: 250,
    expiration: "12/12/12",
    datesOfPreviousSips: [],
    isOpen: false,
  },
  bev3: {
    brandName: "Coke",
    type: "Diet",
    volumeInLiters: 2,
    priceInCents: 250,
    expiration: "12/12/12",
    datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],
    isOpen: true,
  },
  bev4: {
    brandName: "Coke",
    type: "Diet",
    volumeInLiters: 2,
    priceInCents: 250,
    expiration: "12/12/12",
    datesOfPreviousSips: ["10/10/10", "09/09/09", "08/08/08"],
  },
};

beverages.bev4.isOpen = true;

beverages.bev5 = {
  isOpen: true,
};
console.log(beverages.bev5);

// -- Mini Exercise 2
// const users = [
//   {
//     givenName: "Sam",
//     age: 21,
//   },
//   {
//     givenName: "Cathy",
//     age: 34,
//   },
//   {
//     givenName: "Kathy",
//     age: 43,
//   },
// ];

// let concatStr = "";
// users.forEach(function (user) {
//   console.log(user.givenName);
//   user.givenName = "John Doe";
//   concatStr += ` ${user.givenName}`;
//   console.log(user.givenName);
//   console.log(user.age);
//   user.age += 1;
//   console.log(user.age);
// });
// console.log(concatStr.slice(1));
// 0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
// 3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?

//Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

// const pets = [
//   {
//     name: "Sparky",
//     type: "Fish",
//     age: 4,
//   },
//   {
//     name: "Mr. Pig",
//     type: "Cat",
//     age: 4,
//   },
//   {
//     name: "Bubba",
//     type: "Dog",
//     age: 5,
//   },
//   {
//     name: "Pickles",
//     type: "Dog",
//     age: 10,
//   },
// ];

// function findAverageDogAge(obj) {
//   let avgadd = [0, 0];
//   obj.forEach(function (pet) {
//     if (pet.type === "Dog") {
//       avgadd[0] += pet.age;
//       avgadd[1]++;
//     }
//   });
//   return avgadd[0] / avgadd[1];
// }

// console.log(findAverageDogAge(pets)); // returns 7.5

//Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.

const pets = [
  {
    name: "Sparky",
    type: "Fish",
    age: 4,
  },
  {
    name: "Mr. Pig",
    type: "Cat",
    age: 4,
  },
  {
    name: "Bubba",
    type: "Dog",
    age: 5,
  },
  {
    name: "Beans",
    type: "Dog",
    age: 3,
  },
  {
    name: "Mr. Salmon",
    type: "Fish",
    age: 1,
  },
];

function returnPetsWithNoFish(petArray) {
  let petsWithNoFish = [];
  petArray.forEach((pet) => {
    if (pet.type !== "Fish") {
      petsWithNoFish.push(pet);
    }
  });
  return petsWithNoFish;
}

console.log(returnPetsWithNoFish(pets));
//returnPetsWithNoFish(pets)[ // returns...
//   ({
//     name: "Mr. Pig",
//     type: "Cat",
//     age: 4,
//   },
//   {
//     name: "Bubba",
//     type: "Dog",
//     age: 5,
//   },
//   {
//     name: "Beans",
//     type: "Dog",
//     age: 3,
//   })
// ];

const petsLong = [
  {
    name: "Sparky",
    type: "Fish",
    age: 4,
  },
  {
    name: "Mr. Pig",
    type: "Cat",
    age: 4,
  },
  {
    name: "Bubba",
    type: "Dog",
    age: 5,
  },
  {
    name: "Beans",
    type: "Dog",
    age: 3,
  },
  {
    name: "Mr. Salmon",
    type: "Fish",
    age: 1,
  },
];

function returnLongestPetName(petArr) {
  let str = "";
  petArr.forEach((pet) => {
    if (pet.name.length > str.length) {
      str = pet.name;
    }
  });
  return str;
}

console.log(returnLongestPetName(petsLong)); // returns 'Mr. Salmon'
console.log("**************************************");

//Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.

function iBeforeE(str) {
  console.log(str.replaceAll("ei", "ie"));
}

iBeforeE("ei"); // returns 'ie'
iBeforeE("height"); // returns 'hieght'
iBeforeE("heist"); // returns 'hiest'
iBeforeE("their"); // returns 'thier'
iBeforeE("theirtheir"); // returns ‘thierthier'

console.log("******************* Jan 9 *******************");

function zipArrays(arr1, arr2) {
  let longestLength = arr1.length;
  let tempArr = [];

  if (arr2.length > longestLength) {
    longestLength = arr2.length;
  }
  for (let i = 0; i < longestLength; i++) {
    if (i < arr1.length) {
      tempArr.push(arr1[i]);
    }
    if (i < arr2.length) {
      tempArr.push(arr2[i]);
    }
  }
  console.log(tempArr);
}

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.

zipArrays([], []); // returns []
zipArrays([1], [2]); // returns [1, 2]
zipArrays(["a", "b"], ["c", "d"]); // returns... ['a', 'c', 'b', 'd']
zipArrays([1, 2, "a", "b"], ["bob", null, "sally", 25]); // returns...

zipArrays([1, 2, 3, 4], [2]); // returns [1, 2]

zipArrays([1, 2, 3, 4, 5], ["a", "b", "c"]); // returns [1, 2]

zipArrays([1, 2, 3], ["a", "b", "c", "d", "e"]); // returns [1, 2]
zipArrays([1, 2, 3], []); // returns [1, 2]
zipArrays([], ["a", "b", "c", "d", "e"]); // returns [1, 2]
// [
//   1,
//   'bob',
//   2,
//   null,
//   'a',
//   'sally',
//   'b',
//   25
// ]

//================================= WARM UP

//Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.
console.log("******************* Jan 10 *******************");
const users = [
  {
    firstName: "Justin",
    lastName: "Reich",
    dob: "1923-01-01",
    username: "jreich",
    password: "$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse",
  },
  {
    firstName: "Sally",
    lastName: "Smith",
    dob: "1935-03-11",
    username: "ssmith",
    password: "$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya",
  },
  {
    firstName: "Fred",
    lastName: "Smith",
    dob: "1999-01-21",
    username: "fsmith",
    password: "$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS",
  },
];
function getUserCredentials(userdb) {
  let creds = [];
  userdb.forEach((user) => {
    creds.push({ username: user.username, password: user.password });
  });
  return creds;
}
console.log(getUserCredentials(users)); // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/
