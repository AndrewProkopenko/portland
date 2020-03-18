$(document).ready(function(){
    $('.burger').click(function() { 
        // console.log('Hi, jQuery')
        $('.main-menu').addClass('active');
       
    })
    $('.main-menu .icon-cancel').click(function() { 
        $('.main-menu').removeClass('active');
    })
    function appendToMenu() { 
        if($(document).width() < 995){ 
            $('.menu-categories ul').clone().appendTo($('.main-menu'));
            $('.menu-categories .support').clone().appendTo($('.main-menu'));
        }
    }
    
        appendToMenu();
     
    // console.log('Hi, jQuery')
})  