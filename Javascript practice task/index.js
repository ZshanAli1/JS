//Question 2
let a = "Zeeshan";
console.log("Hey " + a + " would you like to learn some Python today");
//Q3
console.log(a.toUpperCase());
console.log(a.toLowerCase());
////////////////////////////////////////baad mn krta hn (iii)
//Q4
console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new."`
);
//Q5
let quote = "I have no quotes";
console.log(`${a} once said, ${quote}`);
//Q6
let my_Name = "     Zeeshan Ali          ";
console.log(my_Name);
my_Name = my_Name.trim();
console.log(my_Name);
//Q7
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(64 / 8);
//Q8
let fav_No = 78;
console.log("my favourite number is " + fav_No);
//Q9
//let fav_No = 78;
//console.log("my favourite number is " + fav_No);
//Q10
let names = ["Zeeshan", "Ali", "Osama", "Faisal"];
for (i in names) {
  console.log(names[i]);
}
//Q11
for (i in names) {
  console.log("Hello " + names[i]);
}
//Q12
let transport = ["Parado", "Markx", "Insight", "sportage"];
let statement = [
  "i'd just let go ",
  "i'd like to keep a ",
  "i'd like to own ",
  "i'd like to drive ",
];
for (i in names) {
  console.log(statement[i] + transport[i]);
}
//Q13
let lists = ["ali", "hamza", "asif", "adil", "arif"];
let invite = [];
for (i in lists) {
  if (lists[i] == "ali" || lists[i] == "asif" || lists[i] == "arif") {
    invite.push(lists[i]);
  }
}
for (i in invite) {
  console.log("Welcome invitation to " + invite[i]);
}
//Q14
console.log("asif can not attend dinner");
invite.forEach((value, index) => {
  if (value == "asif") {
    invite[index] = "hamza";
  }
});
for (i in invite) {
  console.log("Welcome invitation to " + invite[i]);
}
//Q15
console.log("We found even bigger dinner table");
invite.unshift("ASIM");
inviteListLen = Number(invite.length);
console.log(inviteListLen);
invite.splice(inviteListLen / 2, 0, "Zeeshan");
invite.push("Shahid");
for (i in invite) {
  console.log("Welcome invitation to " + invite[i]);
}
//Q16
console.log("We can invite only two people");
inviteListLen = invite.length;
for (i = 0; i < inviteListLen; i++) {
  console.log("Sorry we unable to invite you " + invite.pop());
  if (invite.length == 2) {
    break;
  }
}
for (i in invite) {
  console.log("Welcome invitation to " + invite[i]);
}
console.log("invite array before " + invite);
let leftGuests = invite;
invite.splice(0, invite.length);
console.log("we have in array after " + invite);
//Q17
let places = ["Peshawar", "Karachi", "Lahore", "Multan", "Bahawalpur"];
console.log("My fav places \n" + places);
places.sort();
console.log("\nMy fav places after sort \n" + places);
places.reverse();
console.log("\nMy fav places after reverse \n" + places);
places.reverse();
console.log("\nMy fav places back to sorted alphabatical \n" + places);
//Q19
console.log("Invited guests " + leftGuests);
//Q20
let Mountains = ["Everest", "K2", "Denali", "Naanga"];
let Rivers = ["Sindh", "Ravi", "Chanab", "Biyaas"];
let Countries = ["Pakistan", "India", "Bangladesh", "Afghanistan"];
const Cities = ["Lahore", "Multan", "Karachi", "Bahawalpur"];

//Q21
let obj = {
  mountain: Mountains,
  river: Rivers,
  country: Countries,
  city: Cities,
};
//Q22
//-------->  Cities = [];     ERROR Changing size of const array
//Q23
if (5 == "5") console.log(`5=="5" is true`); // T
if (5 === "5") console.log(`5==="5" is false`); // F
if (true == 1) console.log(`true == 1 is true`); // T
if (true == 0) console.log(`true == 0 is false`); // F
if (true) console.log(`true is true`); // T
if (false) console.log(`false is false`); // F
if (0.5) console.log(`0.5 is true`); // T
if (0) console.log(`0 is false`); // F
if (!false) console.log(`!false is true`); // T
if (!true) console.log(`!true is false\n\n`); // F
//Q24
if ("Ali" == "Ali") console.log(`"Ali" == "Ali" is true`); // T
if ("Ali" !== "Ali") console.log(`"Ali" !== "Ali" is false`); // F
if ("Ali" !== "5") console.log(`"Ali" !== "5" is true`); // T
if ("Ali" == "5") console.log(`"Ali" == "5" is false`); // F
if (1 & 1) console.log(`1&1 is true`); // T
if (1 & 0) console.log(`1&0 is false`); // F
if (0 || 1) console.log(`0||1 is true`); // T
if (0 || 0) console.log(`0||0 is false`); // F
let li;
if (!li) console.log(`!li is true`); // T
if (li) console.log(`li is false`); // F
//Q25
let alien_Color = "yellow";
if (alien_Color == "green") console.log("You just earned 5 points");
if (alien_Color == "yellow");
//Q26
if (alien_Color == "green") console.log("You just earned 5 points");
else;
if (alien_Color == "yellow") console.log("You just earned 5 points");
else;
//Q27
if (alien_Color == "green") console.log("You just earned 5 points");
else if (alien_Color == "yellow") console.log("You just earned 10 points");
else console.log("You just earned 15 points");
//Q28
let baby = 15;
if (baby >= 0 && baby <= 2) console.log("Baby");
else if (baby >= 2 && baby <= 4) console.log("toddler");
else if (baby >= 4 && baby <= 13) console.log("kid");
else if (baby >= 13 && baby <= 20) console.log("teenager");
else if (baby >= 20 && baby <= 65) console.log("Adult");
else console.log("old");
//Q29
let favFruit = ["Apple", "Banana", "Date"];
function searchF(value) {
  return value == "Apple";
}
function searchF(value) {
  return value == "Apple";
}
//Q30
let userName = ["admin", "eric", "alice", "bob", "adam"];
function greet(val) {
  if (val == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${val}, thank you for logging in again.`);
  }
}
let radmVal = Math.floor(Math.random() * 5);
greet(userName[radmVal]);
//Q31
userName.splice(0, userName.length);
if (userName.length == 0) {
  console.log("We need to find some users!");
}
//Q32
let current_User = ["admin", "eric", "alice", "bob", "adam"];
let new_User = ["jhon", "Eric", "mark", "bob", "wood"];
for (let x in new_User) {
  for (let y in current_User) {
    if (new_User[x].toLowerCase() == current_User[y].toLowerCase()) {
      console.log(new_User[x] + " user already Exists!");
      break;
    } else if (y == current_User.length - 1) {
      console.log(new_User[x] + " username available");
    }
  }
}
//Q33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((val) => {
  if (val == 1) console.log(val + "st\n");
  else if (val == 2) console.log(val + "nd\n");
  else if (val == 3) console.log(val + "rd\n");
  else console.log(val + "th\n");
});
//Q34
let pizza = ["pepperoni", "cheese", "tikka"];
for (i in pizza) {
  if (pizza[i] == "pepperoni") console.log("I like it because of pepper");
  else if (pizza[i] == "cheese") console.log("I am cheese lover");
  else console.log("I like it's tikka taste");
}
console.log("I like it because of pepper. i like spice");
console.log("I like it because of cheese. i love cheesy");
console.log("I like it because of tikka. it is really tasty");
//Q35
let animal = ["Horse", "Lama", "Bull"];
for (i in animal) {
  if (animal[i] == "Horse") console.log(animal[i] + " is Strong and loyal");
  else if (animal[i] == "Lama") console.log(animal[i] + " is Strong and tall");
  else console.log(animal[i] + " is Heavy Duty animal");
}
console.log("All of these animals have 4 legs");
//Q36
function make_Shirt(size, msg) {
  console.log(`Shirt's size is ${size} \n Message on shirt is ${msg}`);
}
make_Shirt("Large", "Hey handsome");
//Q37
make_Shirt("L", "I love JavaScript");
make_Shirt("M", "I love JavaScript");
//Q38
function describe_City(city, country) {
  console.log(`${city} is in ${country}`);
}
let mulk = "Pakistan";
describe_City("karachi", mulk);
describe_City("dehli", mulk);
describe_City("lahore", mulk);
//Q39
function cityCountry(city, country) {
  console.log(`"${city}, ${country}"`);
}
cityCountry("karachi", mulk);
cityCountry("lahore", mulk);
cityCountry("islamabad", mulk);
//Q40
let dict = [];
function makeAlbum(Name, album) {
  dict.push({ artistName: Name, albumName: album });
}
makeAlbum("Junaid Jamshed", "Vital signs");
makeAlbum("Farhan saeed", "Jal");
makeAlbum("Zayn", "OneDiraction");
console.log(dict);
let dict2 = [];
function makeAlbums(Name, album, no_ofTracks) {
  dict2.push({
    artistName: Name,
    albumName: album,
    tracksOnAlbum: no_ofTracks,
  });
}
makeAlbums("Junaid Jamshed", "Vital signs", 5);
makeAlbums("Farhan saeed", "Jal", 8);
makeAlbums("Zayn", "OneDiraction", 3);
console.log(dict2);
//Q41
let magician = ["Ali", "Bilal", "Chitta", "Durez"];
function magicians(magician) {
  console.log(magician);
}
magicians(magician);
//Q42
function make_Great(val, index) {
  magician[index] += " The Super magician";
}
function show_array(arr) {
  console.log(magician);
}
magician.forEach(make_Great);
show_array(magician);
