// var items=["Pen", "Pencil", "Eraser", "Sharpener", "Notebook"];

// console.log(items);  // to print whole array
// console.log(items[0]);  // to print first element of array
// console.log(items[1]); // to print second element of array

// console.log(items.length);
// console.log(items[items.length-1]) // to print last element of array

// var items=["Pen", "Pencil", "Eraser", "Sharpener", "Notebook"];
// console.log(`All items are : ${items}`);
// console.log(`First item is : ${items[0]}`);
// console.log(`Second item is : ${items[1]}`);
// console.log(`Number of items are : ${items.length}`);
// console.log(`Last item is : ${items[items.length-1]}`);

var items=["Pen", "Pencil", "Eraser", "Sharpener", "Notebook"];
console.log(items);
items.push("paper");  // to add element at end of array
console.log(items);
items.splice(2,2,"rani","rishi");  // to replace element at index 2 with "rani"  why 1 is used because we want to replace only 1 element
console.log(items);
items.unshift("gum");   // to add element at beginning of array
console.log(items);

