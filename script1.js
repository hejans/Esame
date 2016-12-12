var show = document.getElementById("b1");
var form = document.getElementById("form1");

form.style.display = 'none';
var sf = 0;

function showform(){
      
      if(sf===0){
     form.style.display = 'block';
     sf=1;}else{
     	form.style.display = 'none';
     	sf=0;
     }


};