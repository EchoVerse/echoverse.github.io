$(document).ready(() => {
  $('.accordion').accordion();

  $('.ui.menu a[href^="#"]').click(e => {
    e.preventDefault();
    const aid = $(e.target).attr('href');
    $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
  });
});
