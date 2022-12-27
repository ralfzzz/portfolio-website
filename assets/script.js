function showMenu(){
   var x = document.getElementById('hamburger').innerHTML;
   console.log(x);
   if(x=="x"){
     console.log("close");
     document.getElementById('hamburger').innerHTML="&#8801;";
     document.getElementById('menu_vertikal').style.display="none";
   }else {
     console.log("hamburger");
     document.getElementById('hamburger').innerHTML="x";
     document.getElementById('menu_vertikal').style.display="block";
   }
}