
/**
* Функция выделения соответствующего заголовка в прайсе
* при попадании с определенной ссылки
* @param  {Element} trgt [для какого элемента]
*/
function classToggl(trgt) {
  var TOGGLE_TIMEOUT = 870;

  trgt.addClass('active');
  setInterval(function(){
    trgt.removeClass('active');
  }, TOGGLE_TIMEOUT);
}

/**
 * Функция подсвечивания сылок при наведении
 * @param  {Element} menu [блок меню с ссылками]
 */
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

/**
 * Функция окраски элемета в красный цвет и назначения класса
 * @param  {Element} element [окрашиваемы элемент]
 * @param  {String} icon     [служебный класс]
 */
function emphasisTel(element, icon) {
  var exp = element.text();
  var newexp = exp.replace(' (', ' <span class="red-empasis">(');
  var newexp2 =  newexp.replace(') ', ')</span> ');
  element.html('<i class="icon' + icon + '"></i>' + newexp2);
}

/**
 * Функция создания аккордеона из пунктов прайса
 * @return {[type]} [description]
 */
function accordeonPrice() {
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
        item.addClass('active');
        arrow.addClass('arrow-active');

        //otherContent.stop(true, true).slideUp(duration); первое true
        // очистит всю последующую очередь, второе - текущая анимация сразу завершится
        content.slideDown(duration);
      } else {
        content.stop(true, true).slideUp(duration);
        item.removeClass('active');
        arrow.removeClass('arrow-active');
      }
  });
}

/**
 * Функция замены точек на запятые в прайсе
 * @param  {Element} elem [элемент, содежащий точку]
 */
function changeDots(elem){
  for(var i=0; i < elem.length; i++){
    var commaVal = elem[i].innerText;
    var newVal = commaVal.replace(/\./, ',');
    elem[i].innerText = newVal;
  }
}

/**
 * Функция смены класса при движении курсором над баннерами
 */
function fadeBg() {
  var thisImage = $(this);
  var wrapper = thisImage.closest('.main-content__banner');
  var otherImages = wrapper.find('.plant-link-image');
  otherImages.addClass('plant-link-image--active');
  thisImage.removeClass('plant-link-image--active');
}

/**
 * Функция удаления класса при выходе из зоны баннеров
 */
function removeFade() {
  var Images = $(this).find('.plant-link-image');
  Images.removeClass('plant-link-image--active');
}

/**
 * Функция прокрутки наверх при нажатии на стрелку
 * @param  {Element} arr [элемент стрелки]
 */
function scrollArr(arr) {
  arr.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: 0
    }, 1000);
  });
}

/**
 * Функция скрытия/показа стрелки при прокрутке
 * @param  {Element} arr [элемент стрелки]
 */
function hideScroll(arr) {
   $(window).on('scroll', function() {
    if( $(this).scrollTop() < 400) {
    arr.fadeOut();
  } else
    arr.fadeIn();
  });
}

/**
 * Функция удаления стрелки на мобильных устройствах
 * @param  {Element} arr [элемент стрелки]
 */
function hideArr(arr) {
  if($(window).width() < 768) {
    arr.hide();
    $(window).off('scroll');
  }else {
    hideScroll(arr);
  }
}

/**
 * Функция отправки писем через ajax
 */
function sendMail() {
  $('#form').on('submit', function(e) {
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
}

/*********************************************************************/
/**********************  При загрузке страницы **********************/
/********************************************************************/

$(function() {

  /**
   * Меняем цвет заголовка в прайсе
   */
  var currLoc =  window.location.hash;
  if (currLoc === '#hleb') {
    classToggl($('#hleb'));
  } else if (currLoc === '#cond') {
    classToggl($('#cond'));
  }

  /**
   * Меняем цвет ссылок в хедере и футере
   */
  colrLikn($('.navbar-header a'));
  colrLikn($('.navbar-footer a'));

  /**
   * Выделяем в красный
   */
  emphasisTel($('.top-header__phones'), 'icon-tel-h');
  emphasisTel($('.footer-bottom__phones'), 'icon-tel-f');

  /**
   * Вызываем аккордеон-меню для прайса
   */
  accordeonPrice();

  /**
   * Меняем точки на зяпятые
   */
  var column4 = document.querySelectorAll('.column4');
  var column7 = document.querySelectorAll('.column7');
  var column13 = document.querySelectorAll('.column13');
  var column10 = document.querySelectorAll('.column10');

  changeDots(column4);
  changeDots(column7);
  changeDots(column13);
  changeDots(column10);

  /**
   * Меняем затемнение при движении мыши
   */
  $('.plant-link-image').on('mouseenter mouseleave', fadeBg);
  /**
   * удаляем затемнение при выходе
   */
  $('.plant-links').on('mouseout', removeFade);

  /**
   * Инизиализируем прокрутку стрелкой вверх
   */
  var arrow = $('.arrow-up');
  scrollArr(arrow);
  hideScroll(arrow);
  hideArr(arrow);

  /**
   * Инициализируем отправку писем
   */
  sendMail();

});

$(window).on('resize', function() {
  var arrow = $('.arrow-up');
  hideArr(arrow);
});

