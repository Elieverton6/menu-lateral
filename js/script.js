
$(function(){

    $('.icon-menu').click(function(){
        $('.container-menu-lateral').css('display','block');
        $('.container-menu-lateral').css('animation-name','anim-entrar');
        $('.container-menu-lateral').css('animation-duration','1.2s');
    });

    $('.fechar-button button').click(function(){;
        $('.icon-menu i').css('display','block');
        $('.container-menu-lateral').fadeOut();
    });

});