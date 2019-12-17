
// CLICKABLE

// function clickable(){
//     $( "body" ).addClass( "clickable" );
//     $( ".StartButton" ).addClass( "noClick" );
//   }
//   setTimeout(clickable, 24500);



$(".preloader__button").click(function() {
    tl.play();
    document.getElementById("audio-sms").play();     
 });


// GSAP TIMELINE

// var tl = gsap.timeline();
var tl = gsap.timeline({paused: true});
tl.to(".preloader", {duration: 2, left: 4000, ease: Expo.easeInOut});
tl.from(".phoneWrapper", {delay: -1.5, scaleX:2, scaleY:2, duration: 2, ease: Bounce.easeOut});
tl.to(".phoneDisplay--intro", {delay: 2, opacity:0, duration: 0.1});
tl.from(".phoneDisplay--meta", {opacity:0, duration: 0.1});
tl.to(".phoneDisplay__menu", {opacity:1, duration: 0.1});
tl.from(".phoneDisplay--newMessage", {opacity:0});
tl.from(".phoneWrapper", {x:"-5", yoyo:true, duration: 0.1, repeat:10});

// SOUND VIBRATION 

$("#play-merrychristmas, #play-jinglebells, #play-auldlangsyne").click(function(){
    $("#phoneWrapper").addClass("vibrate");
});

$("#phoneDisplay__stop").click(function(){
    $("#phoneWrapper").removeClass("vibrate");
});


// SOUND MENU

document.getElementById("play-merrychristmas").addEventListener("click", function () {
    document.getElementById("audio-merrychristmas").play();
    document.getElementById("audio-jinglebells").pause();
    document.getElementById("audio-auldlangsyne").pause();
});

document.getElementById("play-jinglebells").addEventListener("click", function () {
    document.getElementById("audio-jinglebells").play();
    document.getElementById("audio-merrychristmas").pause();
    document.getElementById("audio-auldlangsyne").pause();
});

document.getElementById("play-auldlangsyne").addEventListener("click", function () {
    document.getElementById("audio-auldlangsyne").play();
    document.getElementById("audio-jinglebells").pause();
    document.getElementById("audio-merrychristmas").pause();
});


// MAIN MENU

$(".menuLink--homeSms").click(function(){
    $(".phoneDisplay__content--sms").hide();
    $(".phoneDisplay--sms").show();
    $(".phoneDisplay__content--noSms").show();
});

$(".menuLink--sms").click(function(){
    $(".phoneDisplay__content--sms").hide();
    $(".phoneDisplay__content--noSms").show();
    tl.set(".phoneDisplay--menu",{autoAlpha:0,display:"none"});
    $(".smsNotification").hide();
    tl.to(".phoneDisplay--santaRun", {opacity:1, duration: 0.1});
    tl.from(".runWrapper--1", {x: -180, duration: 3, ease: Power0.easeNone,});
    tl.to(".runWrapper--1", {delay: 2, x: 180, duration: 2, display:"none", ease: Power0.easeNone,});
    tl.from(".runWrapper--2", {x: -180, duration: 3, ease: Power0.easeNone,});
    tl.to(".runWrapper--2", {delay: 2, x: 180, duration: 2, display:"none", ease: Power0.easeNone,});
    tl.from(".runWrapper--3", {x: -180, duration: 3, ease: Power0.easeNone,});
    tl.to(".phoneDisplay--santaRun", {delay: 3, opacity:0, duration: 0});
    tl.set(".phoneDisplay--menu",{autoAlpha:1,display:"block"});
});

$(".playSnake").click(function(){
    $(".phoneDisplay--menu").hide();
    $(".phoneDisplay--snake").toggle();
    $(".phoneDisplay--snake").fadeTo(1, 1); 
});

$(".menuLink--cookies").click(function(){
    $(".phoneDisplay--menu").hide();
    $(".phoneDisplay--cookies").show();
});

$(".cookieOpen").click(function(){
    $(".phoneDisplay__content--cookiePre").hide();
    $(".phoneDisplay__content--cookies").show();
    $(".phoneDisplay__refresh").show();
});

$(".phoneDisplay__menu--open").click(function(){
    $(".phoneDisplay--menu").show();
    $(".menuArrow").hide();
    $( ".StartButton" ).removeClass( "noClick" );
    $(".phoneDisplay--newMessage, .phoneDisplay--songs, .phoneDisplay--sms, .phoneDisplay--cookies, .phoneDisplay--snake").hide();

});

$(".phoneNavigation__menu").click(function(){
    $(".phoneDisplay--menu").toggle();
    $(".phoneDisplay--newMessage, .phoneDisplay--songs, .phoneDisplay--sms, .phoneDisplay--cookies").hide();
});

$(".phoneDisplay__menu--close").click(function(){
    $(".phoneDisplay--menu").hide();
    $(".phoneDisplay--newMessage").show();
});

$(".menuLink--songs").click(function(){
    $(".phoneDisplay--songs").show();
    $(".phoneDisplay--menu").hide();
});


// SOUND MENU STOP

document.getElementById("phoneDisplay__stop").addEventListener("click", function () {
    document.getElementById("audio-auldlangsyne").pause();
    document.getElementById("audio-jinglebells").pause();
    document.getElementById("audio-merrychristmas").pause();
});


// CURRENT TIME 

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

document.getElementById("time").innerHTML = time;

