import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";let s=null,u=null;const r=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]"),a=document.querySelector("#datetime-picker"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(r.disabled=!0,i.show({title:"Error",message:"Please choose a date in the future",position:"topRight",color:"red"})):(s=t[0],r.disabled=!1,i.show({title:"Success",message:"Lets go",position:"topRight",color:"green"}))}};y(a,b);function d({days:t,hours:o,minutes:n,seconds:c}){p.textContent=e(t),S.textContent=e(o),g.textContent=e(n),w.textContent=e(c)}r.addEventListener("click",()=>{s&&(r.disabled=!0,a.disabled=!0,u=setInterval(()=>{const o=s-new Date;if(o<=0){clearInterval(u),d({days:0,hours:0,minutes:0,seconds:0}),a.disabled=!1;return}const n=q(o);d(n)},1e3))});function q(t){const l=e(Math.floor(t/864e5)),m=e(Math.floor(t%864e5/36e5)),h=e(Math.floor(t%864e5%36e5/6e4)),f=e(Math.floor(t%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:h,seconds:f}}function e(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
