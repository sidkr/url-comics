

(function () {
  // Just a simple POC app.
  var app = function(){
    var delim = "_";
    var hash = location.hash.substring(1)
  
    var inputArray = hash.split(delim);
  
    for(var i=1;i<inputArray.length; i++){
      document.getElementById('p-'+i).innerHTML = decodeURI(inputArray[i]);
    }
  };


  setTimeout(app, 100);  
 
})();