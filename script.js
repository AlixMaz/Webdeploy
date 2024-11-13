function drawPic(){
    const karolImages = document.getElementById("karolImages");
    const container = document.getElementById("container");

    container.style.height = "90dvh";
    const random = Math.floor(Math.random() * 10) + 1;
    karolImages.innerHTML = `<img src="Obrazy/img${random}.JPG">`;
    karolImages.style.display = "block";

    

    
}


function reset(){
    const karolImages = document.getElementById("karolImages");
    karolImages.style.display = "none";
    const container = document.getElementById("container");

    container.style.height = "25dvh";
    
}