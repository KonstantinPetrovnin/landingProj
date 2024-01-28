const btnDark = document.querySelector('.btn_dark'),
    secondPage = document.querySelector('.secondPage__section'),
    secondPagePhone = document.querySelector('.secondPage__section-phone'),
    btnwhite = document.querySelector('.btn_white'),
    fourthPage = document.querySelector('.fourthPage__header'),
    fourthPagePhone = document.querySelector('.fourthPage_phone')


const slidesWrapper  =document.querySelector('.fourthPage__slider'),
    slidesWrapperInner = document.querySelector('.fourthPage__slider-inner-pc'),
    slides = document.querySelectorAll('.fourthPage__slide'),
    slidesPhone = document.querySelectorAll('.fourthPage__slider-inner'),
    tripples = document.querySelectorAll('.tripple'),
    current = document.querySelector('.span-num-pc'),
    total = document.querySelector('.span-num-summ-pc');  


const prev = document.querySelector('.prev-pc'),
    next = document.querySelector('.next-pc');


const slideSecond = document.querySelectorAll('.thirtyPage__table-adaptif-slide'),
    nextCarousel = document.querySelector('.carousel-next'),
    prevCarousel = document.querySelector('.carousel-prev'),
    dots = document.querySelectorAll('.dot');


const slideMaster = document.querySelectorAll('.adaptiv'),
    prevBtn = document.querySelector('.adaptif .prev'),
    nextBtn = document.querySelector('.adaptif .next'),
    curentMaster = document.querySelector('.span-num-phone'),
    totalMaster = document.querySelector('.span-num-summ-phone');

const btnParticipation = document.querySelector('.btn-participation'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal__close')





//modal

btnParticipation.addEventListener('click',()=>{
   modal.style.display = 'grid'
   document.body.style.overflow = 'hidden'
})
close.addEventListener('click',()=>{
    modal.style.display = 'none'
    document.body.style.overflow = ''
})
modal.addEventListener('click',(e)=>{
    if(e.target == modal ){
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }
})

//navigation
function handleButtonClick (btn,pagePc,pagePhone){
    btn.addEventListener('click',()=>{
        if(window.screen.availWidth > 480){
            pagePc.scrollIntoView({ block: "start", behavior: "smooth" });   
        }else{
            pagePhone.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        
    })
}
console.log(fourthPage)
handleButtonClick(btnDark,secondPage,secondPagePhone);
handleButtonClick(btnwhite,fourthPage,fourthPagePhone)

//slider1

let slideIndex = 1;

showSlide(slideIndex)
current.textContent = slideIndex*3;
total.textContent = tripples.length*3;

function showSlide (n){
    
    if(n>tripples.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = tripples.length
    }
    tripples.forEach((elem)=>{
        elem.style.display = 'none';
    })

    tripples[slideIndex-1].style.display = 'flex';

    current.textContent = slideIndex*3;
    total.textContent = tripples.length*3;
    
}

setInterval(()=>{
    plusSlide(1)
},4000)

function plusSlide(n){
    showSlide(slideIndex +=n)
}
prev.addEventListener('click',()=>{
    plusSlide(-1);
})
next.addEventListener('click',()=>{
    plusSlide(1);
})

//slider2

let slideIndexSecond = 1
sliderSecond(slideIndex)


function sliderSecond (n){

    if(n == slideSecond.length ){
        console.log('disabledNEXT')
        nextCarousel.classList.remove('.next:hover')
        nextCarousel.classList.add('disabled-carousel');
        
    }
    dots.forEach((item)=>{
        item.classList.remove('dot-active')
        dots[n-1].classList.add('dot-active');
    })

    if(n==1){
    
       prevCarousel.classList.remove('.prev:hover')
        prevCarousel.classList.add('disabled-carousel');
       
    }
    if(n<slideSecond.length && n>1){
        prevCarousel.classList.remove('disabled-carousel');

        nextCarousel.classList.remove('disabled-carousel');
    }

    slideSecond.forEach((elem)=>{
        elem.style.display = 'none';
    })
 
    slideSecond[n-1].style.display = 'flex';
    
}

function plusSlideSecond(n){
    sliderSecond(slideIndexSecond += n)
}
prevCarousel.addEventListener('click',()=>{
    plusSlideSecond(-1);
})
nextCarousel.addEventListener('click',()=>{
    plusSlideSecond(1);
})


//slider3

let slideIndexFirth = 1;

showSlideMaster(slideIndexFirth)

curentMaster.textContent = slideIndexFirth 
totalMaster.textContent = slideMaster.length

function showSlideMaster (n){
    if(n > slideMaster.length){
        slideIndexFirth = 1;
    }
    if(n < 1){
        slideIndexFirth = slideMaster.length;
    }

    slideMaster.forEach((item)=>{
        item.style.display = 'none' ;
    })

    slideMaster[slideIndexFirth-1].style.display = 'flex';
    curentMaster.textContent = slideIndexFirth;
}


function plusSlideFirth (n){
    showSlideMaster(slideIndexFirth += n)
}
setInterval(()=>{
    plusSlideFirth(1) 
},4000)
prevBtn.addEventListener('click',()=>{
    plusSlideFirth(-1);

})
nextBtn.addEventListener('click',()=>{
    plusSlideFirth(1);
   
})
















