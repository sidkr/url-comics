(function () {
  var urlParams = new URLSearchParams(window.location.search),
    share = urlParams.get("share"),
    editSection = document.getElementById("edit"),
    generateBtn = document.getElementById("generate"),
    shareSection = document.getElementsByClassName("share-container")[0],
    shareLink = document.getElementById("share-link"),
    toast = document.getElementsByClassName("toast")[0],
    cOwnSectio = document.getElementById("c-own"),
    shareBtn = document.getElementById("share-icon"),
    shareUrl = "",
    editMode = true, //default
    fillText = function (inputArray) {
      if (!editMode) {
        var delim = "_",
          hash = location.hash.substring(1),
          inputArray = hash.split(delim);
      }

      for (var i = 0; i < 3; i++) {
        document.getElementById("p-" + i).innerHTML = decodeURI(inputArray[i]);
      }

      document.getElementById("c").scrollIntoView();
    },
    copyToClipBoard = function () {
      //Copy to clipboard
      shareLink.select();
      document.execCommand("copy");

      //Show toast
      toast.className = "toast show";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 3000);
    };

  if (share === "1") {
    editMode = false;
    editSection.style.display = "none";
    cOwnSectio.style.display = "block";
    fillText();
  } else {
    editSection.style.display = "block";
    shareSection.style.display = "block";
  }

  generateBtn.addEventListener("click", function (e) {
    var inputArray = [];
    document.querySelectorAll("input").forEach(function (e) {
      inputArray.push(decodeURI(e.value));
    });
    fillText(inputArray);
    //Generate share link
    var link =
      window.location.href +
      "?share=1#" +
      inputArray[0] +
      "_" +
      inputArray[1] +
      "_" +
      inputArray[2];
    shareLink.value = encodeURI(link);
    shareUrl = encodeURI(link);
  });

  shareBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (navigator.share) {
      navigator
        .share({
          title: "Hash Comics Present...",
          url: shareUrl,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      //fallback copy to clipboard
      copyToClipBoard();
    }
  });
})();
