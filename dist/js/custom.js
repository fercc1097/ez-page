const topMail = null || document.getElementById('topMail');
const topPhone = null || document.getElementById('topPhone');
const topPhoneRight = null || document.getElementById('topPhoneRight');
const footerMail = null || document.getElementById('footerMail');
const footerPhone = null || document.getElementById('footerPhone');
const footerPhoneRight = null || document.getElementById('footerPhoneRight');

topMail.addEventListener('click', () => {
  topMail.innerHTML = `<i class="icon ion-md-mail"></i><a href="mailto:info@ezenergyrmm.com?Subject=Formulario%20de%20contacto">info@ezenergyrmm.com</a>`;
});
topPhone.addEventListener('click', () => {
  topPhone.innerHTML = `<i class="icon icon ion-md-call"></i><a href="tel:5554085936">+521 555 408 59 36</a>`;
});
topPhoneRight.addEventListener('click', () => {
  topPhoneRight.innerHTML = `<i class="icon icon ion-md-call"></i><a href="tel:+7761067323">+521 776 106 73 23</a>`;
});
footerMail.addEventListener('click', () => {
  footerMail.innerHTML = `<i class="icon ion-md-mail"></i><a href="mailto:info@ezenergyrmm.com?Subject=Formulario%20de%20contacto">info@ezenergyrmm.com</a>`;
});
footerPhone.addEventListener('click', () => {
  footerPhone.innerHTML = `<i class="icon icon ion-md-call"></i> <a href="tel:5554085936">+521 555 408 59 36</a>`;
});
footerPhoneRight.addEventListener('click', () => {
  footerPhoneRight.innerHTML = `<i class="icon icon ion-md-call"></i><a href="tel:7761067323">+521 776 106 73 23</a>`;
});
