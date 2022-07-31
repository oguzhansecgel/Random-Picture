var randomSayi1 = Math.floor(Math.random()*7)+1;
var randomPic="p"+randomSayi1+".jpeg";
var randomPicSource ="zar ouyun/"+randomPic;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomPic);