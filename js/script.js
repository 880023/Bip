'use strict'



const aboutUsInf = document.querySelector('.about-us__inform');
const aboutUsClose = document.querySelector('.about-us__close');
const aboutUsOpen = document.querySelector('.about-us__button');

function floatOut() {
    
     aboutUsInf.style.position = ('absolute');
     aboutUsInf.style.right = ('0px');

     aboutUsClose.style.position = ('absolute');
     aboutUsClose.style.top = ('var(--px-40-1920)');
     aboutUsClose.style.right = ('var(--px-355-1920)');
     aboutUsClose.style.opacity = '1';
     aboutUsClose.style.zIndex = '6';
     aboutUsClose.style.transitionDelay= '0.35s';


     aboutUsOpen.style.opacity = '0';
     aboutUsOpen.style.zIndex = '-1';
     
     // console.log('open');
     
};

function hiding() {
     aboutUsInf.style.position = ('absolute');
     aboutUsInf.style.right = ('calc(var(--px-400-1920)* -1.0875)');

     aboutUsClose.style.opacity = '0';
     aboutUsClose.style.zIndex = '-1';
     aboutUsClose.style.transition = '0s';
     
     aboutUsOpen.style.zIndex = '5';
     aboutUsOpen.style.opacity = '1';
     // console.log('close');
     
};

// const wrapper = document.querySelector('.wrapp-page');
// document.addEventListener('click', (e) => {
//      if (!wrapper.contains(e.target)) {
//           floatOut;
//      } else if (e != wrapper) {
//           hiding
//      }
// })

const select = document.querySelector('select');
const allLeng = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

//Перенаправить на url с названием языка
function changeURLLanguage() {
     let lang = select.value;
     location.href = window.location.pathname + '#' + lang;
     location.reload();
};

function changeLanguage() {
     let hash = window.location.hash;
     hash = hash.substring(1);
     if (!allLeng.includes(hash)) {
          location.href = window.location.pathname + '#ua';
          location.reload();
     }
     select.value = hash;
     document.querySelector('title').innerHTML = langArr['unit'][hash];

     for (let key in langArr) {
          let elem = document.querySelector('.lng-' + key);
          if (elem) {
               elem.innerHTML = langArr[key][hash];
          }
          
     }
};

changeLanguage();