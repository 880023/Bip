const aboutUsInf = document.querySelector('.about-us__inform');
const aboutUsClose = document.querySelector('.about-us__close');
const aboutUsOpen = document.querySelector('.about-us__button');

const floatOut = document.querySelector('.about-us__button').onclick = function floatOut() {
     
     aboutUsInf.style.position = ('absolute');
     aboutUsInf.style.right = ('0px');

     aboutUsClose.style.position = ('absolute');
     aboutUsClose.style.top = ('var(--px-40-1920)');
     aboutUsClose.style.right = ('var(--px-360-1920)');
     aboutUsClose.style.opacity = '1';
     aboutUsClose.style.zIndex = '6';
     aboutUsClose.style.transitionDelay= '0.35s';


     aboutUsOpen.style.opacity = '0';
     aboutUsOpen.style.zIndex = '-1';
     
     console.log('open');
     
};

const hiding = document.getElementById('hiding').onclick = function hiding() {
     aboutUsInf.style.position = ('absolute');
     aboutUsInf.style.right = ('calc(var(--px-400-1920)* -1.0875)');

     aboutUsClose.style.opacity = '0';
     aboutUsClose.style.zIndex = '-1';
     aboutUsClose.style.transition = '0s';
     
     aboutUsOpen.style.zIndex = '5';
     aboutUsOpen.style.opacity = '1';
     console.log('close');
     
};

