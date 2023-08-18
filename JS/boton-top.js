const d = document,
$btnscroll = d.querySelector(".ir-arriba")

export function scrollTop ($irArriba,$btntop){
window.addEventListener("scroll", ()=>{
    if(window.scrollY>600){
        $btnscroll.classList.add($btntop)
    }
    else{
        $btnscroll.classList.remove($btntop)
    }
    
})

window.addEventListener("click",(e)=>{
    if(e.target.matches($irArriba)){
    window.scrollTo(0,0)
    }
})
}