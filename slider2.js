const eleSlider = document.querySelectorAll('.movel');
let movL = document.querySelectorAll('.moveLe')[0];
const movR = document.querySelectorAll('.moveRi')[0];
// console.log(movL.outerHTML);

const moveL =()=>{
eleSlider.forEach((slide)=>{
slide.style.transform=`translateX(-40%)`;

})
// movL.forEach(movL.outerHTML=``);
}

const moveR =()=>{
    eleSlider.forEach((slide)=>{
    slide.style.transform=`translateX(0%)`;
    slide.style.transition=`transform 1s ease-in-out`;
   
    })
    // movR.insertAdjacentHTML('beforebegin','<button class="btn prev move movel movL center-box" onclick="moveL()"><</button>');
    }
