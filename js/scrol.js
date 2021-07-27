$(window).scroll(function() { //добавляем обработчик
	if($(window).scrollTop() > 10)
	{
		$('header').css({'background-image': '-webkit-linear-gradient(bottom, #2b1718 0%, #3f3f3f 100%)'});
		$('header').css({'background-image': '-ms-linear-gradient(bottom, #2b1718 0%, #3f3f3f 100%)'})		//меняем фон шапке при начале прокрутки
	}
	if($(window).scrollTop() < 10)
	{
		$('header').css({'background-image': '-webkit-linear-gradient(top, rgba(13,13,13,.8) 0%, rgba(13,13,13,0) 100%)'});
		$('header').css({'background-image': '-ms-linear-gradient(top, rgba(13,13,13,.8) 0%, rgba(13,13,13,0) 100%)'});//и обратно
	}


	if($(window).scrollTop() > 250) //отслеживаем положение скролла
	{
		firstAnimation();
	}
	if($(window).scrollTop() > 2200)
	{
		secondAnimation();

	}

});

