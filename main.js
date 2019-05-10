function init() {
   $.getJSON("/discs.json", function(json) {
       loadItems(json); // this will show the info it in firebug console
   });
}


// loadItems
// take a json file
// return a list of items to load the screen
function loadItems(data) {
   for (i = 0; i < data.discs.length; i++) { 
      console.log("Quinn >>>>>>>>>>>>>>> disc = ", data.discs[i]);
   }

} 