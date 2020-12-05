// Date Function
const changeYear = document.querySelector('footer span');

document.addEventListener('DOMContentLoaded', function(e) {
    const today = new Date().getFullYear();
    const changeDate = document.querySelector('footer span')
    changeDate.innerHTML = today
})


// Sticky menu background
document.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#nav-bar').style.opacity = 0.9;
    } else {
      document.querySelector('#nav-bar').style.opacity = 1;
    }
  });
  

  // Smooth Scrolling
  $('#nav-bar a, .btn, #showcase').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top -110
        },
        1100
      );
    }
  });