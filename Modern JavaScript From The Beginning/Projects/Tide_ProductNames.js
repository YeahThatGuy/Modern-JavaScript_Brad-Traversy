// Tide, grab all product names from https://tide.com/en-us/shop/type#viewtype:gridview/facets:/category:type/page:5/sortby:rating-desc/productsdisplayed:undefined/cwidth:3/promotilesenabled:false/pcwidth:/cwidth:3/pscroll: 
let objj = document.querySelectorAll(".caption h2");

let aTag = [];
objj.forEach(function(node){
    aTag.push(node.getElementsByTagName("a").item(0).getAttribute("title"));
});
console.log(aTag.toString());   