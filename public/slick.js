var slickScroll = (function () {
  function e() {
    (this.defaults = {
      root: "body",
      duration: 1e3,
      easing: "cubic-bezier(0.15, 1, 0.4, 1)",
      offsets: { speedX: 1, speedY: 1 },
    }),
      (this.pennerEasing = [
        { name: "easeInSine", value: [0.12, 0, 0.39, 0] },
        { name: "easeOutSine", value: [0.61, 1, 0.88, 1] },
        { name: "easeInOutSine", value: [0.37, 0, 0.63, 1] },
        { name: "easeInQuad", value: [0.11, 0, 0.5, 0] },
        { name: "easeOutQuad", value: [0.5, 1, 0.89, 1] },
        { name: "easeInOutQuad", value: [0.45, 0, 0.55, 1] },
        { name: "easeInCubic", value: [0.32, 0, 0.67, 0] },
        { name: "easeOutCubic", value: [0.33, 1, 0.68, 1] },
        { name: "easeInOutCubic", value: [0.65, 0, 0.35, 1] },
        { name: "easeInQuart", value: [0.5, 0, 0.75, 0] },
        { name: "easeOutQuart", value: [0.25, 1, 0.5, 1] },
        { name: "easeInOutQuart", value: [0.76, 0, 0.24, 1] },
        { name: "easeInQuint", value: [0.64, 0, 0.78, 0] },
        { name: "easeOutQuint", value: [0.22, 1, 0.36, 1] },
        { name: "easeInOutQuint", value: [0.83, 0, 0.17, 1] },
        { name: "easeInExpo", value: [0.7, 0, 0.84, 0] },
        { name: "easeOutExpo", value: [0.16, 1, 0.3, 1] },
        { name: "easeInOutExpo", value: [0.87, 0, 0.13, 1] },
        { name: "easeInCirc", value: [0.55, 0, 1, 0.45] },
        { name: "easeOutCirc", value: [0, 0.55, 0.45, 1] },
        { name: "easeInOutCirc", value: [0.85, 0, 0.15, 1] },
      ]),
      (this.fixed = []),
      (this.offsets = []);
  }
  return (
    (e.prototype.momentumScroll = function (m) {
      var u,
        p,
        s = this,
        y = this,
        v = selectNode((m = Object.assign({}, this.defaults, m)).root);
      if (
        (setOffsetArray(this.fixed, selectNode(m.root), m.fixedOffsets),
        setOffsetArray(this.offsets, selectNode(m.root), m.offsets),
        !(function () {
          var t = !1;
          (function (e) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              e
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
              )) &&
              (t = !0);
          })(navigator.userAgent || navigator.vendor),
            !t && CSS.supports && (t = !CSS.supports("position", "sticky"));
          return !t;
        })())
      ) {
        var e = getFromOffsetArray(this.fixed, selectNode(m.root));
        return (
          v.addEventListener("scroll", function (n) {
            var e = getFromOffsetArray(s.offsets, selectNode(m.root));
            e &&
              e.forEach(function (e) {
                e = Object.assign({}, s.defaults.offsets, e);
                for (
                  var t =
                      "translate(" +
                      n.target.scrollLeft * (1 - e.speedX) +
                      "px, " +
                      n.target.scrollTop * (1 - e.speedY) +
                      "px)",
                    r = 0,
                    o = selectNode(e.element, !0);
                  r < o.length;
                  r++
                )
                  ((e = o[r]).style.webkitTransform = t),
                    (e.style.transform = t);
              });
          }),
          e &&
            e.forEach(function (e) {
              for (var t = 0, r = selectNode(e, !0); t < r.length; t++)
                (e = r[t]).style.position = "fixed";
            }),
          { destroy: t, removeOffset: n, addOffset: r, addFixedOffset: o }
        );
      }
      var g = (function (e) {
        ("absolute" == getComputedStyle(e).position &&
          "fixed" == getComputedStyle(e).position) ||
          (e.style.position = "relative");
        var t = document.createElement("div"),
          r = document.createElement("div");
        t.classList.add("_SS_wrapper"), r.classList.add("_SS_dummy");
        for (var o = e.children.length; 0 < o; o--)
          t.insertBefore(e.children[o - 1], t.children[0]);
        return (
          (e.innerHTML = ""),
          (e.style.overflow = "auto"),
          e.appendChild(t),
          e.appendChild(r),
          (r.style.height = t.scrollHeight + "px"),
          (r.style.width = t.scrollWidth + "px"),
          (r.style.top = "0px"),
          (r.style.left = "0px"),
          (r.style.position = "absolute"),
          (r.style.zIndex = "-9999"),
          (t.style.zIndex = "1"),
          (t.style.height = "100%"),
          (t.style.width = "100%"),
          (t.style.overflow = "visible"),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.position = "sticky"),
          {
            fixed: e.querySelector("div._SS_wrapper"),
            dummy: e.querySelector("div._SS_dummy"),
          }
        );
      })(v);
      return (
        window.addEventListener("resize", a),
        v.addEventListener("scroll", i),
        { destroy: t, removeOffset: n, addOffset: r, addFixedOffset: o }
      );
      function i(e) {
        var l = getFromOffsetArray(y.offsets, selectNode(m.root)),
          f = getFromOffsetArray(y.fixed, selectNode(m.root));
        m.onScroll && m.onScroll(e),
          void 0 === (u = { y: v.scrollTop, x: v.scrollLeft }).x &&
            (u = { y: v.scrollY, x: v.scrollX });
        var r,
          t,
          o,
          n,
          s,
          i,
          a,
          c,
          d,
          e = window.getComputedStyle(g.fixed),
          e = new WebKitCSSMatrix(e.transform),
          e = { x: e.m41, y: e.m42 };
        (p = Date.now()),
          (r = e),
          (t = u),
          (o = p),
          (n = function (s) {
            var e = "translate(" + s.x + "px, " + s.y + "px)";
            if (
              ((g.fixed.style.webkitTransform = e),
              (g.fixed.style.transform = e),
              l &&
                l.forEach(function (e) {
                  e = Object.assign({}, y.defaults.offsets, e);
                  var t =
                      "translate(" +
                      s.x * (e.speedX - 1) +
                      "px, " +
                      s.y * (e.speedY - 1) +
                      "px)",
                    e = selectNode(e.element, !0);
                  if (NodeList.prototype.isPrototypeOf(e))
                    for (var r = 0, o = e; r < o.length; r++) {
                      var n = o[r];
                      (n.style.webkitTransform = t), (n.style.transform = t);
                    }
                  else (e.style.webkitTransform = t), (e.style.transform = t);
                }),
              f)
            )
              for (var t = 0; t < f.length; t++) {
                var r = "translate(" + -1 * s.x + "px, " + -1 * s.y + "px)",
                  o = selectNode(f[t], !0);
                if (NodeList.prototype.isPrototypeOf(o))
                  for (var n = 0, i = o; n < i.length; n++) {
                    var a = i[n];
                    (a.style.webkitTransform = r), (a.style.transform = r);
                  }
                else (o.style.webkitTransform = r), (o.style.transform = r);
              }
          }),
          (a = (function (t) {
            var e = y.pennerEasing.filter(function (e) {
              return e.name == t;
            });
            e = e[0]
              ? e[0].value
              : ((t = (t = t.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)),
                t.map(function (e) {
                  return parseFloat(e);
                }));
            {
              if (Array.isArray(e) && 4 == e.length) return e;
              throw "easing string is invalid.";
            }
          })(m.easing)),
          (c = -1 * r.x - t.x),
          (d = -1 * r.y - t.y),
          (function e() {
            var t = (Date.now() - o) / m.duration;
            (t = 1 < t ? 1.01 : t) < 1 &&
              ((s = c * h.apply(null, a)(t) + r.x),
              (i = d * h.apply(null, a)(t) + r.y),
              (s = Math.ceil(100 * s) / 100),
              (i = Math.ceil(100 * i) / 100),
              n({ x: s, y: i }),
              window.requestAnimationFrame(e));
          })();
      }
      function t() {
        var e = getFromOffsetArray(y.offsets, selectNode(m.root)),
          t = getFromOffsetArray(y.fixed, selectNode(m.root)),
          r = selectNode(m.root).querySelector("._SS_wrapper");
        v.removeEventListener("scroll", i),
          window.removeEventListener("resize", a);
        for (var o = r.children.length; 0 < o; o--)
          r.children[o - 1].removeProperty &&
            r.children[o - 1].removeProperty("transform"),
            v.insertBefore(r.children[o - 1], v.children[0]);
        function n(e) {
          e &&
            e.forEach(function (e) {
              var t = selectNode(e.element, !0);
              if (
                (e.element || (t = selectNode(e, !0)),
                NodeList.prototype.isPrototypeOf(t))
              )
                for (var r = 0, o = t; r < o.length; r++)
                  (e = o[r]).style.removeProperty("transform"),
                    e.style.removeProperty("-webkit-transform");
              else
                t.style.removeProperty("transform"),
                  t.style.removeProperty("-webkit-transform");
            });
        }
        r.remove(),
          selectNode(m.root).querySelector("._SS_dummy").remove(),
          v.style.removeProperty("overflow"),
          v.style.removeProperty("position"),
          n(e),
          n(t),
          (t = y.fixed.findIndex(function (e) {
            return e.element == selectNode(m.root);
          })),
          y.fixed.splice(t, 1),
          (t = y.offsets.findIndex(function (e) {
            return e.element == selectNode(m.root);
          })),
          y.offsets.splice(t, 1);
      }
      function r(t) {
        var e = getFromOffsetArray(y.offsets, selectNode(m.root));
        e.length <= 0 && (e = getFromOffsetArray(y.offsets, m.root)),
          "object" == typeof t &&
            ("element" in t
              ? !e.find(function (e) {
                  return e.element == t.element;
                }) &&
                t.element &&
                ((t = Object.assign({}, y.defaults.offsets, t)),
                pushToOffsetArray(y.offsets, m.root, t))
              : console.warn("Node not found for addOffset"));
      }
      function o(e) {
        var t = getFromOffsetArray(y.fixed, selectNode(m.root));
        t.length <= 0 && (t = getFromOffsetArray(y.offsets, m.root)),
          selectNode(e, !0) &&
            !t.includes(e) &&
            pushToOffsetArray(y.fixed, selectNode(m.root), e);
      }
      function n(e) {
        var t = getFromOffsetArray(y.offsets, selectNode(m.root)),
          r = getFromOffsetArray(y.fixed, selectNode(m.root)),
          o = y.offsets.findIndex(function (e) {
            return e.element == selectNode(m.root);
          }),
          n = y.fixed.findIndex(function (e) {
            return e.element == selectNode(m.root);
          });
        0 < t.length &&
          ((y.offsets[o].items = removeFromOffsetArray(t, selectNode(e, !0))),
          (y.offsets[o].items = removeFromOffsetArray(t, e))),
          0 < r.length &&
            ((y.fixed[n].items = removeFromOffsetArray(r, selectNode(e, !0))),
            (y.fixed[n].items = removeFromOffsetArray(r, e)));
      }
      function a() {
        g.dummy.style.height = g.fixed.scrollHeight + "px";
      }
      function h(s, t, i, r) {
        var a = 4,
          l = 1e-7,
          f = 10,
          e = "function" == typeof Float32Array;
        function o(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function c(e, t, r) {
          return ((o(t, r) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
        }
        function d(e, t, r) {
          return 3 * o(t, r) * e * e + 2 * (3 * r - 6 * t) * e + 3 * t;
        }
        if (!(0 <= s && s <= 1 && 0 <= i && i <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (s === t && i === r)
          return function (e) {
            return e;
          };
        for (var m = new (e ? Float32Array : Array)(11), n = 0; n < 11; ++n)
          m[n] = c(0.1 * n, s, i);
        function u(e) {
          for (var t = 0, r = 1; 10 !== r && m[r] <= e; ++r) t += 0.1;
          var o = t + 0.1 * ((e - m[--r]) / (m[r + 1] - m[r])),
            n = d(o, s, i);
          return 0.001 <= n
            ? (function (e, t, r, o) {
                for (var n = 0; n < a; ++n) {
                  var s = d(t, r, o);
                  if (0 === s) return t;
                  t -= (c(t, r, o) - e) / s;
                }
                return t;
              })(e, o, s, i)
            : 0 === n
            ? o
            : (function (e, t, r, o, n) {
                for (
                  var s, i, a = 0;
                  0 < (s = c((i = t + (r - t) / 2), o, n) - e)
                    ? (r = i)
                    : (t = i),
                    Math.abs(s) > l && ++a < f;

                );
                return i;
              })(e, t, t + 0.1, s, i);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : c(u(e), t, r);
        };
      }
    }),
    (e.prototype.inView = function (e) {
      if (e) {
        if (!NodeList.prototype.isPrototypeOf(e)) {
          var t = selectNode(e),
            r = (function e(t) {
              if (null == t) return document.body;
              var r = window.getComputedStyle(t).getPropertyValue("overflow");
              if (
                t.scrollHeight > t.clientHeight &&
                "visible" != r &&
                "hidden" != r
              )
                return t;
              return e(t.parentNode);
            })(t),
            o = r.getBoundingClientRect().top,
            e = o + r.getBoundingClientRect().height,
            r = t.getBoundingClientRect().top,
            t = r + t.getBoundingClientRect().height;
          return t <= e && o <= r && 0 < t && r <= window.innerHeight;
        }
        console.warn("Multiple elements are not selectable at inView");
      }
    }),
    e
  );
})();
function setOffsetArray(e, t, r) {
  var o = e.filter(function (e) {
    return e.element == t;
  });
  0 < o.length
    ? (r && (o[0].items = r), (o[0].element = t))
    : e.push(r ? { element: t, items: r } : { element: t });
}
function pushToOffsetArray(e, t, r) {
  var o = e.findIndex(function (e) {
    return e.element == t;
  });
  e[o].items.push(r);
}
function removeFromOffsetArray(e, t) {
  var r = e.findIndex(function (e) {
    return e.element == t || e == t;
  });
  if (-1 < r) {
    var o = selectNode(
      (o = "object" == typeof (o = e[r]) && !o.nodeName ? o.element : o),
      !0
    );
    if (NodeList.prototype.isPrototypeOf(o)) {
      for (var n = 0, s = o; n < s.length; n++) {
        var i = s[n];
        i.style.removeProperty("transform"),
          i.style.removeProperty("-webkit-transform"),
          "fixed" == i.style.position && i.style.removeProperty("position");
      }
      return;
    }
    o.style.removeProperty("transform"),
      o.style.removeProperty("-webkit-transform"),
      "fixed" == o.style.position && o.style.removeProperty("position"),
      e.splice(r, 1);
  }
  return e;
}
function getFromOffsetArray(e, t) {
  return e.filter(function (e) {
    return e.element == t;
  })[0].items;
}
function selectNode(e, t) {
  return "string" == typeof e
    ? t
      ? document.querySelectorAll(e)
      : document.querySelector(e)
    : e;
}
