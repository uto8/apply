$(function(){
  $(window).scroll(function(){
    $(".cover-slide").each(function(){
      var scroll=$(window).scrollTop();
      var pos=$(this).offset().top;
      var delay=600;
      if(scroll>pos-delay){
        $(this).addClass("inview");
      }
    });
  });
})
$(".item1").on("mouseenter",()=>{
  $("#section02").addClass("hover1");
})
$(".item1").on("mouseleave",()=>{
  $("#section02").removeClass("hover1");
})
$(".item2").on("mouseenter",()=>{
  $("#section02").addClass("hover2");
})
$(".item2").on("mouseleave",()=>{
  $("#section02").removeClass("hover2");
})
$(".item3").on("mouseenter",()=>{
  $("#section02").addClass("hover3");
})
$(".item3").on("mouseleave",()=>{
  $("#section02").removeClass("hover3");
})
$(".item4").on("mouseenter",()=>{
  $("#section02").addClass("hover4");
})
$(".item4").on("mouseleave",()=>{
  $("#section02").removeClass("hover4");
})

// =======================================
var fadeConts = document.querySelectorAll('.work-item'); // フェードさせる要素の取得
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var windowH = window.innerHeight; // ウィンドウの高さ
var remainder = 200; // ちょっとはみ出させる部分
// 要素の位置を取得
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;

  for (var i = 0; i < fadeConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .showを付与
      fadeConts[i].classList.add('inview');
      fadeConts[i].classList.remove('view');
    } else {
      // 逆に.showを削除
      fadeConts[i].classList.remove('inview');
      fadeConts[i].classList.add('view');
    }
  }
});
// =========================================

// フェードさせる要素の取得
var fadeConts2=document.querySelectorAll(".text-pop");
var fadeContsRect2 = []; // 要素の位置を取得するための配列
var fadeContsTop2 = []; // 要素の位置を取得するための配列
var windowY2 = window.pageYOffset; // ウィンドウのスクロール位置
var windowH2 = window.innerHeight; // ウィンドウの高さ
var remainder2 = 300; // ちょっとはみ出させる部分
// 要素の位置を取得
for (var i = 0; i < fadeConts2.length; i++) {
  fadeContsRect2.push(fadeConts2[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect2.length; i++) {
  fadeContsTop2.push(fadeContsRect2[i].top + windowY2);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH2 = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY2 = window.pageYOffset;

  for (var i = 0; i < fadeConts2.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY2 > fadeContsTop2[i] - windowH2 + remainder2) {
      // .showを付与
      fadeConts2[i].classList.add('inview');
    } else {
      // 逆に.showを削除
      fadeConts2[i].classList.remove('inview');
    }
  }
});
// ==============================================
