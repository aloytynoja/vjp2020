/* JS mobiilinavigaatiolle */
function navClick() {
    var x = document.getElementById("Links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

/* JS kommenttikentälle */

const nametag = document.createElement("h6");
var nameelement = document.getElementById("newCommentHeader");
const commenttag = document.createElement("p");
var commentelement = document.getElementById("newComment");
var namemark = document.getElementById("Namemark").value;
var comment = document.getElementById("Comment").value;

function commentClick() {

  /* Lisää viesti sivustolle */
  /* Alla oleva vielä toistaiseksi väärin, käytetty lähde: https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript
  document.getElementById("all-comments").innerHTML =
    nametag.appendChild(namemark)
    nameelement.append(nametage)
    commenttag.appendChild(comment)
    commentelement.appendChild(commenttag);
    */

  /* Tyhjennä kommenttikenttien arvot */
  document.getElementById("Name-input").value = ""
  document.getElementById("Email-input").value = ""
  document.getElementById("Namemark").value = ""
  document.getElementById("Comment").value = ""
  
}