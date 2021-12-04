function menu_button_clicked(x) {
	x.classList.toggle("change");
    document.querySelector(".header_container nav").classList.toggle("nav_change");
	if (document.getElementsByClassName("nav_list")[0].style.display == "flex") {
		document.getElementsByClassName("nav_list")[0].style.display = "none";
	} 
	else {
		document.getElementsByClassName("nav_list")[0].style.display = "flex";
	}
}

function resize_check(){
	if (window.innerWidth > 1020) {
		if(document.querySelector(".header_container .toggle_menu").classList.contains("change")){
			document.querySelector(".header_container .toggle_menu").classList.remove("change");
            document.querySelector(".header_container nav").classList.remove("nav_change");
		}
		document.getElementsByClassName("nav_list")[0].style.display = "flex";
	}
	else if(!document.querySelector(".header_container .toggle_menu").classList.contains("change")){
		document.getElementsByClassName("nav_list")[0].style.display = "none";
	}
}
		