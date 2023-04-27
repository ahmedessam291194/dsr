$(document).ready(function() {
    $("#details-section").hide(200);
    $("[data-box-num]").on("click", function() {
        let sectionNum = $(this).data("box-num");
        $(`.details-box__${sectionNum}`).addClass("details-box--show").siblings(".details-box").removeClass("details-box--show");
        $("#home-section").fadeOut(100);
        setTimeout(() => {
            $("#details-section").fadeIn(100);
        }, 200);
    });

    $(".back-btn").on("click", function() {
        $("#details-section").fadeOut(100);
        
        setTimeout(() => {
            $("#home-section").fadeIn(100);
        }, 200);
    });

    $(".details-box__item").on("click", function() {

        let audioList = $("audio");
        for (const ele of audioList) {
            ele.pause();
            ele.currentTime = 0;
        }
        let audio = $(this).find(".details-box__audio")[0];

        audio.play();

        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 5000);
    });
});