const users = [
  {
    id: 1,
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
    yearsOfExperience: 5,
  },
  {
    id: 2,
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
    yearsOfExperience: 6,
  },
  {
    id: 3,
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
    yearsOfExperience: 7,
  },
  {
    id: 4,
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
    yearsOfExperience: 8,
  },
  {
    id: 5,
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
    yearsOfExperience: 9,
  },
];

const filteredUsers = users.filter((user) => user.languages.length >= 3);

const emails = users.map((user) => user.email);

const totalYears = users.reduce((acc, user) => {
  return acc + user.yearsOfExperience;
}, 0);

const longestEmail = users.reduce((a, b) => {
  return a.email.length > b.email.length ? a : b;
});

const nameStr =
  users
    .reduce((acc, user) => `${acc} ${user.name},`, "your instructors are:")
    .slice(0, -1) + ".";

const uniqueLangs = users.reduce((acc, user) => {
  for (let lang of user.languages) {
    if (!acc.includes(lang)) {
      acc.push(lang);
    }
  }
  return acc;
}, []);

console.log(uniqueLangs);

console.log(nameStr);

console.log(longestEmail);

console.log(totalYears);

console.log(totalYears / users.length);

console.log(emails);

console.log(filteredUsers);
