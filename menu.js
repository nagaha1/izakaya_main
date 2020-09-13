// Drawerを有効化させます。
$(document).ready(function() {
  $(".drawer").drawer();
});

//ripples背景画像を波立たせる
$(function() {
  let $hoge = $(".header-bg");
  $hoge.ripples({
    dropRadius: 20,
    perturbance: 0.03,
    resolution: 256,
    interactive: true,
    crossOrigin: ""
  });
});
