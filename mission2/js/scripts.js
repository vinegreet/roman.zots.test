const isMobile = window.innerHeight < 988;

$('.navMenu__sandwich').click(function() {
  $(this).parent().toggleClass('navMenu--open');
  $('.navTop').toggleClass('navTop--squeezed');
  console.log(window.innerHeight)
  if (!isMobile) {
    $('.main').toggleClass('main--squeezed');
  }
});

$('.navMenu__menuItem a').click(function() {
  const newNumber = this.hash.substring(1); // this takes the value of the 'href' attribute of the link, cuts out the '#' symbol, and thus, receives the link index.
  $('.main__title').text(newNumber);
  if (newNumber === '5') {
    $('.main').append('<img src="./assets/highfive.jpg" class="highfive" />');
    setTimeout(() => {
      $('.highfive').remove();
    }, 5000);
  }
});
