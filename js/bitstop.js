$( document ).ready(function() {

		$('.main-slider').bxSlider({
		  mode: 'fade',
		  controls: false
		});

/////////////////////////////////////////////////////////////////////

$('.modal').on('shown.bs.modal', function (e) {
  var topScroll = $(window).scrollTop();
  $(".modal-dialog").css({
    top: topScroll + 15
  });
})
////////////////////////////////////////////////////////////////////////
$('input[type="file"]').on('change', function (event, files, label) {
    var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '')
    $('.file-wrap span').text(file_name);
});

//////////////////////////////////////////////////////////////////////
 /* hover*/
 var cities = ["Москва","Орехово Зуево", "Новомосковск","Рязань","Казань","Киров","Сыктывкар","Н. Челны","Чебоксары","Пенза","Муром",
              "Н. Новгород","Череповец","Рыбинск","Иваново","Кинешма","Кострома","Ярославль","Вологда","Псков","Петрозаводск",
              "С. Петербург","В. Луки","Саратов","Махачкала","Пятигорск","Волгоград","Калуга","Смоленск","Белгород","Курск",
              "Новоросийск","Краснодар","Шахты","Ростов на Дону","Ейск","Орел","Воронеж","Липецк","Магнитогорск","Курган","Челябинск",
              "Нефтеюганск","Сургут","Тюмень", "Нефтекамск","Ижевск","Пермь","Первоуральск","Екатеринбург","Томск","Абакан","Мурманск","Архангелськ"];



var map = $(".geography-map");
var countCity = cities.length;

while(countCity){
  map.append('<a href="city-' + countCity +'.html" class="icon-link" data-city="' + cities[countCity-1] + '"'+ 'data-number="'+ countCity + '"></a>');
  --countCity;
}

$(".icon-link").mousemove(function(e) {
     var left = e.pageX;
     var top = e.pageY;

                            $(".city-popover").css({
                                top: top,
                                left: left+20
                            });

     var text = $(this).data("city");
     $(".city-popover").text(text);
     $(".city-popover").addClass('show');
});

$(".icon-link").mouseleave(function(event) {
  $(".city-popover").removeClass('show');
});


                   

////////////////////////////////////////////////////////////////////////

  $(".forum-theme table tbody td:nth-child(1)").addClass("col-1"); 
  $(".forum-theme table tbody td:nth-child(2)").addClass("col-2"); 
  $(".forum-theme table tbody td:nth-child(3)").addClass("col-3"); 
  $(".forum-theme table tbody td:nth-child(4)").addClass("col-4"); 
  $(".client-talon table tbody tr:nth-child(odd)").addClass("odd");   

  $(".forum-theme table tbody td:nth-child(5)").addClass("col-5"); 
/////////////////////////////////////////////////////////////////////////////////
$(".call-link").click(function(event) {
	$(".form-group-email, .form-group-message").addClass('hide');
	$("#feedback-modal .modal-header h4").html("Заказать звонок");
});

$(".mail-link").click(function(event) {
	$(".form-group-email, .form-group-message").removeClass('hide');
	$("#feedback-modal .modal-header h4").html("Написать нам");
});
////////////////////////////////////////////////////////////////////////////
$(".work-type li a").hover(function(event) {

	var inx = $(this).parent("li").index();
	var list = $(".polygon-img-wrap li").eq(inx);
	$(list).toggleClass('hover');
});
/////////////////////////////////////////////////////////////////////////
$(".nav-address span").click(function() {
    var a_href = $(this).attr("data-href");
    $(".tab-content .tab-pane").removeClass("active");
    $(".tab-content").find(a_href).addClass("active");
    $(".nav-address li").removeClass("active");
    $(this).parent("li").addClass("active");
    if($(this).hasClass("link-map")){
        $(".nav-address-wrap").removeClass("city-active");
    }else{
        $(".nav-address-wrap").addClass("city-active");
    }
});
/////////////////////////////////////////////////////////////////////////

			$(function() {
				
				$("select.custom").each(function() {					
					var sb = new SelectBox({
						selectbox: $(this),
						height: 150,
						width: 175
					});
				});

        $("select.custom-sf").each(function() {          
          var sb = new SelectBox({
            selectbox: $(this),
            height: 150
          });
        });

				
			});


////////////////////////////////////////////////////////////////////////

        


////////////////////////////////////////////////////////////////////////
$(function(){

  var lines = $('[data-scroll-speed]'),
      $window = $(window);
  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    lines.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
          valY =  scrollTop / 70;
          valX = - scrollTop / 15;
          valXplus =  scrollTop / 15;
          valYplus =  scrollTop / 35;
          valYminus =  - scrollTop / 9;
          var valXnew = scrollTop / 9;
          if($(this).hasClass('left-deg')){

      	 	$this.css('transform', 'translateY(' + val + 'px) rotate(-21deg)');

      	  }else if($(this).hasClass('gray-line')){

      	  	if($(this).hasClass('gray-line-top')){
      	  		$this.css('transform', 'translateX(' + valXnew + 'px) translateY(' + valYplus + 'px) rotate(-21deg)');
      	  	}else{
      	  		$this.css('transform', 'translateX(' + valXplus + 'px) translateY(' + valYminus + 'px) rotate(-21deg)');
      	  	}	

      	  }
      	  else{

      		$this.css('transform', 'translateY(' + val + 'px) rotate(21deg)');
      	 }
    });
  });
})

});