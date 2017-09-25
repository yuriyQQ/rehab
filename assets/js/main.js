$(function(){

	if($(window).scrollTop() > 140){
		$('header .jsClientix_openWidget').addClass('btn-fixed')
	}else{
		$('header .jsClientix_openWidget').removeClass('btn-fixed')
	}
	$(window).scroll(function() {
		if($(window).scrollTop() > 140){
			$('header .jsClientix_openWidget').addClass('btn-fixed')
		}else{
			$('header .jsClientix_openWidget').removeClass('btn-fixed')
		}
	})
	
	$('.resort .servm_menu_elem').click(function(){
		sliderNum.goToSlide($(this).attr('data-id'));
		
		inSliders[$(this).attr('data-id')].reloadSlider();
	})
	
	$('a[data-scroll]').click(function(e){
		e.preventDefault();
		$(window).scrollTo($(this).attr('data-scroll'), 350, {offset: -120});
	})
	
	if(window.location.hash != ''){
		$(window).scrollTo(window.location.hash, 350, {offset: -120});
	}
	
	if(	$('.slide-reab').size() > 0){
		sliderReab = $('.slide-reab').bxSlider({
				  	slideWidth: 896,
					slideSelector: '.slide-reab-one',
					mode: 'fade',
					auto: true,
					onSliderLoad: function(){
						$('.bx-next').css({ 'left': $('.slide-reab-block').find('.bx-pager-item').size()*20 + 24 + 42});
					}
				})
	}
	if(	$('.slide-number').size() > 0){
		sliderNum = $('.slide-number').bxSlider({
				  	slideWidth: 1280,
					slideSelector: '.slide-number-one',
					mode: 'fade',
					controls: false
				})
		
		var inSliders = Array();
		
		$('.slide-numberin').each(function(){
			var size = $(this).find('.slide-numberin-one').size();
			$(this).attr('data-size',size);
			var $slide = $(this).bxSlider({
					  	slideWidth: 800,
						slideSelector: '.slide-numberin-one',
						mode: 'fade',
						onSliderLoad: function(){
							$(this).closest('.slide-numberin-block').find('.bx-next').css({ 'left': $(this).closest('.slide-numberin-block').find('.slide-numberin').attr('data-size')*20 + 24 + 42});
						}
					})
			inSliders.push($slide);
		})
	}
	if(	$('.slide-big').size() > 0){
		slider = $('.slide-big').bxSlider({
				  	slideWidth: 1280,
					hideControlOnEnd: true,
					controls: false,
					slideSelector: '.slide-big-one',
					mode: 'fade'
				})
	}
	if(	$('.slide-small').size() > 0){
		sliderSmall = $('.slide-small').bxSlider({
				  	slideWidth: 320,
					hideControlOnEnd: true,
					slideSelector: '.slide-small-one',
					minSlides: 4,
					maxSlides: 4,
					slideMargin: 0
				})
				
		$('.slide-small-one').click(function(){
			slider.goToSlide($(this).attr('data-id'));
		})
	}
	$('a[data-toggle]').click(function(){
		id = $(this).attr('data-toggle');
		$(this).remove();
		$(id).show();
	})

    /*--------Хед меню моб------*/
    $('.head_top_menu_icon').click(function(){
        if($('.head_mid').css('display') == 'block'){
            $(this).css({'background-image': 'url(/assets/svg/index_mob_menu.svg)' });
            $('body').removeClass('body_dark');
            
            
            if(screen.width < 426){     //if(screen.width < 767){
                $(this).css({'margin-left': '0px' }); 
                $(this).css({'width': '20px' });          
            }
            else{ 
                $(this).css({'margin-left': '24px' }); 
                $(this).css({'width': '22px' });
            }
            $(this).attr('slide','1');
        }else{
            $(this).css({'background-image': 'url(/assets/svg/cross.svg)' });
            $('body').addClass('body_dark');
            
            if(screen.width < 426){    //if(screen.width < 767){        
                $(this).css({'margin-left': '4px' });  
                $(this).css({'width': '16px' });          
            }
            else{ 
                $(this).css({'margin-left': '28px' });
                $(this).css({'width': '18px' });          
            }
            $(this).removeAttr('slide');
        }
        $('.head_mid').fadeToggle(0);
        if(screen.width < 426){ $('.head_top_call').fadeToggle(0); }
        $('section#Form').fadeOut(0);
        $('section#FormCall').fadeOut(0);
        window.scrollTo(0,0);
        document.body.style.overflow = "hidden";     
        if($(this).attr('slide') == '1'){
            document.body.style.overflow = "";
        } 
        
        //$('header').css('height','248px')
    });
    /*--------Форма в хед------*/
    
//    $('header .btn_white, footer .btn_white').modaal({
//    	type: 'iframe',
//    	fullscreen: true,
//    	loading_content: 'Loading content, please wait.'
//    });
    
//    $('header .btn_white, footer .btn_white').click(function(){
//       // $('section#Form').fadeIn(250);
//        if(screen.width < 321){
//             $('.head_mid').fadeToggle(0);
//             $('.head_top_call').fadeToggle(0);
//        }
//        window.scrollTo(0,0);
//        document.body.style.overflow = "hidden";
//        // если оба выключены, разблокировать скролл
//    });
    
    $('.head_top_call_back').click(function(){
        $('section#FormCall').fadeIn(250);
        if(screen.width < 321){
             $('.head_mid').fadeOut(0);
             $('.head_top_call').fadeOut(0);
        }
        window.scrollTo(0,0);
        document.body.style.overflow = "hidden"; 
    });
    
    $('.form_close').click(function(){
        $('#FormCall').fadeOut(250);
        $('#Form').fadeOut(250);
        document.body.style.overflow = "";
    });
    /*--------Новости------*/
    $('.list_script').click(function(){
    if($(this).parent().find('ul').css('display') == 'block'){
        $(this).find('.arr_list').css({'transform':'rotateX(0deg)'});
    }else{
        $(this).find('.arr_list').css({'transform':'rotateX(180deg)'});
    }
    $(this).parent().find('ul').slideToggle('0.5');
    });
    /*--------О центре отзыв------*/
    $('.aboutre_top_btn').click(function(){
       id = ($(this).attr('id'));
       $('.aboutre_top_btn').removeClass('aboutre_top_btn_ch');
       $(this).addClass('aboutre_top_btn_ch');
       $('.aboutre_re_out').css('display','none');
       $('.aboutre_re_out[id="'+id+'"]').css('display','block');
    });
    /*--------Отзывы моб. кнопка оставить отзыв------*/
    $('.rev_tit_fb').click(function(){
        window.scrollTo(0,$('.rev_fb_title').offset().top);
    });
    /*--------Отзывы сортировка кнопки------*/
    function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
    }

    category = getUrlVars()["category"];
    //console.log(category);
    if(category){
        $('.rev_top_btn').removeClass('rev_top_btn_ch');
        //console.log($('.rev_top_btn[id="'+id+'"]'));
        $('.rev_top_btn[id="'+category+'"]').addClass('rev_top_btn_ch');
    }
    /*--------Отзывы список формы------*/
    $('.rev_fb_list li').click(function(){
        
        type = $('.rev_fb_list_tit').attr('data-list');
        $('.rev_fb_list li[data-list="'+type+'"]').toggleClass('rev_ch');
        $(this).toggleClass('rev_ch');
        
        type = $(this).attr('data-list');
        text = $(this).text();
        $('input[name="f_Type"]').val(type);
        $('.rev_fb_list_tit').attr('data-list',type);
        $('.rev_fb_list_tit > val').html(text);
        $(this).closest('.rev_fb_list').find('.arr_list').css({'transform':'rotateX(0deg)'});
        $(this).parent('ul').slideToggle('0.5');
        //$(this).attr('rev_ch');
        //$('.rev_fb_list li[data-list="'+type+'"]').toggleClass('rev_ch');
    });
    /*--------------скролл------------------*/
    if( $('.slide_block').size() >0 ){
    var imageItemBlockTop = $('.slide_block').offset().top;
    $(window).scroll(function(){
    if($('.slide_block').is('.edf_slide')){
        
        if(screen.width < 321){
        	if($(window).scrollTop() <= $('header').height() + 198){
                $('.slide_block').fadeOut(50);     
            }else if(($(window).scrollTop() > $('header').height() + 198)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').fadeIn(50);  
            }
        }else if(screen.width > 769){//tablet
        	if($(window).scrollTop() <= $('header').height() + 198){
                $('.slide_block').fadeOut(50);     
            }else if(($(window).scrollTop() > $('header').height() + 198)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').fadeIn(50);  
            } 
        }
        
    }else if($('.slide_block').is('.news_tag')){
        if(screen.width < 321){

        }else if(screen.width < 769){
            if($(window).scrollTop() <= $('header').height() + 72){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '104px 0 0 24px' });
            }else if(($(window).scrollTop() > $('header').height() + 72)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 512px' });
                $('.slide_block').css({'top': '32px' });
            }
        }else if((screen.width > 769) && (screen.width < 1025)){
            if($(window).scrollTop() <= $('header').height() + 72){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '104px 0 0 24px' });
            }else if(($(window).scrollTop() > $('header').height() + 72)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 744px' });
                $('.slide_block').css({'top': '32px' });
            }  
        }else{  //tablet
            if($(window).scrollTop() <= $('header').height() + 132){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '164px 0 0 32px' });
            }else if(($(window).scrollTop() > $('header').height() + 132)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 768px' });
                $('.slide_block').css({'top': '32px' });
            }  
        }
    }else{
        
        if(screen.width < 321){
            if($(window).scrollTop() <= $('header').height() + 267){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '299px 0 0 32px' });
            }else if(($(window).scrollTop() > $('header').height() + 267)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 928px' });
                $('.slide_block').css({'top': '32px' });
            }
        }else if((screen.width > 769) && (screen.width < 1025)){  //tablet
            if($(window).scrollTop() <= $('header').height() + 100){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '132px 0 0 24px' });
            }else if(($(window).scrollTop() > $('header').height() + 100)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 770px' });
                $('.slide_block').css({'top': '32px' });
            }
        }else{
            if($(window).scrollTop() <= $('header').height() + 100){
                $('.slide_block').css({'position': 'static' });
                $('.slide_block').css({'margin': '132px 0 0 24px' });
            }else if(($(window).scrollTop() > $('header').height() + 100)&&($(window).scrollTop() < ($('footer').offset().top - $('.slide_block').height() - 225 ))){
                $('.slide_block').css({'position': 'fixed' });
                $('.slide_block').css({'margin': '0px 0 0 512px' });
                $('.slide_block').css({'top': '32px' });
            }
        }
        
    }
        /*else if($(window).scrollTop() > ($('footer').offset().top - $('.slide_block').height() - 225 )){
            console.log(3);
            //$('.slide_block').css({'top': $('footer').offset().top - $('.slide_block').height() - 298 - 50 });
        }*/
    }); 
    };  
    /*------------Услуги кнопки-----------*/
    $('section#ServF .servf_sl_elem').click(function(){
    text = $(this).find('.servf_sl_text').text().trim();
    
    $('caption > h3').each(function(){
        if($(this).text() == text){
            if($(this).closest('caption').hasClass('servf_cap_ch')){
            $(this).trigger("click");
            }
        }else{
            if(!$(this).closest('caption').hasClass('servf_cap_ch')){
            $(this).trigger("click");
            }
        }
    });
    });
    /*------------Услуги меню-----------*/
    $('section#ServF caption[data-open != "1"]').click(function(e){
        //e.preventDefault();
        $(this).parent().find('tbody').slideToggle("0.5");
        //$('footer').slideToggle("slow");
        $(this).toggleClass('servf_cap_ch');
        return false;
    });
    /*------------Услуги поиск-----------*/
    $('section#ServF input').on('change keyup',(function(){
        if ($(this).val().length> 2){
            var flag = true;
            var l=$(this).val().length;
            var t=$(this).val().toLowerCase();
            $('table').css('display','none');
            $('tr').css('display','none');
            
            $('th').each(function(){
                despan($(this));
                if ($(this).text().toLowerCase().match(t)){
                    $(this).closest('table').css('display','block');
                    $(this).closest('tr').css('display','block');
                    marker($(this),t,l);
                }
            });
            
            $('caption').each(function(){
                despan($(this));
                if ($(this).text().toLowerCase().match(t)){
                    $(this).closest('table').css('display','block');
                    $(this).closest('table').find('tr').css('display','block');
                    marker($(this),t,l);
                }
            });
                        
            $('caption').each(function(){
            if(($(this).closest('table').css('display') == 'block')&&($(this).hasClass('servf_cap_ch'))){
                $(this).trigger("click");
            }
            if($(this).closest('table').css('display') == 'block'){
                flag = false;
            }
            });          
            
            if(flag){
                $('.servf_js_nole').css('display','block');
            }else{
                $('.servf_js_nole').css('display','none');
            }
            
        }else{ //если менее 2 символов, включить все обратно
            $('table').css('display','block');
            $('tr').css('display','block');
            $('.servf_js_nole').css('display','none');
            
            $('th').each(function(){
                despan($(this));
            });
            //все свернуть
            $('caption').each(function(){
                despan($(this));
                if(!$(this).hasClass('servf_cap_ch')){
                    $(this).trigger("click");
                }
            });
        }
        $('caption').each(function(){
                if($(this).closest('table').css('display') == 'none'){
                    $(this).trigger("click");
                }          
        });
    }));
    
    function marker(th,text,len){
        var pos=th.html().toLowerCase().indexOf(text);
        var last=th.html().slice(pos+len,th.html().length);                           
        var text=th.html().slice(pos,pos+len);
        var first=th.html().slice(0,pos);                            
        th.html(first+'<strong class="text_filt">'+text+'</strong>'+last);    
    }  
          
    function despan(th){
        var textspan=th.find('strong').text();                    
        var t=th.html().replace(/<strong.*strong>/,textspan);
        th.html(t);
    }
    /*--------Форма------*/
    $('form').submit(function(e){ //click
        e.preventDefault();
        var mainFlag = 1,
            $form = $(this);
        //alert('sucs') 
        
        $form.find('input[data-check]').each(function(){
            $(this).blur();
            mainFlag *= $(this).attr('flag')                    
        });
        
        $form.find('textarea[data-check]').each(function(){
            $(this).blur();
            mainFlag *= $(this).attr('flag')                    
        });
                
         if(mainFlag){
          //alert('sucs');
          $.ajax({
                method:'POST',
                url:$(this).attr('action')+'?isNaked=1',
				data:$(this).serialize(),
				success:function(callback){
				    
				if(callback != ''){
					callback = $.parseJSON(callback);
					if(callback.action == 'success'){
                    $form.find('.specd_f_sucs').fadeToggle("slow");
                    $form.find('input').val('');
                    $form.find('textarea').val('');
                    //$(this).trigger("click");
                    //arrr
                    
                        setTimeout(function() {
                        if(screen.width < 321){
                            $('.head_mid').fadeOut(250);
                            $('.head_top_call').fadeOut(250);
                            $('.head_top_menu_icon').css({'background-image': 'url(/assets/svg/index_mob_menu.svg)' });
                            $('.head_top_menu_icon').css({'width': '20px' });
                            $('.head_top_menu_icon').css({'margin-left': '0px' });
                        }
                        $('section#FormCall').fadeOut(250);
                        $('section#Form').fadeOut(250);
                        $('.specd_f_sucs').fadeOut(250);
                        document.body.style.overflow = "";
                        }, 3000);
                        
                    
                    
                    return;
                    }
				}
				}
			})   
         }
         else
         {
            //alert('unsacs');
         }  
        });
        /*--------Форма------*/ 
        $('.specd_f_sucs').click(function(){
            $(this).fadeToggle("slow");
        });
        /*-----mask phone*/
        $('input[data-type="phone"]').mask("+7(999)999-99-99");
   
        
});   
    /*--------Форма проверка------*/ 
$(function(){
	Check = {                          //объявление класса и параметров по умолчанию
		flag : true,
		error_class : 'error',
		form : $('form'),
        
		verify : function(th){              //функция проверки
			var object1 = this;             //сохраняем исходный объект			
				var type = th.attr('data-type'),               //записываем переменные inputа
					val = th.val(),
					check_ignore = th.attr('data-ch-i');
                    //console.log(type);
				if(!Check.types[type](th, val, check_ignore)){  //проверка для данного типа
                    th.addClass(this.error_class);                                //есть ошибка, обнуляем флаг                                  
					object1.state(false,th);                    //изменяем состояние (см. далее, визуальное изменение)
                    this.flag = false;
                    //console.log('ch_i');
                    
				}else{
					object1.state(true,th);
                    
				}
		},
        
		types : {                     //описание проверки каждого типа данных
        /*----------- подфункции верификации ----------*/
			nole : function(val){            //проверка на заполненность
				if( val == '' ) 
					return false;              //не важно как называется функция проверки - тру - нет ошибки ; фолс - ошибка
				else
					return true;
			},
            
            ints : function(val){            //проверка на числа
				var reg=/^[0-9]+$/;
                return reg.test(val);                   
            },
            
            chars : function(val){            //проверка на символы
				var reg=/^[A-zА-я ]+$/;
                return reg.test(val);                   
            },
            
            mail : function(val){            //проверка на email
				//console.log("mail");
                var reg=/\w+@[a-zA-Z_]+[a-zA-Z_]{2,6}/;
                return reg.test(val);                   
            },
            
            lenmin : function(val, l){
                if (val.length >= l){ return true;}
                else {return false};
            },
            
            phone_ch : function(val){
                var reg=/^[0-9()+-]+$/;
                return reg.test(val);
            },
            
            up : function(val, obj){            //все слова -> заглавные
            var tArray = val.toLowerCase().split(" ");
            val = ('');
            for (i = 0 ; i < tArray.length ; ++i) //output(tArray[i], i)
                val=val+tArray[i].charAt(0).toUpperCase()+tArray[i].slice(1)+' ';            
            val = val.slice(0, -1);
            obj.val(val);
            //return(val);
			},
            /*----------- подфункции верификации конец----------*/
             
            text : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "lenmin":"2"};                                
                return this.universal(obj, val, ch_i, ch_list);                              
			},
            name : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "chars":"1", "up":"1", "lenmin":"2"};                                
                return this.universal(obj, val, ch_i, ch_list);                                 
			},
            email : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "mail":"1", "lenmin":"2"};                                
                return this.universal(obj, val, ch_i, ch_list);                                
			},
            sum : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "ints":"1", "lenmin":"2"};                                
                return this.universal(obj, val, ch_i, ch_list);                                            
			},
            phone : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "phone_ch":"1","lenmin":"11"};                                
                return this.universal(obj, val, ch_i, ch_list);                                            
			},
            mphone : function(obj, val, ch_i){
                var ch_list = {"nole":"1", "phone_ch":"1", "lenmin":"11"};                                
                return this.universal(obj, val, ch_i, ch_list);                                            
			},
            
            universal : function(obj, val, ch_i, ch_list){
            var flag = true;
            error_text='';

            if(ch_i==1){return flag; 
            }
                else if(ch_i==0){
                if (ch_list['nole']==1){flag=(flag && this.nole(val)); if(!this.nole(val)){error_text='Заполните поле'}};
                if (ch_list['ints']==1){flag=(flag && this.ints(val)); if(!this.ints(val)){error_text='Поле должно содержать только цифры'}};
                if (ch_list['chars']==1){flag=(flag && this.chars(val)); if(!this.chars(val)){error_text='Поле должно содержать только буквы'}};
                if (ch_list['mail']==1){flag=(flag && this.mail(val)); if(!this.mail(val)){error_text='Некорректный e-mail'}};
                if (ch_list['lenmin']!=''){flag=(flag && this.lenmin(val,(ch_list['lenmin']))); 
                if(!this.lenmin(val,(ch_list['lenmin']))){error_text='Поле должно быть не короче '+ch_list["lenmin"]+' символов'}};
                if (ch_list['phone_ch']==1){flag=(flag && this.phone_ch(val)); if(!this.phone_ch(val)){error_text='Некорректный номер телефона'}};
                if (ch_list['up']==1){this.up(val,obj);};          
                return flag;                                             
                }
            return true;
            }
		},
		init:function(form,error){                            //функция инициализации
			this.error_class = error ? error : this.error_class; //если передали код ошибки, присваеватся он. если нет -                                    // this на что тут ссылается? на проверяемый input?
			this.form = form ? form : this.form;                 //если передали форму, присваивается она, нет - по умолчанию
		},
		state: function(flag, obj){                           //присваиваем класс ошибки объекту
			if(flag){
				obj.removeClass(this.error_class);            //если ошибки нет-удаляем класс ошибки, и наоборот
                obj.attr('flag','1');
			}else{                                            //??вот это вообще не понятно зачем в отдельную функцию выносить
				obj.addClass(this.error_class);               //??и зачем добавление\удаление. типа для перепроверки? а значения не скидываются при повторной проверке?
                obj.attr('flag','0');
			}
		},
		defaultState: function(obj){                          //удаляем класс ошибки
			obj.removeClass(this.error_class);                //
		}
	}
	
	 
     $(function(){
        
        error_text='124';
        function checkForm(form){
        check.init($('#form_reg'),'RedError');            //передаем форму и класс ошибки
			//check.verify();                                   //проверка
            $('input[data-check]').focus(function(){        //фокус на элементе, удаляем класс ошибки focus				
                
                $(".reg_block4").css({'display':'none'});
                $(this).parent().find('.reg_block4').css({'display':'block'});
                check.defaultState($(this));
                /*
                if (($(this).attr('data-type')=="mphone")||($(this).attr('data-type')=="phone")){
                    $(this).mask("+7(999)999-99-99")
                }
                */
			})
            
			$('input[data-check]').blur(function(){        //фокус на элементе, удаляем класс ошибки keydown blur
                check.verify($(this));
                $(".reg_block4").css({'display':'none'});
                if(error_text!=''){
                    var text = $(this).parent().find('.reg_block4').html();
                    $(this).parent().find('.reg_block4').attr('def_text',text);
                    $(this).parent().find('.reg_block4').css({'display':'block'});
                    $(this).parent().find('.reg_block4').text(error_text);
                }
                else if($(this).parent().find('.reg_block4').attr('def_text')){
                    text = $(this).parent().find('.reg_block4').attr('def_text');
                    $(this).parent().find('.reg_block4').html(text);
                }
                
                var mainFlag = 1;
                 
                $('input[data-check]').each(function(){
                    if($(this).attr('data-ch-i')==0){
                    mainFlag *= $(this).attr('flag');
                    }                    
                });
                var t=$(this).parent().parent().parent('div.mapreg').attr('id');
                if(mainFlag){
                //активируем кнопку далее                                                                                                                
                   $(".mapreg[id='"+t+"']").find("a.btn_forw_out_ina").removeClass("btn_forw_out_ina")
                        .addClass("btn_forw_out");
                }
                else{
                    $(".mapreg[id='"+t+"']").find("a.btn_forw_out").removeClass("btn_forw_out")
                        .addClass("btn_forw_out_ina");    
                }                    
			})
        } 

    var check = Check;	
	if($('form').size() > 0){                        //есть ли форма с id
	checkForm($(this));	                        
	}       
    });
}); 
	/*      --------------check -----------------      */
    
    /*-----------------submit--------------------------------------------------*/
    

    
    
    
    
      