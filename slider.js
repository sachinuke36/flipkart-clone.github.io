const slider = document.querySelectorAll('.img-slide');
console.log(slider);
let count = 0;

slider.forEach((slide,index)=>{
slide.style.left=`${index*100}%`
})


const goPrev=()=>{
   if(count<0) {count = slider.length;}
    count--;
    console.log(count);
    slideImage();
   }


const goNext=()=>{
    if(count>slider.length-2){count=-1;}
     count++;
    console.log(count);
    slideImage();
    }


const slideImage =()=>{
slider.forEach((slide,index)=>{
 slide.style.transform=`translateX(-${100*count}%)`;
 slide.style.transition=`transform 1s ease-in-out`;
})
}
const time = setInterval(goNext,3000);


