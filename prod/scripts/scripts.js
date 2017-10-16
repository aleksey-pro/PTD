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

  if(currLoc === '#bread') {
    classToggl($('#hleb'));

  }else if(currLoc === '#cond') {
    classToggl($('#cond'));
  }

  //color active pagelinks

  function colrLikn(menu) {
    menu.each(function() {
      var currPage = (window.location.pathname).substr(1),
          addr = $(this).attr('href');

      if(currPage === addr) {
        $(this).addClass('active');
        $(this).closest('li').addClass('active');
      } else if (currPage === "") {
        menu.first().addClass('active');
        menu.first().closest('li').addClass('active');
      }
    });
  }

  colrLikn($('.navbar-header a'));
  colrLikn($('.navbar-footer a'));



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

  //scroll arrow

  var arr = $('.arrow-up');

  arr.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: 0
    }, 1000)
  });

  $(window).scroll(function() {
    if( $(this).scrollTop() > 400) {
    arr.fadeIn();
  } else
    arr.fadeOut();
  });

  function hideArr() {
    if($(window).width() < 768) {
      arr.hide();
    }
  };
  hideArr();

  $(window).on('resize', hideArr);

  //mailsend

  $('#form').on('submit', function(e){
     e.preventDefault();
     $.ajax({
      url: '../send.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(msg){
      if(msg == 'ok') {
        $('#myModal').modal();
        $('input, textarea').not(':input[type=file], :input[type=submit]').val('');
      } else {
          $('#myModal').modal();
          $('input, textarea').not(':input[type=file], :input[type=submit]').val('');
        }
       }
     });
   });


  // center-modals

  // function centerModals(){
  //   $('.modal').each(function(i){
  //     var $clone = $(this).clone().css('display', 'block').appendTo('body');
  //     var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
  //     top = top > 0 ? top : 0;
  //     $clone.remove();
  //     $(this).find('.modal-content').css("margin-top", top);
  //   });
  // }

  // $(window).on('resize', centerModals);



}); //ready

//ya.map

function yaMaps() {
  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
      myMap = new ymaps.Map("map", {
          center: [59.994234, 30.437967],
          zoom: 12
      });

      myPlacemark = new ymaps.Placemark([59.994234, 30.437967], {
          hintContent: 'Петербургский Торговый Дом'
          // ,balloonContent: 'Петербургский Торговый Дом'
      });

      myMap.geoObjects.add(myPlacemark);
  }
}




//# sourceMappingURL=scripts.js.map
