
  
  input.style.padding = "8px";
  input.style.border = "2px solid gray";
  input.style.borderRadius = "5px";

  msg.style.display = "none";
  msg.style.color = "red";
  msg.style.fontWeight = "bold";


$('#sort').sortable();

$(function(){
	$("#accordion").accordion();
});

$('#tabs').tabs();

document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const regex = /^[A-Za-z\s'-]+$/;
  const errorElement = document.getElementById("error");

  if(name.match(valid_name_regex)){


         return true;
          
      }else{


         document.getElementById("error").style.visibility = "visible";
         document.getElementById("error").style.borderColor = "red";
         return false;
      }
