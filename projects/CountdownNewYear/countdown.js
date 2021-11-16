document.addEventListener("DOMContentLoaded", function(){
    const countDate = new Date("jan 1, 2022 00:00:00").getTime();
    function newYear(){
        const now = new Date().getTime();
        let gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const d = Math.floor( gap / (day) );
        const h = Math.floor( (gap % (day)) / (hour) );
        const m = Math.floor( (gap % (hour)) / (minute) );
        const s = Math.floor( (gap % (minute)) / (second) );
        document.querySelector(".day").innerText = d;
        document.querySelector(".hours").innerText = h;
        document.querySelector(".minutes").innerText = m;
        document.querySelector(".seconds").innerText = s;
    }
    setInterval(function(){
        newYear();
    })

    //bong tuyet roi
    setInterval(function(){
        var documentHeight = $(document).height();
        var startPositionLeft = Math.random() * $(document).width() - 100;
        var startOpacity = 0.5 + Math.random();
        
        var endPositionTop = documentHeight - 50;
        var endPositionLeft = startPositionLeft - 100 + Math.random() * 200;
        var durationFall = documentHeight * 10 + Math.random() * 4000;
        
        var animationFlake = endPositionLeft > startPositionLeft ? 'clockwise' : 'counterclockwise';
        var sizeFlake = 10 + Math.random() * 20;

        $('#bongtuyet.hidden').clone()
        .attr('class', null)
        .attr('id', 'bongtuyet')
        .appendTo('.background,.foreground')
        .css({
            left: startPositionLeft,
            opacity: startOpacity,
            '-webkit-animation': 'spin-' + animationFlake + ' 6s linear infinite',
            '-moz-animation': 'spin-' + animationFlake + ' 6s linear infinite',
            'animation': 'spin-' + animationFlake + ' 6s linear infinite',
            'font-size': sizeFlake
        })
        .animate({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.2
        },
        durationFall,
        'linear',
        function() {
            $(this).remove();
        });
    }, 250);
})