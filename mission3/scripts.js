$('.navMenu__sandwich').click(function() {
  $(this).parent().toggleClass('navMenu--open');
  $('.navTop').toggleClass('navTop--squeezed');
  $('.main').toggleClass('main--squeezed');
});

let index = 1;

$('.main').click(function() {
  $(this).removeClass('main--layout' + index);
  (index < 4)? index++ : index = 1;
  $(this).addClass('main--layout' + index);
});

$('.navMenu__menuItem a').click(function() {
  $('.main').removeClass('main--layout' + index);
  index = this.hash.substring(1); // this takes the value of the 'href' attribute of the link, cuts out the '#' symbol, and assigns the result to 'index' var.
  $('.main').addClass('main--layout' + index);
});
