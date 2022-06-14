var img1 = document.getElementById("workim1");
var img4 = document.getElementById("workim2");


img1.addEventListener("click", function () {
    console.log("here")
    var imageBox = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", "image3.jpeg");
    image.setAttribute("class", "img1")
    imageBox.setAttribute("class", "image1");
    document.body.appendChild(imageBox);
    imageBox.appendChild(image);
})

img4.addEventListener("click", function () {
    console.log("here")
    var imageBox = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", "image3.jpeg");
    image.setAttribute("class", "img4")
    imageBox.setAttribute("class", "image1");
    document.body.appendChild(imageBox);
    imageBox.appendChild(image);
})