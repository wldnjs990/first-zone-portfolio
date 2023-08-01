! function() {
    "user strict";
    if (null === document.getElementById("video_play")) return !1;
    var t = document.createElement("script");
    t.src = "https://www.youtube.com/iframe_api";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
    var n = function() {
            var t = [],
                e = null,
                n = !1,
                i = !1,
                a = function() {
                    return n
                },
                s = function(t) {
                    var e = window.innerHeight,
                        n = e * t;
                    return n < window.innerWidth && (n = window.innerWidth, e = n / t), {
                        width: n,
                        height: e
                    }
                },
                r = function(t, e) {
                    var n = 0,
                        i = 0;
                    t > window.innerWidth ? i = (window.innerWidth - t) / 2 : n = (window.innerHeight - e) / 2, $("#scenes .scene .background").css({
                        width: t + "px",
                        height: e + "px",
                        top: n + "px",
                        left: i + "px"
                    })
                },
                c = function(n) {
                    var i = $("#scenes .scene:eq(" + n + ")"),
                        a = i.attr("data-bg-video-id"),
                        c = i.attr("data-background-movie-ratio") || 16 / 9,
                        u = i.attr("data-background-movie-start") || 0,
                        l = s(c);
                    $("#scenes .scene:eq(" + n + ") .background").prepend($('<div id="background-video_play-' + n + '"></div>')), r(l.width, l.height), t[n] = new YT.Player("background-video_play-" + n, {
                        height: l.height,
                        width: l.width,
                        videoId: a,
                        playerVars: {
                            playlist: a,
                            autoplay: 1,
                            controls: 0,
                            loop: 1,
                            showinfo: 0,
                            start: u
                        },
                        events: {
                            onReady: function(i) {
                                t[n].setVolume(0), o.getCurrent() === n ? (t[n].playVideo(), e = n) : t[n].pauseVideo()
                            },
                            onStateChange: function(t) {
                                1 === t.data && $("#scenes .scene:eq(" + n + ") .background").addClass("on")
                            }
                        }
                    })
                },
                u = function(o) {
                    if (n && !i) return t[e] && l(), 1 === $("#background-video_play-" + o).length ? (e = o, void h()) : void c(o)
                },
                l = function() {
                    var o = t[e];
                    n && !i && o.getPlayerState && o.pauseVideo()
                },
                h = function() {
                    var o = t[e];
                    n && !i && o.getPlayerState && o.playVideo()
                },
                d = function() {
                    window.isMobile.any && (i = !0), window.onYouTubeIframeAPIReady = function() {
                        n = !0, u(o.getCurrent())
                    }
                };
            return {
                setBackground: u,
                pause: l,
                resume: h,
                apiIsReady: a,
                init: d
            }
        }(),
        i = function(t, e, n) {
            var i, o = 0,
                a = e.children().length;
            n && n(o), t.on("mousedown touchstart", function(t) {
                if (!$(t.target).is("button, a")) {
                    "mousedown" == t.type && t.preventDefault(), e.removeClass("animate");
                    var n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t.pageX,
                        a = t.originalEvent.touches ? t.originalEvent.touches[0].pageY : t.pageY,
                        s = e.children(":first").outerWidth(!0),
                        r = o * s * -1;
                    i = {
                        x: n,
                        y: a,
                        itemWidth: s,
                        currentLeft: r,
                        deltaX: 0,
                        deltaY: 0
                    }
                }
            }).on("mousemove touchmove", function(t) {
                if ("mousemove" == t.type && t.preventDefault(), i) {
                    var n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t.pageX,
                        o = t.originalEvent.touches ? t.originalEvent.touches[0].pageY : t.pageY;
                    if (i.deltaX = n - i.x, i.deltaY = o - i.y, !(Math.abs(i.deltaX / i.deltaY) < 2)) {
                        var s = i.currentLeft + i.deltaX;
                        s > 0 ? s /= 2 : s < (a - 1) * i.itemWidth * -1 && (s -= 2 * (s - (a - 1) * i.itemWidth * -1) / 3), e.css({
                            left: s + "px"
                        })
                    }
                }
            }).on("mouseup touchend", function(t) {
                i && (Math.abs(i.deltaX) > 50 && (i.deltaX < 0 ? o += 1 : o -= 1), o < 0 ? o = 0 : o > a - 1 && (o = a - 1), i.currentLeft = o * i.itemWidth * -1, e.addClass("animate"), e.css({
                    left: i.currentLeft + "px"
                }), n && n(o), i = null)
            }).on("mouseleave", function() {
                $(this).trigger("mouseup")
            }), this.getSequence = function() {
                return o
            }, this.go = function(t, n) {
                o = t, n ? e.removeClass("animate") : e.addClass("animate"), e.css({
                    left: o * e.children(":first").outerWidth(!0) * -1 + "px"
                })
            }
        },
        o = function() {
            var t, e = [],
                o = Math.floor(3 * Math.random()),
                a = function() {
                    return o
                },
                s = function(t) {
                    $(".roll_on button").removeClass("on"), $(".roll_on button:eq(" + t + ")").addClass("on")
                },
                r = function(t) {
                    var n = $(".controller .prev"),
                        i = $(".controller .next");
                    0 === t ? n.removeClass("on") : n.addClass("on"), t === e.length - 1 ? i.removeClass("on") : i.addClass("on")
                },
                c = function(e, i) {
                    void 0 === i && (i = e - o), o = e, s(o), r(o), n.setBackground(o), t.go(o)
                },
                u = function() {
                    var t = o - 1;
                    t < 0 && (t = e.length - 1), c(t, -1)
                },
                l = function() {
                    var t = o + 1;
                    t >= e.length && (t = 0), c(t, 1)
                },
                h = function(t) {
                    return o !== t && void c(t)
                },
                d = function() {
                    var n = [];
                    $("#scenes .scene").each(function(t, n) {
                        e.push(n), $(n).css({
                            left: 100 * t + "%"
                        })
                    });
                    for (var a = 0, d = e.length; a < d; a++) n.push('<button data-sequence="' + a + '">' + a + "번째 영상 재생</button>");
                    $(".roll_on").append(n.join("")).find("button").on("click", function(t) {
                        var e = $(t.target),
                            n = +e.attr("data-sequence");
                        h(n)
                    }), $(".controller .prev").on("click", u), $(".controller .next").on("click", l), s(o), r(o), t = new i($("#main_visual"), $("#scenes"), function(e) {
                        t && c(e)
                    }), t.go(o, !0)
                };
            return {
                getCurrent: a,
                init: d
            }
        }(),
        a = function() {
            var t, e = function(e) {
            		if (e == "") {
						return;
					}
                    void 0 === t && n.apiIsReady() ? t = new YT.Player("video_play", {
                        height: 315,
                        width: 560,
                        videoId: e,
                        playerVars: {
                            autoplay: 1
                        }
                    }) : n.apiIsReady() && t.loadVideoById({
                        videoId: e
                    })
                },
                i = function(t) {
                    var i, o, a, s, r = t.currentTarget,
                        c = $(r).attr("data-video-id"),
                        u = 100,
                        l = window.innerWidth - 2 * u,
                        h = window.innerHeight - 2 * u,
                        d = "right";
                    if (c == "") {
						return;
					}
                    l / h > 1.7778 ? (o = h, i = o / .5625, a = u, s = (l - i) / 2 + u) : (i = l, o = .5625 * i, a = (h - o) / 2 + u, s = u), i > 1200 ? (i = 1200, o = .5625 * i, a = (h - o) / 2 + u, s = (l - i) / 2 + u) : i < 560 && .5625 * window.innerWidth < window.innerHeight && (i = window.innerWidth, o = .5625 * i, a = (h - o) / 2 + u, s = 0, d = "top"), e(c), n.pause(), $(".popup ").show(), $(".popup  .popup_box").css({
                        height: o + "px",
                        width: i + "px",
                        top: a + "px",
                        left: s + "px",
                        padding: 0
                    }), $(".popup  button").removeClass("on left top"), $(".popup  button").css("height"), $(".popup  button").addClass("on").addClass(d)
                },
                o = function() {
                    t.stopVideo(), n.resume(), $(".popup  button").removeClass("on"), $(".popup ").hide()
                },
                a = function() {
                    $(".scene .btn_play button").on("click", i), $(".popup ").on("click", function() {
                        o()
                    }), $(document).on("keypress", function(t) {
                        27 === t.keyCode && o()
                    })
                };
            return {
                init: a
            }
        }();
    o.init(), n.init(), a.init()
}();