let h1 = document.querySelector(".h1");
let img = document.querySelector(".img");
let right = document.querySelector(".right");
let lis = document.querySelectorAll("li");
let left = document.querySelector(".left");


right.onclick = function () {
    h1.innerHTML = "اينشتاين";
    img.src = "https://th.bing.com/th/id/R.751ad0200e029b5540b50e0ff66ebefb?rik=InoJNXbuVLKF2g&pid=ImgRaw&r=0&sres=1&sresct=1";
    lis[0].innerHTML = " حاز في عام 1921 على جائزة نوبل في الفيزياء عن ورقة بحثية عن التأثير الكهروضوئي";
lis[1].innerHTML = " قدم 300 ورقة علمية في تكافؤ المادة والطاقة وميكانيكا الكم وغيرها";
lis[2].innerHTML=" ناقش الجاذبية في طرحه لنظرية النسبية العامة عام 1915 وهي تُمثل الوصف الحالي للجاذبية في الفيزياء الحديثة"
    
}
left.onclick = function () {
    h1.innerHTML = "اسحاق نيوتن";
    img.src = "https://th.bing.com/th/id/OIP.Eiup-Nwde9qTAm_ux5xTZQHaEK?pid=ImgDet&rs=1";
    lis[0].innerHTML = "اكتشاف ألوان الطيف";
lis[1].innerHTML = "مدفع نيوتن المداري";
lis[2].innerHTML="قوانين نيوتن للحركه"
    }
 
 

 