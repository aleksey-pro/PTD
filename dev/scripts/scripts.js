$(function(){
  console.log('Start');

//toPrice links

  var currLoc =  window.location.hash;

  function classToggl(trgt){
    trgt.addClass('active');
    setInterval(function(){
      trgt.removeClass('active');
    }, 870);
  }

  if(currLoc === '#hleb') {
    classToggl($('#hleb'));

  }else if(currLoc === '#cond') {
    classToggl($('#cond'));
  }

  //color active pagelinks

  function colrLikn(menu) {
    menu.each(function() {
      var currPage = (window.location.href),//.substr(1)
          currQuery = (window.location.search),
          addr = $(this).attr('href');

      var result = currQuery.match( /product/ );

      if(currPage === addr) {
        $(this).addClass('active');
        $(this).closest('li').addClass('active');
      } else if (currQuery === "") {
        menu.first().addClass('active');
        menu.first().closest('li').addClass('active');
      }else if (result){
        menu.eq(1).addClass('active');
        menu.eq(1).closest('li').addClass('active');
      }
    });
  }

  colrLikn($('.navbar-header a'));
  colrLikn($('.navbar-footer a'));


//red-number

function emphasisTel(element, icon){
  var exp = element.text();
  var newexp = exp.replace(' (', ' <span class="red-empasis">(');
  var newexp2 =  newexp.replace(') ', ')</span> ');
  element.html(`<i class='icon ${icon}'></i>` + newexp2);
}

emphasisTel($('.top-header__phones'), 'icon-tel-h');
emphasisTel($('.footer-bottom__phones'), 'icon-tel-f');


  //accordeon

  $('.accordeon__trigger').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        list = $this.closest('.accordeon__list'),
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon__inner'),
        otherContent = list.find('.accordeon__inner'),
        arrow = item.find('.accordeon__trigger');
        duration = 500;

        if(!item.hasClass('active')) {
          // items.removeClass('active');
          item.addClass('active');
          arrow.addClass('arrow-active');

          //otherContent.stop(true, true).slideUp(duration); первое true
          // очистит всю последующую очередь, второе - текущая анимация сразу завершится
          content.slideDown(duration);
        }else {
          content.stop(true, true).slideUp(duration);
          item.removeClass('active');
          arrow.removeClass('arrow-active');
        }


  });//click

  // price fix

  // $('.table').find('.column0, .column1, .column4, .column9, .column12, .column13').hide();

  // $('td:empty').css('background-color', 'yellow');
  // $('.null').hide();

  // hover

  $('.plant-link-image').on('mouseenter mouseleave', function() {
    var thisImage = $(this);
    var wrapper = thisImage.closest('.main-content__banner');
    var otherImages = wrapper.find('.plant-link-image');
    otherImages.addClass('plant-link-image--active')
    thisImage.removeClass('plant-link-image--active');
  });

  $('.plant-links').on('mouseout', function() {
    var Images = $(this).find('.plant-link-image');
    Images.removeClass('plant-link-image--active');
  });

  //scroll adaptive arrow

  var arr = $('.arrow-up');

  arr.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: 0
    }, 1000)
  });

  function hideScroll() {
     $(window).on('scroll',function() {
      if( $(this).scrollTop() < 400) {
      arr.fadeOut();
    } else
      arr.fadeIn();
    });
  }

  hideScroll();


  function hideArr() {
    if($(window).width() < 768) {
      arr.hide();
      $(window).off('scroll');
    }else {
      hideScroll();
    }
  };

  hideArr();

  $(window).on('resize', hideArr);

  //mailsend

  $('#form').on('submit', function(e){
     e.preventDefault();
     $.ajax({
      url: 'send.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(msg){
      if(msg == 'ok') {
        $('#myModal').modal();
        $('input, textarea').not(':input[type=file], :input[type=submit]').val('');
      } else {
          alert('Не удалось отправить. Обратитесь к администратору');
        }
       }
     });
   });

}); //ready





