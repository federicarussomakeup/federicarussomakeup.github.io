var pg1 = 0,
  pg2 = 0,
  pg3 = 0,
  pg4 = 0;

function init() {
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });
  let e = document.querySelector(".circle");
  gsap.set(e, {
    xPercent: -40.5,
    yPercent: -40.5
  }), window.addEventListener("mousemove", function(t) {
    TweenLite.to(e, .3, {
      x: t.clientX,
      y: t.clientY
    })
  }), window.addEventListener("load", function() {
    const e = document.querySelector(".preload"),
      t = document.querySelector(".section_preload2"),
      n = document.querySelector("html");
    document.querySelector(".logo_preload").classList.add("active"), e.classList.add("preload_move_left"), (new TimelineMax).fromTo(".preload_move_left", 1, {
      x: 0
    }, {
      x: -window.innerWidth / 2,
      ease: Expo.easeInOut
    }, "+=0.3"), t.classList.add("preload_move_right"), (new TimelineMax).fromTo(".preload_move_right", 1, {
      x: 0
    }, {
      x: window.innerWidth / 2,
      ease: Expo.easeInOut
    }, "+=0.3"), n.classList.add("loaded")
  }), window.addEventListener("resize", () => {
    let e = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${e}px`)
  });
  var t = $(".span_box"),
    n = $(".nav_menu"),
    o = $(".slider1"),
    i = 0;
  const r = document.querySelector("html");
  if (t.on("click", function() {
      $(this).toggleClass("open"), 0 == i ? ($(".menu_span").addClass("active"), window.innerWidth > 737 && (r.style.overflow = "hidden", i = 1, TweenLite.to(o, 1, {
        autoAlpha: 1,
        x: "100%",
        ease: Expo.easeInOut
      }), TweenLite.to(n, 1, {
        xPercent: -100,
        ease: Expo.easeInOut
      }, "+=0.5")), window.innerWidth < 737 && (r.style.overflow = "hidden", i = 1, TweenLite.to(n, 1, {
        xPercent: -100,
        ease: Expo.easeInOut
      }, "+=0.5"))) : 1 == i && (window.innerWidth > 737 && ($(".menu_span").removeClass("active"), r.style.overflow = "auto", i = 0, TweenLite.to(o, 1, {
        x: "0%",
        autoAlpha: 1,
        ease: Expo.easeInOut
      }), TweenLite.to(n, 1, {
        xPercent: 0,
        autoAlpha: 1,
        ease: Expo.easeInOut
      })), window.innerWidth < 737 && ($(".menu_span").removeClass("active"), r.style.overflow = "auto", i = 0, TweenLite.to(n, 1, {
        xPercent: 0,
        autoAlpha: 1,
        ease: Expo.easeInOut
      })))
    }), document.querySelector("#pg3")) {
    $(document).ready(function() {
      $(".body").addClass("active"), $(".html").addClass("active")
    });
    var a = document.getElementsByClassName("block_proj"),
      s = document.getElementsByClassName("container_proj");
        new HorizontalScroll.default({
          blocks: a,
          container: s,
          isAnimated: 0.0001,
          springEffect: 1000
        });
    pg3++
  }
  if (document.querySelector("#pg2")) {
    const e = document.querySelector("body"),
      t = document.querySelector("html");
    e.classList.contains("active") && (e.classList.remove("active"), t.classList.remove("active"));
    const n = new ScrollMagic.Controller,
      o = new TimelineMax;
    o.fromTo(".prova", 1, {
      y: 0,
      x: 0
    }, {
      y: 600,
      x: -100
    });
    new ScrollMagic.Scene({
      triggerHook: .2,
      duration: 600,
      triggerElement: ""
    }).setPin(".prova").setTween(o).addTo(n)
  }
  if (document.querySelector("#pg1")) {
    $(".tops").click(function() {
      jQuery('html,body').animate({
        scrollTop: 0
      }, 2000);
    })
    const e = document.querySelector("body"),
      t = document.querySelector("html");
    e.setAttribute("style", "position:relative !important"), e.classList.contains("active") && (e.classList.remove("active"), t.classList.remove("active"));
    var l = new ScrollMagic.Controller;
    let n = new TimelineMax;
    n.fromTo(".slider_text_h1", 1, {
      x: 0,
      y: 0,
      rotate: "0deg"
    }, {
      x: "40%",
      y: -100,
      rotate: "-90deg"
    }), n.fromTo(".slider_text2_h1", 1, {
      x: 0,
      y: 0,
      rotate: "0deg"
    }, {
      x: "-40%",
      y: -100,
      rotate: "90deg"
    }, "=-1"), ScrollTrigger.create({
      trigger: ".slider_text",
      pin: !0,
      scrub: 1,
      start: "0% 50%",
      end: "100% 50%",
      animation: n
    });
    var c = CSSRulePlugin.getRule(".section_top::after");
    document.querySelector(".section_top"), document.getElementsByClassName(".image_top");
    (new TimelineMax).fromTo(c, 1.5, {
      top: "100%"
    }, {
      top: "0%",
      ease: Expo.easeInOut
    }, "+=0.1").fromTo(c, 1.5, {
      height: "100vh"
    }, {
      height: "100vh"
    }, "-=1.5").fromTo(".body", 1.5, {
      height: "calc(100vh)"
    }, {
      height: "100%",
      ease: Expo.easeInOut
    }), pg1++;
    const o = new TimelineMax;
    o.fromTo(c, 1, {
      filter: "grayscale(0)"
    }, {
      filter: "grayscale(1)"
    }, "=-1");
    new ScrollMagic.Scene({
      triggerHook: -.5,
      duration: 0,
      triggerElement: c
    }).setTween(o).addTo(l);
    $(".firma").each(function() {
      var e = new TimelineMax,
        t = $(this).find(".firma_real");
      $(this).find(".p_font");
      e.fromTo(t, 1, {
        strokeDasharray: 297
      }, {
        strokeDashoffset: 0
      });
      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .8
      }).setTween(e).addTo(l)
    }), $(".block_container").each(function() {
      var e = new TimelineMax,
        t = $(this).find(".block"),
        n = $(this).find(".span_block");
      e.from(n, 1, {
        scaleX: 1,
        transformOrigin: "right",
        width: "0%",
        ease: Power1.easeInOut
      }), e.to(n, 1, {
        scaleX: 1,
        transformOrigin: "right",
        width: "100%",
        ease: Power1.easeInOut
      }), e.from(t, 1, {
        scaleX: 1,
        transformOrigin: "right",
        width: "0%",
        ease: Power1.easeInOut
      }, "-=1.5");
      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .7
      }).setTween(e).addTo(l)
    })
  }
  if (window.innerWidth > 737) {
    var d = {
      animate: !0,
      patternWidth: 100.55,
      patternHeight: 100,
      grainOpacity: .25,
      grainDensity: 3.79,
      grainWidth: .6,
      grainHeight: 1.13
    };
    grained("#grained", d)
  }
  if (window.innerWidth < 737) {
    d = {
      animate: !0,
      patternWidth: 55.55,
      patternHeight: 1200,
      grainOpacity: .15,
      grainDensity: 1.99,
      grainWidth: .7,
      grainHeight: 1.13
    };
    grained("#grained", d)
  }
}
const swup = new Swup;
init(), swup.on("contentReplaced", init);
