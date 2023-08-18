const d = document;

export function aside($btnHam,$btnB,$asideBar,$secBar,$barSide,$isAct,e){

    d.addEventListener("click",(e)=>{
        if(e.target.matches($btnB)|| e.target.matches(".hamburger *")){
            d.querySelector($asideBar).classList.toggle($barSide);
            d.getElementById($btnHam).classList.toggle($isAct)
        }
        if(e.target.matches($secBar)|| e.target.matches(".sec *")){
        d.querySelector($asideBar).classList.toggle($barSide);
        d.getElementById($btnHam).classList.toggle($isAct)
        }
    })
}
