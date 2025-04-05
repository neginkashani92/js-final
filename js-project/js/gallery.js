function addTabFocus() {
    console.log("addTabFocus triggered");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabFocus;

function upDate(previewPic){
    let div = document.getElementById("image");
    div.style.backgroundImage = "url('" + previewPic.src + "')";
    div.innerHTML = "";
}

function unDo(){
    let div = document.getElementById("image");
    div.style.backgroundImage = "url('')";
    div.innerHTML = "Hover over an image below to display here.";
}