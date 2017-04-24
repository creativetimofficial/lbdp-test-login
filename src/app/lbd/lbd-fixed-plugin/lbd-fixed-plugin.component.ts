import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

var background_image = true;

@Component({
  selector: 'lbd-fixed-plugin',
  templateUrl: './lbd-fixed-plugin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LbdFixedPluginComponent implements OnInit{
    ngOnInit(){
        $.getScript('../../../assets/js/jquery.sharrre.js');
        if($(window).width() > 767){
            if(window.location.pathname == '/dashboard'){
                if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
                    $('.fixed-plugin .dropdown').addClass('open');
                }
            }
        }
        $('.fixed-plugin a').click(function(event){
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if($(this).hasClass('switch-trigger')){
                if(event.stopPropagation){
                    event.stopPropagation();
                }
                else if(window.event){
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .badge').click(function(){

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('color');

             $('.sidebar').attr('data-color',new_color);

            if($('body > .navbar-collapse').length != 0){
                $('body > .navbar-collapse').attr('data-color',new_color);
            }
        });

        $('.fixed-plugin .img-holder').click(function(){

            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');


            var new_image = $(this).find("img").attr('src');

            $('.sidebar').find('.sidebar-background').fadeOut('fast', function(){
                $('.sidebar').find('.sidebar-background').css('background-image','url("' + new_image + '")');
                $('.sidebar').find('.sidebar-background').fadeIn('fast');
            });

            if($('body > .navbar-collapse').length != 0){
                $('body > .navbar-collapse').css('background-image','url("' + new_image + '")');
            }
        });

        $('.switch input').change(function(){

            if($(this).is(':checked')){
                $('.sidebar').find('.sidebar-background').fadeIn('fast');
                $('.sidebar').attr('data-image','#')
                background_image = true;
            } else {
                $('.sidebar').removeAttr('data-image');
                $('.sidebar').find('.sidebar-background').fadeOut('fast');
                background_image = false;
            }
        });
    }

    constructor(){}
}
