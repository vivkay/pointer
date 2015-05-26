var $logoBtn = $('.logo-btn');
var $panel = $('panel');

$logoBtn.on('click', function () {
  $panel.toggleClass('js-panel-open');
});
