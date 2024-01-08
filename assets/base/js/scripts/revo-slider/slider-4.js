$(document).ready(function() {
    
    var slider = $('.c-layout-revo-slider .tp-banner');
    var cont = $('.c-layout-revo-slider .tp-banner-container');
    var height = (App.getViewPort().width < App.getBreakpoint('md') ? 400 : 620);

    var api = slider.show().revolution({
        sliderType:"standard",
        sliderLayout:"fullwidth",
        delay: 15000,    
        autoHeight: 'off',
        
        touchenabled: "on",

        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            onHoverStop:"on",
            arrows: {
                style:"circle",
                enable:true,
                hide_onmobile:false,
                hide_onleave:false,
                tmp:'',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
            },
            //---> Dan add bullet
            bullets: {
                style:"round",
                enable:true,
                hide_onmobile:false,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                hide_under:0,
                hide_over:9999,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                space:5,
                h_offset:0,
                v_offset:60,

            },         
        },

        shadow: 0,

        spinner: "spinner2",

        disableProgressBar:"on",

        fullScreenOffsetContainer: '.tp-banner-container',

        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,
    
    });
}); //ready