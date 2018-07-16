/*!
 * dashmin v1.0.0 (https://github.com/dacoto/dashmin)
 * Copyright 2018 dacoto
 * Licensed under MIT (https://github.com/dacoto/dashmin/blob/master/LICENSE)
 */
$(document).ready(function () {
    var body = $('body');
    body.tooltip({
        selector: '[data-toggle="tooltip"]'
    });
    body.popover({
        selector: '[data-toggle="popover"]'
    });
    $('.sidebar-toggle').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').toggleClass('toggled');
    });
});