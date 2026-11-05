// jointbrex.onrender.com: reveal-on-scroll (progressive enhancement), "Where to?" panel, ingredient tiles, habit planner, sticky order bar.
(function () {
  var root = document.documentElement;
  var els = [].slice.call(document.querySelectorAll(".jbx-rise,.jbx-perday2,.jbx-rater,.jbx-dial2,.jbx-chartx,.jbx-dose,.jbx-donutx"));
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(el) { el.classList.add("is-in"); }
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(show); }
  else {
    root.classList.add("jbx-live2");
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "200px 0px -5% 0px", threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
    var sweep = function () {
      var vh = innerHeight;
      els.forEach(function (el) { if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < vh * 0.92) show(el); });
    };
    addEventListener("scroll", sweep, { passive: true });
    addEventListener("load", function () { sweep(); [400, 1200, 2500].forEach(function (t) { setTimeout(sweep, t); }); });
    sweep();
    setTimeout(function () { els.forEach(show); }, 3500);
  }

  var btn = document.querySelector(".jbx-menubtn"), panel = document.getElementById("jbx-megamenu");
  if (btn && panel) {
    var set = function (on) {
      if (on) panel.setAttribute("data-open", ""); else panel.removeAttribute("data-open");
      btn.setAttribute("aria-expanded", on ? "true" : "false");
    };
    btn.addEventListener("click", function (e) { e.stopPropagation(); set(!panel.hasAttribute("data-open")); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); e.stopPropagation(); });
    document.addEventListener("click", function () { set(false); });
    addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  }

  var tiles = [].slice.call(document.querySelectorAll(".jbx-chip6"));
  if (tiles.length) {
    var stories = [].slice.call(document.querySelectorAll(".jbx-focus"));
    tiles.forEach(function (t) {
      t.addEventListener("click", function () {
        var id = t.getAttribute("data-s");
        tiles.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        stories.forEach(function (s) { s.hidden = s.id !== id; });
      });
    });
  }

  var moments = [].slice.call(document.querySelectorAll(".jbx-whenb")), label = document.getElementById("jbx-moment");
  moments.forEach(function (m) {
    m.addEventListener("click", function () {
      moments.forEach(function (x) { x.setAttribute("aria-pressed", x === m ? "true" : "false"); });
      if (label) label.textContent = m.textContent.toLowerCase();
    });
  });
  [].slice.call(document.querySelectorAll(".jbx-daysbtn")).forEach(function (d) {
    d.addEventListener("click", function () { d.setAttribute("aria-pressed", d.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
  });

  var bar = document.querySelector(".jbx-sticky2"), foot = document.querySelector(".jbx-base2");
  if (bar) {
    var upd = function () {
      if (scrollY > 620) bar.setAttribute("data-up", ""); else bar.removeAttribute("data-up");
      var hide = false;
      if (foot) hide = foot.getBoundingClientRect().top < innerHeight - 40;
      if (hide) bar.setAttribute("data-hide", ""); else bar.removeAttribute("data-hide");
    };
    addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
  }
})();

/* hero joint canvas: a hinge joint flexing through its range, ligament nodes, travelling pulse and particles along the bones */
(function(){var c=document.getElementById('jbx-flow');if(!c||!c.getContext)return;var x=c.getContext('2d'),W=c.width,H=c.height,reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,t=0,run=true,i,jx=W*0.46,jy=H*0.5,L1=120,L2=112;
var parts=[];for(i=0;i<30;i++){parts.push({p:Math.random(),s:0.004+Math.random()*0.005,b:i%2})}
function pt(ax,ay,ang,len,f){return [ax+Math.cos(ang)*len*f,ay+Math.sin(ang)*len*f]}
function frame(){t+=0.016;x.clearRect(0,0,W,H);
var flex=0.55+0.5*Math.sin(t*1.1),a1=Math.PI+0.0+0.1,a2=a1+flex*1.25*(1);var up=pt(jx,jy,Math.PI,L1,1),lo=pt(jx,jy,Math.PI+0.0,0,0);var end=[jx+Math.cos(-0.2+flex*1.1)*L2,jy+Math.sin(-0.2+flex*1.1)*L2*(-1)*-1];
var ang=-0.35+flex*1.0;end=[jx+Math.cos(ang)*L2,jy+Math.sin(ang)*L2];
x.strokeStyle='rgba(31,154,77,.9)';x.lineCap='round';x.lineWidth=9;x.beginPath();x.moveTo(jx-L1,jy-6);x.lineTo(jx,jy);x.stroke();
x.strokeStyle='rgba(20,112,58,.9)';x.beginPath();x.moveTo(jx,jy);x.lineTo(end[0],end[1]);x.stroke();
x.lineWidth=1.2;x.strokeStyle='rgba(31,154,77,.35)';
var ring=[];for(i=0;i<8;i++){var a=i/8*Math.PI*2+t*0.3;ring.push([jx+Math.cos(a)*34,jy+Math.sin(a)*34])}
x.beginPath();for(i=0;i<=8;i++){var q=ring[i%8];if(i)x.lineTo(q[0],q[1]);else x.moveTo(q[0],q[1])}x.stroke();
for(i=0;i<8;i++){x.beginPath();x.moveTo(ring[i][0],ring[i][1]);x.lineTo(jx-L1*0.55,jy-3);x.moveTo(ring[i][0],ring[i][1]);x.lineTo(jx+(end[0]-jx)*0.55,jy+(end[1]-jy)*0.55);x.stroke()}
for(i=0;i<8;i++){x.beginPath();x.arc(ring[i][0],ring[i][1],3,0,6.283);x.fillStyle=i%2?'rgba(232,163,23,.9)':'rgba(31,154,77,.9)';x.fill()}
var pu=1+0.15*Math.sin(t*2.4);x.beginPath();x.arc(jx,jy,11*pu,0,6.283);x.fillStyle='rgba(232,163,23,.95)';x.fill();x.beginPath();x.arc(jx,jy,19*pu,0,6.283);x.strokeStyle='rgba(232,163,23,.4)';x.lineWidth=2;x.stroke();
x.strokeStyle='rgba(232,163,23,.55)';x.lineWidth=2;x.beginPath();x.arc(jx,jy,64,-0.35,ang>-0.35?ang:-0.35);x.stroke();x.setLineDash([4,6]);x.beginPath();x.arc(jx,jy,64,-0.35,0.65);x.stroke();x.setLineDash([]);
for(i=0;i<parts.length;i++){var p=parts[i];if(!reduce){p.p+=p.s;if(p.p>1)p.p=0}var X,Y;if(p.b){X=jx-L1+L1*p.p;Y=jy-6+6*p.p}else{X=jx+(end[0]-jx)*(1-p.p);Y=jy+(end[1]-jy)*(1-p.p)}x.beginPath();x.arc(X,Y,2.2,0,6.283);x.fillStyle='rgba(232,163,23,'+(0.2+0.6*Math.sin(p.p*3.14))+')';x.fill()}
if(run&&!reduce)requestAnimationFrame(frame)}
frame();
if('IntersectionObserver' in window){new IntersectionObserver(function(e){var v=e[0].isIntersecting;if(v&&!run&&!reduce){run=true;frame()}else if(!v){run=false}},{threshold:0}).observe(c)}
})();
