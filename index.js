/* empty css                      */import{a as m,S as p,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="57512176-00f0b64b0dbc93a3c4327f754",y="https://pixabay.com/api/";function h(o){return m.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>

          <div class="image-info">
            <p><b>Likes</b><br>${t}</p>
            <p><b>Views</b><br>${s}</p>
            <p><b>Comments</b><br>${d}</p>
            <p><b>Downloads</b><br>${f}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function v(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=c.elements["search-text"].value.trim();r&&(S(),v(),h(r).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
