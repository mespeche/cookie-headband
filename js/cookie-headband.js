(function($) {

    var elem;
    var params;

    $.fn.cookieHeadband = function(args) {
        var options = {
            openClass : 'open',
            closeClass : 'close',
            closeBtn : $('#cookie-headband-close')
        };

        params = $.extend(options, args);

        return this.each(function() {

            elem = this;
            var $closeBtn = params.closeBtn;

            initHeadband();

            $closeBtn.on('click', function() {
                closeHeadband();

                return false;
            });

        });
    };

    function initHeadband() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.cookieHeadband === undefined) {
                localStorage.cookieHeadband = 'open';

                $(elem).addClass(params.openClass);
            } else {
                if (localStorage.cookieHeadband === "open") {
                    $(elem).addClass(params.openClass);
                } else {
                    closeHeadband();
                }
            }
        }
    }

    function closeHeadband() {
        if (localStorage.cookieHeadband === "open") {
            localStorage.setItem("cookieHeadband", "closed");
        }

        $(elem).removeClass(params.openClass);
        $(elem).addClass(params.closeClass);
    }

})(jQuery);