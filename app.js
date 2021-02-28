

(function () {
  window.onpopstate = history.onpushstate = function(e) {
    fillText();
   }

  var fillText = function(){
    var delim = "_";
    var hash = location.hash.substring(1)
  
    var inputArray = hash.split(delim);
  
    for(var i=1;i<inputArray.length; i++){
      document.getElementById('p-'+i).innerHTML = decodeURI(inputArray[i]);
    }
  };

  fillText()
})();