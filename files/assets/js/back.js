
const backbutton = document.querySelector('.back-to-top img');
/*console.log(backbutton);*/
backbutton.addEventListener('click', () => {
/*  console.log('fa')*/
    document.querySelector('body,html').getBoundingClientRect().top;
  window.scrollTo({
    behavior: 'smooth',
    top: scroll,
  });
})