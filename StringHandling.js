var name="Rishi Raj Gupta";
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Substring
console.log(`First name is ${name.substr(0,name.indexOf(" "))}`);
console.log(`Last name is ${name.substr(name.indexOf(" ")+1)}`);