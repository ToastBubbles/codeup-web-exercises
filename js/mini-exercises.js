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

//Write a function, iBeforeE that takes in a string and returns the string with any 'ei' characters replaced with 'ie'.

function iBeforeE(str) {
  console.log(str.replaceAll("ei", "ie"));
}

iBeforeE("ei"); // returns 'ie'
iBeforeE("height"); // returns 'hieght'
iBeforeE("heist"); // returns 'hiest'
iBeforeE("their"); // returns 'thier'
iBeforeE("theirtheir"); // returns 'thierthier'

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

console.log("******************* Short circuits *******************");
let bool = false;

console.log("" && "bool is true");

console.log("******************* jan 18th *******************");

//================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable.
//A neighborhood is desirable if the median home price is less than 300000,
//crime rates are low, and the total rating of schools is at least 24.

// example data...

const neighborhood1 = {
  neighborhood: "Lovely Estates",
  medianHomePrice: 280000,
  pool: true,
  tennis: false,
  crimeRate: "low",
  schools: [
    { name: "Elementary School", rating: 8 },
    { name: "Middle School", rating: 6 },
    { name: "High School", rating: 8 },
  ],
};

const neighborhood2 = {
  neighborhood: "Luminous Estates",
  medianHomePrice: 270000,
  pool: true,
  tennis: false,
  crimeRate: "high",
  schools: [
    { name: "Elementary School", rating: 8 },
    { name: "Middle School", rating: 8 },
    { name: "High School", rating: 8 },
  ],
};

const neighborhood3 = {
  neighborhood: "Oak Mountain",
  medianHomePrice: 290000,
  pool: false,
  tennis: false,
  crimeRate: "low",
  schools: [
    { name: "Elementary School", rating: 8 },
    { name: "Middle School", rating: 8 },
    { name: "High School", rating: 8 },
  ],
};

const neighborhood4 = {
  neighborhood: "Ginormous Acres",
  medianHomePrice: 350000,
  pool: true,
  tennis: true,
  crimeRate: "low",
  schools: [
    { name: "Elementary School", rating: 9 },
    { name: "Middle School", rating: 9 },
    { name: "High School", rating: 9 },
  ],
};

function checkNeighborhood(hood) {
  if (hood.medianHomePrice < 300000 && hood.crimeRate === "low") {
    let schoolVal = 0;
    hood.schools.forEach((school) => {
      schoolVal += school.rating;
    });
    if (schoolVal >= 24) {
      return hood.neighborhood + " is a great fit.";
    }
  }
  return hood.neighborhood + " might not be the best choice.";
}

console.log(checkNeighborhood(neighborhood1)); // returns false due to school rating
console.log(checkNeighborhood(neighborhood2)); // returns false due to crime rate
console.log(checkNeighborhood(neighborhood3)); // returns true
console.log(checkNeighborhood(neighborhood4)); // returns false due to median home price

console.log("*********************** jan 19 *************************");

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// 'a' or 'A' becomes '@'
// 'i' or 'I' becomes '1'
// 's' or 'S' becomes '$'
//

function encodeStr(str) {
  let lowerStr = str.toLowerCase();
  let chars = [
    ["a", "@"],
    ["i", "1"],
    ["s", "$"],
  ];

  chars.forEach((pair) => {
    lowerStr = lowerStr.replaceAll(pair[0], pair[1]);
  });

  return lowerStr;
}
console.log(encodeStr("apple")); // returns '@pple'
console.log(encodeStr("codeup")); // returns 'codeup'
console.log(encodeStr("SASS")); // returns '$@$$'
console.log(encodeStr("bike")); // returns 'b1ke'

console.log("*********************** jan19 ajax1 *************************");
// $ajax(https://pokeapi.co/api/v2/pokemon/pikachu)
$.get("https://pokeapi.co/api/v2/pokemon/pikachu").done(function (data) {
  // console.log(data.name);
});

$.get("https://swapi.dev/api/films/1").done(function (data) {
  // console.log(data.director);
});
let i = 1;

$.get("https://pokeapi.co/api/v2/pokemon/").done(function (data) {
  $.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${data.count}`).done(
    (data2) => {
      data2.results.forEach((poke) => {
        // console.log(poke.name, i);
        i++;
      });
    }
  );
  // let iterations = data.count / 20;

  // console.log(iterations);
  for (let k = 0; k <= data.count; k++) {
    // console.log(data.count);
    // if (k * 20 - 1 < data.count) {
    // }
  }

  // for (let k = 0; k <= iterations; k++) {
  //   // console.log(data.count);
  //   // if (k * 20 - 1 < data.count) {
  //   $.get(
  //     `https://pokeapi.co/api/v2/pokemon/?offset=${k * 20 - 1}&limit=${
  //       data.count
  //     }`
  //   ).done((data2) => {
  //     data2.results.forEach((poke) => {
  //       console.log(poke.name, i);
  //       i++;
  //     });
  //   });
  //   // }
  // }

  // if (i < data.count) {
  //   $.get(data.next).done((data2) => {
  //     data2.results.forEach((poke2) => {
  //       // console.log(poke2.name, i);
  //       i++;
  //     });
  //   });
  //   // i += data.results.length;
  // }
  // data.results.forEach((poke) => {
  //   // console.log(poke.name, i);
  //   i++;
  // });
  // console.log(data);
});

// !! MINI-EXERCISE 1 !!

/*

        1. Make a GET request using jQuery AJAX to the Pokemon API (https://pokeapi.co/api/v2/pokemon/pikachu) and print out the response
        2. Try making some requests to the Star Wars API. Can you find the director of `A New Hope`?

     */

// ====================== EXPLORING JSON DATA

// !! MINI-EXERCISE 2 !!

/*

        1. Print out various values from the orders.json file
        2. Print various values from the Star Wars or Pokemon API

     */

console.log("*********************** jan24 *************************");

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.

const strs = [
  {
    id: 1,
    str: "hello",
  },
  {
    id: 2,
    str: "world",
  },
  {
    id: 3,
    str: "codeup",
  },
  {
    id: 4,
    str: "x",
  },
];

function reverseStrings(arr) {
  let reversedArray = [];
  arr.forEach((obj) => {
    reversedArray.push({
      id: obj.id,
      str: obj.str.split("").reverse().join(""),
    });
  });
  return reversedArray;
}

console.log(reverseStrings(strs)); // returns...

// [
// 	{
// 		id: 1,
// 		str: 'olleh'
// 	},
// 	{
// 		id: 2,
// 		str: 'dlrow'
// 	},
// 	{
// 		id: 3,
// 		str: 'puedoc'
// 	},
// 	{
// 		id: 4,
// 		str: 'x'
// 	}
// ]
