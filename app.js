// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Blazej', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Swimming');
// hobbies.unshift('Reading');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(2); 
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

const personData = [{ name: 'Blazej' }, { name: 'Max' }];
console.log(personData.indexOf({ name: 'Max' }));

const max = personData.find((person, idx, persons) => {
  return  person.name === 'Max';
});

max.name = 'Anna';

console.log(max, personData);

const blazejIndex = personData.findIndex((person, idx, persons) => {
  return  person.name === 'Blazej';
});

console.log(blazejIndex);