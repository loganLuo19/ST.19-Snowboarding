$(window).on('load',function () {
    $('.loading').fadeOut()
}
);
$(document).ready(function () {
    // modal
    $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
        const target = $(this).data('target');
        $(target).on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
        });
    });
    // menu fade
    $('.menu li').hover(function () {
        $(this).find('.cnTitle').addClass('animate__fadeInRightBig');
        $(this).find('.cnTitle').removeClass('animate__fadeOutRightBig');
    },
        function () {
            $(this).find('.cnTitle').addClass('animate__fadeOutRightBig');
            $(this).find('.cnTitle').removeClass('animate__fadeInRightBig');

        }
    );

    //scroll nav
    $('.scrollNav').click(function (e) {
        e.preventDefault()
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top - 61;
        $('html,body').animate({ scrollTop: targetPos }, 1000);
    })

    $(window).scroll(function () {
        // active nav
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('.scrollNav').each(function () {
            const target = $(this).attr('href');
            const targetPos = $(target).offset().top - 62;
            const targetHeight = $(target).outerHeight()
            $(this).removeClass('active');
            if (targetPos <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $(this).addClass('active');
            }
        });
        // show nav
        const headerHeight = $('#header').outerHeight()
        if (headerHeight / 2 <= scrollPos) {
            $('.navbar').removeClass('d-md-none')
        } else {
            $('.navbar').addClass('d-md-none')
        }
        // animated
        $('.animated-up,.animated-right,.animated-left').each(function () {
            const thisPos = $(this).offset().top;
            if ((windowHeight - 90 + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        })
    })

});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
