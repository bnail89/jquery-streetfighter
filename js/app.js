$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});

$('body').on('keydown', function(e) {
        if (e.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
       .on('keyup', function(e) {
        if (e.which == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });

$(document).ready(function(){
    $('.hulk-ryu').mouseenter(function(){
        $('.hulk-ryu-still').hide();
        $('.hulk-ryu-ready').show();
    })
    .mouseleave(function() {
        $('.hulk-ryu-still').show();
        $('.hulk-ryu-ready').hide();
    })
    .mousedown(function(){
        playHulkHadouken();
        $('.hulk-ryu-ready').hide();
        $('.hulk-ryu-throwing').show();
        $('.hulk-hadouken').finish().show().animate(
            {'right': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('right', '520px');
            });
    })
    .mouseup(function(){
        $('.hulk-ryu-throwing').hide();
        $('.hulk-ryu-ready').show();
    });
});

$('body').on('keydown', function(e) {
        if (e.which == 90) {
            $('.hulk-ryu-still').hide();
            $('.hulk-ryu-ready').hide();
            $('.hulk-ryu-cool').show();
        }
    })
       .on('keyup', function(e) {
        if (e.which == 90) {
            $('.hulk-ryu-cool').hide();
            $('.hulk-ryu-still').show();
        }
    });

function playHadouken() {
    $('#hadouken-sound')[0].volume = 1;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playHulkHadouken() {
    $('#hulk-hadouken-sound')[0].volume = 1;
    $('#hulk-hadouken-sound')[0].load();
    $('#hulk-hadouken-sound')[0].play();
}

function setVolume() {
    $("#ryu-music").prop('volume', 0.5);
}






