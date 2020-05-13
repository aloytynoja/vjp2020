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

function commentClick() {

  /* Syötteiden tallennus muuttujiin */
  const namemark = document.getElementById("Namemark").value;
  const comment = document.getElementById("Comment").value;

  /* Lisää kommentti sivustolle: aina uusin kommentti ensimmäiseksi.
  Kun viisi kommenttipaikkaa on täynnä, ala tyhjentämään lopusta */
  
  /* Kommentti nro 1 */
  if ($('#Namemark1').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify1").style.visibility='visible';
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit localStorageen */
    localStorage.setItem('nm1', document.querySelector('#Namemark1').innerHTML);
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML);
  
  /* Kommentti nro 2 */
  } else if ($('#Namemark2').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify2").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark2").innerHTML = localStorage.getItem('nm1');
    document.getElementById("Text2").innerHTML = localStorage.getItem('text1');
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit localStorageen */
    localStorage.setItem('nm2', document.querySelector('#Namemark2').innerHTML);
    localStorage.setItem('text2', document.querySelector('#Text2').innerHTML);
    localStorage.setItem('nm1', document.querySelector('#Namemark1').innerHTML);
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML);

  /* Kommentti nro 3 */
  } else if ($('#Namemark3').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify3").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark3").innerHTML = localStorage.getItem('nm2');
    document.getElementById("Text3").innerHTML = localStorage.getItem('text2');
    document.getElementById("Namemark2").innerHTML = localStorage.getItem('nm1');
    document.getElementById("Text2").innerHTML = localStorage.getItem('text1');
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit localStorageen */
    localStorage.setItem('nm3', document.querySelector('#Namemark3').innerHTML);
    localStorage.setItem('text3', document.querySelector('#Text3').innerHTML);
    localStorage.setItem('nm2', document.querySelector('#Namemark2').innerHTML);
    localStorage.setItem('text2', document.querySelector('#Text2').innerHTML);
    localStorage.setItem('nm1', document.querySelector('#Namemark1').innerHTML);
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML);
  
  /* Kommentti nro 4 */
  } else if ($('#Namemark4').is(':empty')) {
    /* Modify-sign näkyviin */
    document.getElementById("Modify4").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark4").innerHTML = localStorage.getItem('nm3');
    document.getElementById("Text4").innerHTML = localStorage.getItem('text3');
    document.getElementById("Namemark3").innerHTML = localStorage.getItem('nm2');
    document.getElementById("Text3").innerHTML = localStorage.getItem('text2');
    document.getElementById("Namemark2").innerHTML = localStorage.getItem('nm1');
    document.getElementById("Text2").innerHTML = localStorage.getItem('text1');
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit localStorageen */
    localStorage.setItem('nm4', document.querySelector('#Namemark4').innerHTML);
    localStorage.setItem('text4', document.querySelector('#Text4').innerHTML);
    localStorage.setItem('nm3', document.querySelector('#Namemark3').innerHTML);
    localStorage.setItem('text3', document.querySelector('#Text3').innerHTML);
    localStorage.setItem('nm2', document.querySelector('#Namemark2').innerHTML);
    localStorage.setItem('text2', document.querySelector('#Text2').innerHTML);
    localStorage.setItem('nm1', document.querySelector('#Namemark1').innerHTML);
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML);
  
  /* Kommentit nro 5 -> */
  } else {
    /* Modify-sign näkyviin */
    document.getElementById("Modify5").style.visibility='visible';
    /* Siirrä vanhoja alaspäin */
    document.getElementById("Namemark5").innerHTML = localStorage.getItem('nm4');
    document.getElementById("Text5").innerHTML = localStorage.getItem('text4');
    document.getElementById("Namemark4").innerHTML = localStorage.getItem('nm3');
    document.getElementById("Text4").innerHTML = localStorage.getItem('text3');
    document.getElementById("Namemark3").innerHTML = localStorage.getItem('nm2');
    document.getElementById("Text3").innerHTML = localStorage.getItem('text2');
    document.getElementById("Namemark2").innerHTML = localStorage.getItem('nm1');
    document.getElementById("Text2").innerHTML = localStorage.getItem('text1');
    /* Päivitä uusin */
    document.getElementById("Namemark1").innerHTML = namemark;
    document.getElementById("Text1").innerHTML = comment;
    /* Tallenna kommentit localStorageen */
    localStorage.setItem('nm5', document.querySelector('#Namemark5').innerHTML);
    localStorage.setItem('text5', document.querySelector('#Text5').innerHTML);
    localStorage.setItem('nm4', document.querySelector('#Namemark4').innerHTML);
    localStorage.setItem('text4', document.querySelector('#Text4').innerHTML);
    localStorage.setItem('nm3', document.querySelector('#Namemark3').innerHTML);
    localStorage.setItem('text3', document.querySelector('#Text3').innerHTML);
    localStorage.setItem('nm2', document.querySelector('#Namemark2').innerHTML);
    localStorage.setItem('text2', document.querySelector('#Text2').innerHTML);
    localStorage.setItem('nm1', document.querySelector('#Namemark1').innerHTML);
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML);
  }

  /* Tyhjennä syötteiden arvot */
  document.getElementById("Name-input").value = "";
  document.getElementById("Email-input").value = "";
  document.getElementById("Namemark").value = "";
  document.getElementById("Comment").value = "";
  
}

/* Muokkaukset ja niiden tallentaminen jokainen kommenttikenttä kerrallaan */

/* Kommentti 1 */
function modifyComment1(){
  /* Tee kommenttikenttä muokattavaksi ja muokkaa visuaalisia elementtejä */
  if (document.getElementById("Text1").contentEditable == "false") {
    document.getElementById("Text1").contentEditable = "true";
    document.getElementById("Text1").style.caretColor = "red";
    document.getElementById("Text1").style.border = "thin dashed #33393D" 
    document.getElementById("Modify1").innerHTML = "Valmis";

  /* Muokkaus pois päältä */
  } else {
    /* Muokatun elementin tallennus */
    localStorage.setItem('text1', document.querySelector('#Text1').innerHTML)
    /* Muokkaa visuaaliset elementit alkuperäisiksi */
    document.getElementById("Text1").contentEditable = "false";
    document.getElementById("Text1").style.border = "none" 
    document.getElementById("Modify1").innerHTML = "Muokkaa";
  }
}

/* Kommentti 2 */
function modifyComment2(){
  /* Tee kommenttikenttä muokattavaksi ja muokkaa visuaalisia elementtejä */
  if (document.getElementById("Text2").contentEditable == "false") {
    document.getElementById("Text2").contentEditable = "true";
    document.getElementById("Text2").style.caretColor = "red";
    document.getElementById("Text2").style.border = "thin dashed #33393D" 
    document.getElementById("Modify2").innerHTML = "Valmis";

  /* Muokkaus pois päältä */
  } else {
    /* Muokatun elementin tallennus */
    localStorage.setItem('text2', document.querySelector('#Text2').innerHTML)
    /* Muokkaa visuaaliset elementit alkuperäisiksi */
    document.getElementById("Text2").contentEditable = "false";
    document.getElementById("Text2").style.border = "none" 
    document.getElementById("Modify2").innerHTML = "Muokkaa";
  }
}

/* Kommentti 3 */
function modifyComment3(){
  /* Tee kommenttikenttä muokattavaksi ja muokkaa visuaalisia elementtejä */
  if (document.getElementById("Text3").contentEditable == "false") {
    document.getElementById("Text3").contentEditable = "true";
    document.getElementById("Text3").style.caretColor = "red";
    document.getElementById("Text3").style.border = "thin dashed #33393D" 
    document.getElementById("Modify3").innerHTML = "Valmis";

  /* Muokkaus pois päältä */
  } else {
    /* Muokatun elementin tallennus */
    localStorage.setItem('text3', document.querySelector('#Text3').innerHTML)
    /* Muokkaa visuaaliset elementit alkuperäisiksi */
    document.getElementById("Text3").contentEditable = "false";
    document.getElementById("Text3").style.border = "none" 
    document.getElementById("Modify3").innerHTML = "Muokkaa";
  }
}

/* Kommentti 4 */
function modifyComment4(){
  /* Tee kommenttikenttä muokattavaksi ja muokkaa visuaalisia elementtejä */
  if (document.getElementById("Text4").contentEditable == "false") {
    document.getElementById("Text4").contentEditable = "true";
    document.getElementById("Text4").style.caretColor = "red";
    document.getElementById("Text4").style.border = "thin dashed #33393D" 
    document.getElementById("Modify4").innerHTML = "Valmis";

  /* Muokkaus pois päältä */
  } else {
    /* Muokatun elementin tallennus */
    localStorage.setItem('text4', document.querySelector('#Text4').innerHTML)
    /* Muokkaa visuaaliset elementit alkuperäisiksi */
    document.getElementById("Text4").contentEditable = "false";
    document.getElementById("Text4").style.border = "none" 
    document.getElementById("Modify4").innerHTML = "Muokkaa";
  }
}

/* Kommentti 5 */
function modifyComment5(){
  /* Tee kommenttikenttä muokattavaksi ja muokkaa visuaalisia elementtejä */
  if (document.getElementById("Text5").contentEditable == "false") {
    document.getElementById("Text5").contentEditable = "true";
    document.getElementById("Text5").style.caretColor = "red";
    document.getElementById("Text5").style.border = "thin dashed #33393D" 
    document.getElementById("Modify5").innerHTML = "Valmis";

  /* Muokkaus pois päältä */
  } else {
    /* Muokatun elementin tallennus */
    localStorage.setItem('text5', document.querySelector('#Text5').innerHTML)
    /* Muokkaa visuaaliset elementit alkuperäisiksi */
    document.getElementById("Text5").contentEditable = "false";
    document.getElementById("Text5").style.border = "none" 
    document.getElementById("Modify5").innerHTML = "Muokkaa";
  }
}
