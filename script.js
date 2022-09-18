
$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:false,
autoplay:true,

autoplayTimeout: 4000,
animateOut: 'fadeOut',
dots:false,
responsive:{
0:{
    items:1
},
600:{
    items:1
},
1000:{
    items:1
}
}
})

const field = document.getElementById('img');

let num = 0;
let image = ['images/image1.jpg','images/image2.jpg','images/image3.jpg']
setInterval(()=>{
    if(num === image.length){
        num = 0;
    }
 let imgLink = image[num];
 field.setAttribute('src',imgLink)
 num++
},2500)
