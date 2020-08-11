let re;
// wrapping in /content/ turns the variable into a RegEx expression
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search = searches for all instances of hello

// console.log(re);
// console.log(re.source);

// exec() - Return result array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false; case-sensitive by default, but can add i to the RegEx expression to become insensitive
// const result = re.test("Hello");
// console.log(result);

// match() - Return result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Returns index of first match; if not found returns -1
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern; searches for a value in the string and replaces with new value
const str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);