$(function () {
    $(window).on("scroll", () => {
        if ($(this).scrollTop() >= 120) {
            $(".sitetoolbar").addClass("fixed")
        } else {
            $(".sitetoolbar").removeClass("fixed")
        }
    })
    $(".preview-lang").click(function () {
        $(this).next().addClass("show")
        $('.overlay').addClass("show")
        $('.lang').find(".fa-chevron-down").addClass("up")
        $('.overlay').click(() => {
            $(".preview-lang").next().removeClass("show")
            $('.overlay').removeClass("show")
            $(".lang").find(".fa-chevron-down").removeClass("up")
        })
    })
   
    // open menu
    $(function () {
        $(".open-menu").click(() => {
            $(".sitetoolbar-actions").addClass('show');
            $('.overlay').addClass("show")
            $('.overlay').click(() => {
                $(".sitetoolbar-actions").removeClass('show');
                $('.overlay').removeClass("show")
            })
        })

    })
    $("#header-global .open-menu").click(function () {
        $("#header-mobile").addClass("show");
        $(".overlay").addClass("show");
        $(".overlay").click(function () {
            $("#header-mobile").removeClass("show");
            $(".overlay").removeClass("show");
        })
    })
    $(".input-toggler").click(() => {
        if ($(".password").attr("type") === "password") {
            $(".password").attr("type", "text");
            $(".show-password-input").hide();
            $(".hide-password-input").show();
        } else {
            $(".password").attr("type", "password");
            $(".show-password-input").show();
            $(".hide-password-input").hide();
        }
    });
    $(function () {
        $(".lang-dropdown-btn").click(() => {
            $(".lang-dropdown-body").toggleClass("show")
            // $("body").click(function (e) {
            //     if (!$(e.target).closest('.lang-dropdown-wrap').length && !$(e.target).is(".lang-dropdown-body")) {
            //         $(".lang-dropdown-body").hide()
            //     }
            // })
        })
    })
    // choose package
    $(".choose-btn").on("click", function () {
        var t = $(this)
        t.parents('.item-wrap').find('.item').removeClass('active')
        t.parentsUntil('.item-wrap', '.item').addClass('active')
        $(".package-wrap-bottom").addClass('show')
    })
    $(".next-btn").click(() => {
        console.log("WEe")
        var scrollWidth = $(".step").width()
        var wrapperPos = $(".stepform-wrapper").scrollLeft()
        console.log(wrapperPos)
        $(".stepform-wrapper").animate({
            scrollLeft: wrapperPos + scrollWidth
        })
    })
    // rate
    $(".rate-label").click(function () {
        $(".rate-label").stop(true, false).removeClass('active');
        $(this).stop(true, false).addClass('active')
    })
    $(".has-child").click(function () {
        $(this).next().addClass("show")
        $(this).find(".fa-chevron-down").addClass("up")
        $('.overlay').addClass('show')
        $('.overlay').click(() => {
            $('.has-child').next().removeClass("show")
            $('.has-child').find(".fa-chevron-down").removeClass("up")
            $('.overlay').removeClass('show')
        })

        // $("body").click((e) => {
        //     if (!$(e.target).closest(".sort-field").length && !$(e.target).is(".has-child")) {
        //         $(".has-child").next().removeClass("show")
        //         $(".has-child").find(".fa-chevron-down").removeClass("up")
        //     }
        // })
    })

    $(".toggle-profile-content").click(function () {
        $(this).next().addClass('show')
        $("body").click(function (e) {
            if (!$(e.target).closest(".profile-content").length && !$(e.target).is(".profile-content")) {
                $(".profile-sidebar").removeClass("show")
            }
        })
    })
    $(".ring").click(function () {
        $(this).next().addClass("show");
        $("body").click(function (e) {
            if (!$(e.target).closest('.notification-content').length && !$(e.target).is(".drop-notification")) {
                $(".drop-notification").removeClass('show')
            }
        })
    })
    $(".msg").click(function () {
        $(this).next().addClass("show");
        $("body").click(function (e) {
            if (!$(e.target).closest('.message-content').length && !$(e.target).is(".drop-message")) {
                $(".drop-message").removeClass('show')
            }
        })
    })
    $(".popup-btn").click(function () {
        $('.comment-popup').addClass('show');
        $("body").click(function (e) {
            if (!$(e.target).closest('.review-content').length && !$(e.target).is(".comment-popup")) {
                $(".comment-popup").removeClass('show')
            }
        })

    })
    $('label input[type=radio]').click(function () {
        $('label:has(input:checked)').addClass('active');
        $('label:has(input:not(:checked))').removeClass('active');
    });

    //   copy value clipboard
    $(".copy-link-input").focus(function () {
        $(this).select()
    });
    $(".copy-link-btn").click(function () {
        let $text = $(".copy-link-input").val();
        $(".copy-link-input").select();
        navigator.clipboard.writeText($text);
        $(".copy-link-input").val("Copied !")
        setTimeout(function () {
            $(".copy-link-input").val($text)
        }, 3000)
    })
    $(function () {
        $(".last-conversation-list").on('click', '.conversation-list-item', function () {
            $(this).addClass('active').siblings().removeClass('active')
            $(".chat-wrapper").show();
            let $fullname = $(this).find(".fullname").text()
            $(".chat-header-title").text($fullname)
        })
        $(".last-conversation-list").on('click', '.unread-msg', function () {
            $(this).removeClass('unread-msg');

        })
    });

    // open lang dropdown
    $(function () {
        $(".sitetoolbar-dropdown-btn").click(() => {
            $(".sitetoolbar-dropdown-body").show();
            $("body").click((e) => {
                if (!$(e.target).closest(".sitetoolbar-lang").length && !$(e.target).is(".sitetoolbar-dropdown-body")) {
                    $(".sitetoolbar-dropdown-body").hide()
                }
            })
        })

    })
    $(function () {
        $('.counter-count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    })
    $(function () {
        $(".review-btn").click(() => {
            $(".success-popup").addClass("show")
            setTimeout(() => {
                $(".success-popup").removeClass("show")
            }, 2000);
            $(".comment-popup").removeClass("show")
        })
    })
    // add skills
    $(function () {
        $(".add-skills").on("keydown", function (e) {
            let tag = e.target.value;

            if (e.key == 'Enter' || e.key == 13) {
                const tagTrim = tag.trim()
                if (tagTrim != "") {
                    $(".skill-list").append(" <li class='skill-name'><i class='fas fa-times delete-btn'></i>" + tagTrim + "</li>")
                    e.target.value = ""
                    $(".delete-btn").click(function () {
                        $(this).parent().remove()

                    })
                }
            }




        })
        $(".delete-btn").click(function () {
            $(this).parent().remove()

        })
    })
    $(function () {
        $(".sidebar-btn").click(() => {
            $(".filter-sidebar").addClass("show");
            $(".overlay").addClass("show");
            $(".overlay").click(() => {
                $(".filter-sidebar").removeClass("show");
                $(".overlay").removeClass("show");
            })
        })
    })
    $(function () {
        $(".confirm-btn").click(() => {
            $(".success-form-popup").addClass("show")
        })
    })
})



// ScrollReveal().reveal('#s1',{
//     delay: 75,
//     duration: 2000,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",

//   });
// ScrollReveal().reveal('#s_left',{
//     delay: 75,
//     duration: 2000,
//     opacity: 0,
//     distance: "50%",
//     origin: "left",

//   });

//   ScrollReveal().reveal('#s2',{
//     delay: 125,
//     duration: 1500,
//     opacity: 0,
//     distance: "50%",
//     origin: "right",
//     reset: true
//   });

//   ScrollReveal().reveal('#s3',{
//     delay: 175,
//     duration: 1500,
//     opacity: 0,
//     distance: "50%",
//     origin: "bottom",
//     reset: true
//   });
$(function () {
    var parent = document.querySelector(".range-slider");
    if (!parent) return;

    var rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];

            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        };
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;
        };
    });
})