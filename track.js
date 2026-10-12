/* Art Yapı – ölçüm kodları (Google Analytics 4 + Meta Pixel), çerez onayına bağlı */
(function(){
var GA_ID = "G-53E8QK551W";   // Google Analytics 4 ölçüm kimliği (G-XXXXXXX)
var PIXEL_ID = ""; // Meta Pixel kimliği
if(!GA_ID && !PIXEL_ID) return;
var KEY="ay_consent";
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
function load(){
 if(GA_ID){var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA_ID);}
 if(PIXEL_ID){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
  fbq("init",PIXEL_ID);fbq("track","PageView");}
 document.addEventListener("click",function(ev){var a=ev.target.closest&&ev.target.closest("a");if(!a)return;var h=a.getAttribute("href")||"";
  var m=h.indexOf("tel:")===0?"telefon":(h.indexOf("wa.me")>-1?"whatsapp":"");if(!m)return;
  if(window.gtag)gtag("event","generate_lead",{method:m});if(window.fbq)fbq("track","Contact",{method:m});},true);
 window.ayLead=function(t){if(window.gtag)gtag("event",t);if(window.fbq)fbq("trackCustom",t);};
}
var c=get();
if(c==="1"){load();return}
if(c==="0")return;
function banner(){
 var d=document.createElement("div");d.id="ayc";
 d.innerHTML='<p>Sitemizi geliştirmek ve reklamlarımızı ölçmek için çerez kullanmak istiyoruz. Ayrıntılar: <a href="kvkk.html#cerez">Çerez Politikası</a></p><div><button data-v="0">Reddet</button><button data-v="1">Kabul Et</button></div>';
 d.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:620px;margin:0 auto;background:#14161a;color:#ddd;border:1px solid rgba(207,174,92,.5);border-radius:14px;padding:16px 18px;font:14px/1.5 Inter,system-ui,sans-serif;display:flex;gap:14px;align-items:center;flex-wrap:wrap;box-shadow:0 10px 30px rgba(0,0,0,.35)";
 var st=document.createElement("style");st.textContent="#ayc p{flex:1 1 260px;margin:0}#ayc a{color:#cfae5c;text-decoration:underline}#ayc div{display:flex;gap:8px}#ayc button{border:1px solid #cfae5c;border-radius:30px;padding:9px 18px;font-weight:600;cursor:pointer;background:transparent;color:#eee}#ayc button[data-v='1']{background:#cfae5c;color:#111}@media(max-width:900px){#ayc{bottom:64px!important}}";
 document.head.appendChild(st);document.body.appendChild(d);
 d.addEventListener("click",function(e){var v=e.target.getAttribute&&e.target.getAttribute("data-v");if(v===null||v===undefined)return;set(v);d.remove();if(v==="1")load();});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",banner);else banner();
})();
