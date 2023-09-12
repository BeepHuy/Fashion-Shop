//* ma tải trước hinh ảnh*//
var anhAr = [];
var imindex = 0;
function loadAnh(){
    for (var i = 0; i < 4; i++){
        anhAr[i] = new Image();
        anhAr[i].src = "anh/" +i+ ".webp";
    }
}
var auto = function next(){
imindex++;
if(imindex >= anhAr.length){
    imindex = 0;
}
var anh = document.getElementById("photo");
anh.src = anhAr[imindex].src;
}    
function back(){
    imindex--;
    if( imindex < 0){
        imindex = anhAr.length -1;
    }
    var anh = document.getElementById("photo");
    anh.src = anhAr[imindex].src;
}

function currentSlide1(){
    imindex = 0;
    var anh = document.getElementById("photo");
    photo.src = anhAr[imindex].src;
}
function currentSlide2(){
    imindex = 1;
    var anh = document.getElementById("photo");
    photo.src = anhAr[imindex].src;
}
function currentSlide3(){
    imindex = 2;
    var anh = document.getElementById("photo");
    photo.src = anhAr[imindex].src;
}
function currentSlide4(){
    imindex = 3;
    var anh = document.getElementById("photo");
    photo.src = anhAr[imindex].src;
}
setInterval(auto, 2000);
