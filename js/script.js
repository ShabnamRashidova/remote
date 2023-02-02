$(function () {
  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 120) {
      $(".sitetoolbar").addClass("fixed");
      $("#header-global").addClass("fixed");
    } else {
      $(".sitetoolbar").removeClass("fixed");
      $("#header-global").removeClass("fixed");
    }
  });
  $(window).on("load", () => {
    $(".preloader").hide();
  });
  $(".preview-lang").click(function () {
    $(this).next().addClass("show");
    $(".overlay").addClass("show");
    $(".lang").find(".fa-chevron-down").addClass("up");
    $(".overlay").click(() => {
      $(".preview-lang").next().removeClass("show");
      $(".overlay").removeClass("show");
      $(".lang").find(".fa-chevron-down").removeClass("up");
    });
  });
  $(".job-category-dropdown-btn").click(() => {
    $(".drop-down").slideToggle();
  });
  // open menu
  $(function () {
    $(".open-menu").click(() => {
      $(".sitetoolbar-actions").addClass("show");
      $(".overlay").addClass("show");
      $(".overlay").click(() => {
        $(".sitetoolbar-actions").removeClass("show");
        $(".overlay").removeClass("show");
      });
    });
  });
  $(".add-skill-btn").click(() => {
    let val = $(".add-skill-input").val();
    let li = $("<li class='skill'></li>");
    li.text(val);
    $(".skills-name-list").append(li);
    $(".add-skill-input").val("");
  });
  $("#header-global .open-menu").click(function () {
    $("#header-mobile").addClass("show");
    $(".overlay").addClass("show");
    $(".overlay,.close-header").click(function () {
      $("#header-mobile").removeClass("show");
      $(".overlay").removeClass("show");
    });
  });

  $(function () {
    $(".lang-dropdown-btn").click(() => {
      $(".lang-dropdown-body").toggleClass("show");
    });
  });
  // choose package
  $(".choose-btn").on("click", function () {
    var t = $(this);
    t.parents(".item-wrap").find(".item").removeClass("active");
    t.parentsUntil(".item-wrap", ".item").addClass("active");
    $(".package-wrap-bottom").addClass("show");
  });
  $(function () {
    $(".card-label").click(function () {
      $("a.payment-btn").removeClass("d-none");
      $("button.payment-btn").addClass("d-none");
    });
    $(".official-label").click(function () {
      $("button.payment-btn").removeClass("d-none");
      $("a.payment-btn").addClass("d-none");
    });
  });
  $(".next-btn").click(() => {
    var scrollWidth = $(".step").width();
    var wrapperPos = $(".stepform-wrapper").scrollLeft();
    $(".stepform-wrapper").animate({
      scrollLeft: wrapperPos + scrollWidth,
    });
  });
  // rate
  $(".rate-label").click(function () {
    $(".rate-label").stop(true, false).removeClass("active");
    $(this).stop(true, false).toggleClass("active");
  });
  $(".has-child").click(function () {
    $(this).next().addClass("show");
    $(this).find(".fa-chevron-down").addClass("up");
    $(".overlay").addClass("show");
    $(".overlay").click(() => {
      $(".has-child").next().removeClass("show");
      $(".has-child").find(".fa-chevron-down").removeClass("up");
      $(".overlay").removeClass("show");
    });
  });
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3300,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
 $(function(){
  $(".toggle-profile-content").click(function () {
    $(this).next().toggleClass("show");
  });
  $("body").click(function (e) {
    if (
      !$(e.target).closest(".profile-content").length &&
      !$(e.target).is(".profile-content")
    ) {
      $(".profile-sidebar").removeClass("show");
    }
  });
 })
$(function(){
  $(".ring").click(function () {
    $(this).next().toggleClass("show");
  });
  $("body").click(function (e) {
    if (
      !$(e.target).closest(".notification-content").length &&
      !$(e.target).is(".drop-notification")
    ) {
      $(".drop-notification").removeClass("show");
    }
  });
})
$(function(){
  $(".msg").click(function () {
    $(this).next().toggleClass("show");
  });
  $("body").click(function (e) {
    if (
      !$(e.target).closest(".message-content").length &&
      !$(e.target).is(".drop-message")
    ) {
      $(".drop-message").removeClass("show");
    }
  });
});
$(function(){
  $(".popup-btn").click(function () {
    $(".comment-popup").toggleClass("show");
  });
  $("body").click(function (e) {
    if (
      !$(e.target).closest(".review-content").length &&
      !$(e.target).is(".comment-popup")
    ) {
      $(".comment-popup").removeClass("show");
    }
  });
})

  $("label input[type=radio]").click(function () {
    $("label:has(input:checked)").addClass("active");
    $("label:has(input:not(:checked))").removeClass("active");
  });

  //   copy value clipboard
  $(".copy-link-input").focus(function () {
    $(this).select();
  });
  $(".copy-link-btn").click(function () {
    let $text = $(".copy-link-input").val();
    $(".copy-link-input").select();
    navigator.clipboard.writeText($text);
    $(".copy-link-input").val("Copied !");
    setTimeout(function () {
      $(".copy-link-input").val($text);
    }, 3000);
  });
  $(function () {
    $(".last-conversation-list").on(
      "click",
      ".conversation-list-item",
      function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".chat-wrapper").show();
        let $fullname = $(this).find(".fullname").text();
        $(".chat-header-title").text($fullname);
      }
    );
    $(".last-conversation-list").on("click", ".unread-msg", function () {
      $(this).removeClass("unread-msg");
    });
  });

  // open lang dropdown
  $(function () {
    $(".sitetoolbar-dropdown-btn").click(() => {
      $(".sitetoolbar-dropdown-body").show();
      $("body").click((e) => {
        if (
          !$(e.target).closest(".sitetoolbar-lang").length &&
          !$(e.target).is(".sitetoolbar-dropdown-body")
        ) {
          $(".sitetoolbar-dropdown-body").hide();
        }
      });
    });
  });
  $(function () {
    $(".counter-count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });
  $(function () {
    $(".review-btn").click(() => {
      $(".success-popup").addClass("show");
      setTimeout(() => {
        $(".success-popup").removeClass("show");
      }, 2000);
      $(".comment-popup").removeClass("show");
    });
  });
  // add skills
  $(function () {
    $(".add-skills").on("keydown", function (e) {
      let tag = e.target.value;

      if (e.key == "Enter" || e.key == 13) {
        const tagTrim = tag.trim();
        if (tagTrim != "") {
          $(".skill-list").append(
            " <li class='skill-name'><i class='fas fa-times delete-btn'></i>" +
              tagTrim +
              "</li>"
          );
          e.target.value = "";
          $(".delete-btn").click(function () {
            $(this).parent().remove();
          });
        }
      }
    });
    $(".delete-btn").click(function () {
      $(this).parent().remove();
    });
  });
  $(function () {
    $(".sidebar-btn").click(() => {
      $(".sidebar").addClass("show");
      $(".overlay").addClass("show");
      $(".overlay, .close-sidebar").click(() => {
        $(".sidebar").removeClass("show");
        $(".overlay").removeClass("show");
      });
    });
  });
  $(function () {
    $(".save-job").click(function () {
      $(this).find("button").stop(true, false, true).toggle();
    });
  });
  $(function () {
    $(".input-toggler").click(function () {
      $(this).find("span").stop(true, false, true).toggle();
      if ($(this).prev(".password").attr("type") === "password") {
        $(this).prev(".password").attr("type", "text");
      } else {
        $(this).prev(".password").attr("type", "password");
      }
    });
  });
  $(function () {
    $(".confirm-btn").click(() => {
      $(".success-form-popup").addClass("show");
    });
  });
  $(function () {
    $(".file-upload").change(function (e) {
      let x = URL.createObjectURL(e.target.files[0]);
      $(this).parent().prev().attr("src", x);
    });
  });
  $(function () {
    $(".send-file").change(function (e) {
      let x = URL.createObjectURL(e.target.files[0]);
      $(".msg-form-attachment img").attr("src", x);
      $(".msg-form-attachment .name").text(e.target.files[0].name);
      let iSize = e.target.files[0].size / 1024;
      iSize = Math.round(iSize * 100) / 100;
      $(".msg-form-attachment .attachment-bytsize").text(iSize + "kb");
      if (e.target.files[0]) {
        $(".msg-form-attachment").removeClass("d-none");
        $(".msg-form-attachment .delete").click(function () {
          $(this).parent().addClass("d-none");
        });
      }
    });
  });
});
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
});
$(document).ready(function () {
  $(".subscription-column").matchHeight();
  $(".job-single").matchHeight();
  // $(".single-item").matchHeight();
});
$(function () {
  let progressValue = 0;
  let progressEndValue = 25;
  let speed = 50;

  let progress = setInterval(() => {
    progressValue++;
    $(".value").html(`${progressValue}%`);
    $(".circular-progress").css(
      "background",
      `conic-gradient(#ECA400 ${progressValue * 3.6}deg, #fff ${
        progressValue * 3.6
      }deg)`
    );
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  });
});
