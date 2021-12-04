function view_image(image){
    clearInterval(rotate_timer);
    document.getElementById("viewed_image").src = image.src;
    document.getElementsByClassName("image_viewer")[0].style.display = "flex";
}

var rotate_timer;
window.onload = function (){
    rotate_timer = setInterval(rotate_slider, 3000);
};

function rotate_slider() {
    let switches = document.getElementsByName("switch");
    for (var i = 0; i < switches.length; i++) {
        if(switches[i].checked){
            if(i == switches.length - 1){
                switches[i].checked = false;
                switches[0].checked = true;
            }
            else{
                switches[i].checked = false;
                switches[i + 1].checked = true;
            }
            break;
        }
    }
}