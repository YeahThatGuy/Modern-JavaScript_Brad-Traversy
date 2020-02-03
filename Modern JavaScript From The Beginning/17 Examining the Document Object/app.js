let val;

val = document;
val = document.all;
// access elements from the DOM through the document.all collection
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// select without selectors; possible but not recommended; the element is put in a forms collection, so several forms can be accessed by their index
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[1].id;
val = document.links[2].className;
val = document.links[2].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("integrity");

// forEach works only on Arrays; the collection forEach loop below will output an error
let scripts = document.scripts;

// scripts.forEach(function(script) {
//     console.log(script);
// });

// Collection to Array conversion
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script);
});

console.log(val);