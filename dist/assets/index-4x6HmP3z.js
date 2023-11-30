(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const f=e=>Math.floor(e-273.15),v=async e=>{const i=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=33259847bcbacbf7d4101479248e25e5&lang=sp`,t=await fetch(i);if(t.status!==200)return!1;const n=await t.json(),{name:r,sys:p,main:d,weather:c,id:u,wind:h}=n,g=`

     

  <button class="text-3xl text-white absolute top-2 right-6 p-3">x</button>

  <div class="flex justify-evenly items-center h-24">
     
        <img src="https://openweathermap.org/img/wn/${c[0].icon}@2x.png" alt="clima">
      
     
      <p class="text-white font-bold">${p.country}</p>
  </div>
  
  <div class="text-center flex-1">
      <h1 class="text-5xl text-white font-bold">${f(d.temp)}<span>°C</span></h1>
      <h3 class="text-3xl text-white font-bold">${r}</h3>
      <p class="text-1xl text-white font-bold">${c[0].description}</p>
  </div>

  <div class="h-16">
      <p class="text-white font-semibold text-1xl">Humedad ${d.humidity}%</p>
      <p class="text-white  font-semibold text-1xl">Viento a ${h.speed} km/h</p>
  </div>




  `;`${r}${p.country}${f(d.temp)}${c[0].icon}${c[0].description}`;const o=document.createElement("div");return o.className="card w-full h-72 rounded-lg shadow-lg relative flex flex-col p-2",o.dataset.id=u,o.innerHTML=g,{cardContainer:o,id:u}},l=[],m=document.querySelector("div#Container"),x=e=>{if(e.target.nodeName==="BUTTON"&&e.target.parentElement.nodeName==="DIV"){const s=parseInt(e.target.parentElement.dataset.id),a=l.indexOf(s);l.splice(a,1),e.target.parentElement.remove()}};m.addEventListener("click",x);const w=()=>{const e=document.querySelector("input");document.getElementById("addCard").addEventListener("click",async a=>{if(a.preventDefault(),!e.value){e.classList.add("bad-input"),e.placeholder="Ingrese una ubicación";return}const{cardContainer:i,id:t}=await v(e.value);if(!i){e.value="",e.classList.add("bad-input"),e.placeholder="Ubicación no válida";return}if(l.includes(t)){e.classList.add("bad-input"),e.placeholder="Ya consultaste esta ubicación",e.value="";return}e.classList.remove("bad-input"),m.insertAdjacentElement("afterbegin",i),e.value="",e.placeholder="Ingresa una ubicación",l.push(t)})};w();
