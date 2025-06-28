const bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
    const posX=event.offsetX;
    const posY=event.offsetY;
    const size=Math.random()*85;

    const spanEl=document.createElement("span");
    spanEl.style.top=posY+"px";
    spanEl.style.left=posX+"px";
    spanEl.style.height=size+"px";
    spanEl.style.width=size+"px";
    
    bodyEl.appendChild(spanEl);

    
    setTimeout(()=>{
        spanEl.remove();
    },7000)

})

