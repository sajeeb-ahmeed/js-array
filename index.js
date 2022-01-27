var myFriendsNames = ["ashik", "salman", "jhankar", "sharukh"];
var myFriendsAges = [21, 22, 34, 45];
var friendsProperty = [1000, 10000, 5000, 10000];
var muriChanacurFee = [101, 137, 523, 422];
var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(myFriendsNames);
// console.log(typeof myFriendsNames);
var vowelsCount = vowels.length;
console.log(vowelsCount);

//array-index
var friendNameIndex = myFriendsNames.indexOf("jhankar");
console.log(friendNameIndex);
var index = vowels.indexOf('o');
console.log(index);



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23232, 33, 4354, 435, 34534, 32, 543, ];
var numbersIndex = numbers.indexOf(32);
var numbersIndexs = numbers.indexOf(9);
console.log(numbersIndex);
console.log(numbersIndexs);
//position count
var number1 = numbers[9];
console.log(number1);
var positions = myFriendsNames[2];
var positions2 = myFriendsNames[2322]; //undefined
console.log(positions);
console.log(positions2);

// push-pop
myFriendsNames.push('Afridi');
myFriendsNames.push('Ronaldo', 'Messi', 'Naymar');
console.log(myFriendsNames);
console.log(myFriendsNames);
//pop
myFriendsNames.pop();
myFriendsNames.shift(); // from beging
console.log(myFriendsNames);
myFriendsNames.unshift();
console.log(myFriendsNames); // add from beging