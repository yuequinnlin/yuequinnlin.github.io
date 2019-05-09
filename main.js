function init() {
   console.log("Quinn >>>>>>>>>>>>>>>")
   $.getJSON("/discs.json", function(json) {
       console.log(json); // this will show the info it in firebug console
   });

   var mydata = JSON.parse(data);
}