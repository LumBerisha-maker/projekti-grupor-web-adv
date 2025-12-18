  


$('.item-1').sortable();
$('.item-3').sortable();
$('.item-2').sortable();

$(function(){
	$("#accordion").accordion();
});

$('#tabs').tabs();

document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const regex = /^[A-Za-z]+$/;
  const errorAltre = document.getElementById("error");

  if(name.match(regex)){


         return true;
          
      }else{


         errorAltre.style.visibility = "visible";
         errorAltre.style.borderColor = "red";
         return false;
      }})


      var li = document.getElementById('item_goal');

      li.style.backgroundColor = "#007fff;";
      li.style.border = "3px solid #003eff;";
      li.style.color = "#030101";

