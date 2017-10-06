$(function(){
  console.log('Start');

//toPrice links

  var currLoc =  window.location.hash;

  function classToggl(trgt){
    trgt.addClass('active');
    setInterval(function(){
      trgt.removeClass('active');
    }, 500);
  }

  if(currLoc === '#bread') {
    classToggl($('#hleb'));

  }else if(currLoc === '#cond') {
    classToggl($('#cond'));
  }


  //accordeon

  $('.accordeon__trigger').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        list = $this.closest('.accordeon__list'),
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon__inner'),
        otherContent = list.find('.accordeon__inner'),
        arrow = item.find('.trigger-head');
        duration = 500;

        if(!item.hasClass('active')) {
          items.removeClass('active');
          item.addClass('active');
          arrow.addClass('arrow-active');

          otherContent.stop(true, true).slideUp(duration); //первое true
          // очистит всю последующую очередь, второе - текущая анимация сразу завершится
          content.slideDown(duration);
        }else {
          content.stop(true, true).slideUp(duration);
          item.removeClass('active');
          arrow.removeClass('arrow-active');
        }


  });//click

  // price fix

  $('.table').find('.column0, .column12, .column13').hide();

  //mailsend

  $('#form').on('submit', function(e){
     e.preventDefault();
     // var fd = new FormData( this );
     $.ajax({
      url: '../send.php',
      type: 'POST',
      // contentType: false,
      // processData: false,
      // data: fd,
      data: $(this).serialize(),
      success: function(msg){
      if(msg == 'ok') {
        $('.info').text('Отправлено');
        $('input, textarea').not(':input[type=file], :input[type=submit]').val('');
      } else {
         $('.info').text('Ошибка');
        }
       }
     });
   });

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



