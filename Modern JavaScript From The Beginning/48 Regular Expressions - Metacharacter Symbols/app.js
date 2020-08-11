// Create RegExp with Literal Characters
let re;
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;         // Must start with that symbol
re = /world$/i;     // Must end with that symbol or word
re = /^hello$/i;    // Must start with "h" and end with "o"
re = /h.llo/i;      // Matches any ONE character in the dot's place
re = /h*llo/i;      // Matches none to any number of characters in the asterisk's place
re = /gre?a?y/i;    // Match optional characters, i.e. words that have different spellings; since they are optional, nothing in their place will also work
re = /gre?a?y\?/i;    // Escape characters, in this example make "?" not optional metacharacter symbol but actual literal character

// String to match
const str = "Grey?";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);