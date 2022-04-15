var is_show = false;

function menu()
{
    if (is_show) {
        is_show = false;
     } else {
        is_show = true;
     }

     let menu = document.getElementsByClassName('menu')[0];

     if (is_show) {
        menu.style.display = "none"; 
     }else{
        menu.style.display = "grid";  
     }
}

