function init() {
   $.getJSON("/discs.json", function(json) {
       loadItems(json); // this will show the info it in firebug console
   });
}


// loadItems
// take a json file
// return a list of items to load the screen
function loadItems(items) {
   var list = [];

   forEach(items, function(item) {
      console.log("see item ", item);
   });
} 