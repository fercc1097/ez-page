const topMail = null || document.getElementById('topMail');
const topPhone = null || document.getElementById('topPhone');
const topPhoneRight = null || document.getElementById('topPhoneRight');
const footerMail = null || document.getElementById('footerMail');
const footerPhone = null || document.getElementById('footerPhone');
const footerPhoneRight = null || document.getElementById('footerPhoneRight');


topMail.addEventListener('click',()=>{
    topMail.innerHTML= `<i class="icon ion-md-mail"></i>info@ezenergyrmm.com`
})
topPhone.addEventListener('click',()=>{
    topPhone.innerHTML= `<i class="icon icon ion-md-call"></i>+521 555 408 59 36`
})
topPhoneRight.addEventListener('click',()=>{
    topPhoneRight.innerHTML= `<i class="icon icon ion-md-call"></i>+521 776 106 73 23`
})
footerMail.addEventListener('click',()=>{
    footerMail.innerHTML= `<i class="icon ion-md-mail"></i>info@ezenergyrmm.com`
})
footerPhone.addEventListener('click',()=>{
    footerPhone.innerHTML= `<i class="icon icon ion-md-call"></i>+521 555 408 59 36`
})
footerPhoneRight.addEventListener('click',()=>{
    footerPhoneRight.innerHTML= `<i class="icon icon ion-md-call"></i>+521 776 106 73 23`
})