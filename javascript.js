
        let scrollc=document.querySelector(".galary")
        let backbtn=document.getElementById("backbtn")
        let nextbtn=document.getElementById("nextbtn")
    
        scrollc.addEventListener("wheel",(e)=>{
            e.preventDefault();
            scrollc.scrollLeft+= e.deltaX;
            scrollc.style.scrollBehavior = "auto"
        });
        nextbtn.addEventListener("click",()=>{
            scrollc.style.scrollBehavior ="smooth"
            scrollc.scrollLeft +=900;
        })
        backbtn.addEventListener("click",()=>{
            scrollc.style.scrollBehavior="smooth"
            scrollc.scrollLeft -=900;
        })