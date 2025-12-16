
function validation() {
   
    var name = document.getElementById("name").value.trim();
    
    
    var valid_name_regex = /^[A-Za-z]+$/;

    if (name.match(valid_name_regex)) {
        
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "#198754"; 
        return true;
    } else {
        
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "#8719199f";
        return false;
    }
}


document.getElementById("name").addEventListener("input", function() {
    this.value = this.value.replace(/[^A-Za-z]/g, "");
});


$(document).ready(function() {
    $('.tab-btn').click(function() {
   
        $('.tab-btn').removeClass('active');
        $('.content').removeClass('active');

     
        $(this).addClass('active');

 
        const target = $(this).data('target');
        $('#' + target).addClass('active');
    });
});
