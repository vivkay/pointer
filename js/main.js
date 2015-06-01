var $logoBtnOff = $('.logo-btn-off');
var $panelWrapper =('.panel-wrapper');
var $phone1 = $('.phone1');


$logoBtnOff.on('click', function () {
    $logoBtnOff.toggleClass('logo-btn-on');
    $panelWrapper.toggleClass('js-panel-wrapper-open');
});

$phone1.waypoint(function (direction) {
    if (direction == 'down') {
        $phone1.addClass('js-left-in');
    } else { 
        $phone1.removeClass('js-left-in');
    }
}, { offset:'50%'});
