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

/* Edellisten kommenttien tallennus muuttujiin */
let nm1 = "Initial value";
let c1 = "Initial value";
let nm2 = "Initial value";
let c2 = "Initial value";
let nm3 = "Initial value";
let c3 = "Initial value";
let nm4 = "Initial value";
let c4 = "Initial value";
let nm5 = "Initial value";
let c5 = "Initial value";

function commentClick() {

  /* Syötteiden tallennus muuttujiin */
  const namemark = document.getElementById("Namemark").value;
  const comment = document.getElementById("Comment").value;

  /* Lisää kommentti sivustolle: aina uusin kommentti ensimmäiseksi.
  Kun on kymmenen kommenttipaikkaa on täynnä, ala tyhjentämään lopusta */
  
  /* Kommentti nro 1 */
  if ($('#Namemark1').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify1").style.visibility='visible';
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit muuttujiin */
    nm1 = namemark;
    c1 = comment;
  
  /* Kommentti nro 2 */
  } else if ($('#Namemark2').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify2").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark2").innerHTML = nm1;
    document.getElementById("Text2").innerHTML = c1;
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit muuttujiin */
    nm2 = nm1;
    c2 = c1;
    nm1 = namemark;
    c1 = comment;

  /* Kommentti nro 3 */
  } else if ($('#Namemark3').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify3").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark3").innerHTML = nm2;
    document.getElementById("Text3").innerHTML = c2;
    document.getElementById("Namemark2").innerHTML = nm1;
    document.getElementById("Text2").innerHTML = c1;
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit muuttujiin */
    nm3 = nm2;
    c3 = c2;
    nm2 = nm1;
    c2 = c1;
    nm1 = namemark;
    c1 = comment;
  
  /* Kommentti nro 4 */
  } else if ($('#Namemark4').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify4").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark4").innerHTML = nm3;
    document.getElementById("Text4").innerHTML = c3;
    document.getElementById("Namemark3").innerHTML = nm2;
    document.getElementById("Text3").innerHTML = c2;
    document.getElementById("Namemark2").innerHTML = nm1;
    document.getElementById("Text2").innerHTML = c1;
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit muuttujiin */
    nm4 = nm3;
    c4 = c3;
    nm3 = nm2;
    c3 = c2;
    nm2 = nm1;
    c2 = c1;
    nm1 = namemark;
    c1 = comment;
  
  /* Kommentit nro 5 -> */
  } else {
    /* Modify-sign näkyviin */
    document.getElementById("Modify5").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark5").innerHTML = nm4;
    document.getElementById("Text5").innerHTML = c4;
    document.getElementById("Namemark4").innerHTML = nm3;
    document.getElementById("Text4").innerHTML = c3;
    document.getElementById("Namemark3").innerHTML = nm2;
    document.getElementById("Text3").innerHTML = c2;
    document.getElementById("Namemark2").innerHTML = nm1;
    document.getElementById("Text2").innerHTML = c1;
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit muuttujiin */
    nm5 = nm4;
    c5 = c4;
    nm4 = nm3;
    c4 = c3;
    nm3 = nm2;
    c3 = c2;
    nm2 = nm1;
    c2 = c1;
    nm1 = namemark;
    c1 = comment;
  }

  /* Tyhjennä kommenttikenttien arvot */
  document.getElementById("Name-input").value = "";
  document.getElementById("Email-input").value = "";
  document.getElementById("Namemark").value = "";
  document.getElementById("Comment").value = "";
  
}

function modifyComment1(){
  if (document.getElementById("Text1").contentEditable == "false") {
    document.getElementById("Text1").contentEditable = "true";
    document.getElementById("Text1").style.caretColor = "red";
    document.getElementById("Text1").style.border = "thin dashed #33393D" 
    document.getElementById("Modify1").innerHTML = "Valmis";
  } else {
    document.getElementById("Text1").contentEditable = "false";
    document.getElementById("Text1").style.border = "none" 
    document.getElementById("Modify1").innerHTML = "Muokkaa";
  }
}
function modifyComment2(){
  if (document.getElementById("Text2").contentEditable == "false") {
    document.getElementById("Text2").contentEditable = "true";
    document.getElementById("Text2").style.caretColor = "red";
    document.getElementById("Text2").style.border = "thin dashed #33393D" 
    document.getElementById("Modify2").innerHTML = "Valmis";
  } else {
    document.getElementById("Text2").contentEditable = "false";
    document.getElementById("Text2").style.border = "none" 
    document.getElementById("Modify2").innerHTML = "Muokkaa";
  }
}
function modifyComment3(){
  if (document.getElementById("Text3").contentEditable == "false") {
    document.getElementById("Text3").contentEditable = "true";
    document.getElementById("Text3").style.caretColor = "red";
    document.getElementById("Text3").style.border = "thin dashed #33393D" 
    document.getElementById("Modify3").innerHTML = "Valmis";
  } else {
    document.getElementById("Text3").contentEditable = "false";
    document.getElementById("Text3").style.border = "none" 
    document.getElementById("Modify3").innerHTML = "Muokkaa";
  }
}
function modifyComment4(){
  if (document.getElementById("Text4").contentEditable == "false") {
    document.getElementById("Text4").contentEditable = "true";
    document.getElementById("Text4").style.caretColor = "red";
    document.getElementById("Text4").style.border = "thin dashed #33393D" 
    document.getElementById("Modify4").innerHTML = "Valmis";
  } else {
    document.getElementById("Text4").contentEditable = "false";
    document.getElementById("Text4").style.border = "none" 
    document.getElementById("Modify4").innerHTML = "Muokkaa";
  }
}
function modifyComment5(){
  if (document.getElementById("Text5").contentEditable == "false") {
    document.getElementById("Text5").contentEditable = "true";
    document.getElementById("Text5").style.caretColor = "red";
    document.getElementById("Text5").style.border = "thin dashed #33393D" 
    document.getElementById("Modify5").innerHTML = "Valmis";
  } else {
    document.getElementById("Text5").contentEditable = "false";
    document.getElementById("Text5").style.border = "none" 
    document.getElementById("Modify5").innerHTML = "Muokkaa";
  }
}
