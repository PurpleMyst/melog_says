!(function () {
  "use strict";
  !(async function () {
    const t = document.getElementById("melog_canvas"),
      e = t.getContext("2d"),
      n = await ((o = "melog.png"),
      new Promise((t, e) => {
        const n = new Image();
        (n.onload = () => t(n)), (n.onerror = (t) => e(t)), (n.src = o);
      }));
    var o;
    const i = document.getElementById("melog_text");
    function c(o) {
      e.clearRect(0, 0, t.width, t.height),
        e.drawImage(n, 0, 0),
        (e.font = "16px Comic Sans MS"),
        (e.fillStyle = "black");
      const i = (function (t, e, n) {
        const o = e.split(" "),
          i = [];
        let c = o[0];
        for (var a = 1; a < o.length; a++) {
          var l = o[a];
          t.measureText(c + " " + l).width < n
            ? (c += " " + l)
            : (i.push(c), (c = l));
        }
        return i.push(c), i;
      })(e, o, 60);
      let c = 78;
      i.forEach((t) => {
        e.fillText(t, 26, c), (c += 16);
      });
    }
    (t.width = n.width),
      (t.height = n.height),
      c("type text here vv"),
      i.addEventListener("input", function () {
        c(this.value);
      });
  })();
})();
