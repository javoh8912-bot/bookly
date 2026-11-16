/* Bookly: kitobni sayt ichida ko'rish. Muqova sichqoncha bilan tortilib ochiladi/yopiladi,
   ichidagi bitta qog'oz sahifada kitobning online sayti (link) ko'rinadi. */
(function () {
  const $ = s => document.querySelector(s);
  const mq = window.matchMedia("(max-width: 767px)");
  let book, el, ang = 0, yakka = false, raf = 0, drag = null;

  function olish() {
    el = {
      root: $("#kitobOqish"), sahna: $(".b-sahna"), kitob: $("#bKitob"), muqova: $("#bMuqova"),
      titul: $("#bTitul"), rasm: $("#bMuqova img"), oyna: $("#oqishOyna"), btn: $("#bOchish"),
      soya: [...document.querySelectorAll("#bMuqova .b-soya")]
    };
  }

  function titulYoz() {
    el.titul.textContent = "";
    const add = (tag, text, cls) => { const e = document.createElement(tag); e.textContent = text; if (cls) e.className = cls; el.titul.append(e); };
    add("span", book.janr, "b-janr");
    add("h2", book.nomi, "b-nomi");
    add("i", "", "b-bezak");
    add("p", book.muallif, "b-muallif");
    if (book.tavsif) add("p", book.tavsif, "b-qisqa");
    add("small", "Bookly", "b-belgi");
  }

  /* muqova burchagi: 0 = yopiq, 180 = to'liq ochiq */
  function setAngle(a) {
    ang = a;
    const s = Math.sin(a * Math.PI / 180), t = a / 180;
    el.muqova.style.transform = `rotateY(${-a}deg) rotateX(${(2 * s).toFixed(2)}deg) translateZ(${(10 * s).toFixed(1)}px)`;
    if (yakka) el.kitob.style.transform = "";
    else el.kitob.style.transform = `translateX(${(-(el.kitob.offsetWidth / 4) * (1 - t)).toFixed(1)}px)`;
    el.soya.forEach(x => x.style.opacity = (s * .55).toFixed(2));
    const txt = a >= 90 ? "Kitobni yopish" : "Kitobni ochish";
    if (el.btn.textContent !== txt) el.btn.textContent = txt;
  }

  function animateTo(target) {
    cancelAnimationFrame(raf);
    const a0 = ang, ms = Math.max(300, 1100 * Math.abs(target - a0) / 180), t0 = performance.now();
    const step = now => {
      let p = Math.min(1, (now - t0) / ms);
      p = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setAngle(a0 + (target - a0) * p);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  /* sichqoncha (yoki barmoq) yo'li bo'yicha burchakni hisoblash */
  function pointerdanBurchak(px) {
    const pw = el.kitob.offsetWidth / (yakka ? 1 : 2);
    const r = (yakka ? el.kitob : el.sahna).getBoundingClientRect();
    const cx = yakka ? r.left : r.left + r.width / 2;
    let a = ang;
    for (let i = 0; i < 6; i++) {
      const spine = yakka ? cx : cx - (pw / 2) * (1 - a / 180);
      const c = Math.max(-1, Math.min(1, (px - spine) / pw));
      a = Math.acos(c) * 180 / Math.PI;
    }
    return a;
  }

  function spine(a, pw, cx) { return yakka ? cx : cx - (pw / 2) * (1 - a / 180); }

  function down(e) {
    if (e.button > 0) return;
    cancelAnimationFrame(raf);
    const pw = el.kitob.offsetWidth / (yakka ? 1 : 2);
    const r = (yakka ? el.kitob : el.sahna).getBoundingClientRect();
    const cx = yakka ? r.left : r.left + r.width / 2;
    drag = { x0: e.clientX, edge0: spine(ang, pw, cx) + pw * Math.cos(ang * Math.PI / 180), moved: false, a0: ang };
    el.muqova.setPointerCapture(e.pointerId);
    el.muqova.classList.add("b-tortilmoqda");
  }

  function move(e) {
    if (!drag) return;
    if (Math.abs(e.clientX - drag.x0) > 4) drag.moved = true;
    if (drag.moved) setAngle(pointerdanBurchak(drag.edge0 + (e.clientX - drag.x0)));
  }

  function up() {
    if (!drag) return;
    const d = drag; drag = null;
    el.muqova.classList.remove("b-tortilmoqda");
    if (!d.moved) animateTo(d.a0 < 90 ? 180 : 0);   // oddiy bosish: ochish / yopish
    else animateTo(ang > 90 ? 180 : 0);               // tortgandan keyin: yaqin tomonga tugallash
  }

  function ochish(b) {
    if (!el) olish();
    book = b;
    $("#oqishNomi").textContent = b.nomi;
    $("#oqishYangiOyna").href = b.link || "#";
    el.rasm.src = b.rasm; el.rasm.alt = b.nomi + " muqovasi";
    titulYoz();
    el.root.hidden = false;
    document.body.style.overflow = "hidden";
    yakka = mq.matches;
    el.kitob.classList.toggle("b-yakka", yakka);
    el.oyna.src = b.link;           // sayt muqova ostida oldindan yuklanadi
    setAngle(0);
    el.muqova.focus({ preventScroll: true });
  }

  function yopish() {
    if (!el || el.root.hidden) return;
    cancelAnimationFrame(raf);
    el.oyna.src = "about:blank";
    el.root.hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    olish();
    el.muqova.addEventListener("pointerdown", down);
    el.muqova.addEventListener("pointermove", move);
    el.muqova.addEventListener("pointerup", up);
    el.muqova.addEventListener("pointercancel", up);
    el.btn.addEventListener("click", () => animateTo(ang < 90 ? 180 : 0));
    $("#oqishYopish").addEventListener("click", yopish);
    document.addEventListener("keydown", e => {
      if (el.root.hidden) return;
      if (e.key === "Escape") yopish();
      else if (e.key === "ArrowLeft") animateTo(180);
      else if (e.key === "ArrowRight") animateTo(0);
    });
    mq.addEventListener("change", () => {
      if (el.root.hidden) return;
      yakka = mq.matches; el.kitob.classList.toggle("b-yakka", yakka); setAngle(ang);
    });
  });

  window.KitobOqish = { ochish, yopish };
})();
