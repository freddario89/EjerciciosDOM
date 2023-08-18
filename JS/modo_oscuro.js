const d = document,
body = d.body,
luna = "🌙",
sol =  "☀️"

export function darkmode ($darkMode,$dm,$header,$hd) {

d.addEventListener("click", (e)=>{
    if(e.target.matches($darkMode)){
        if(e.target.innerText===luna){
        body.classList.toggle($dm)
        d.querySelector($header).classList.toggle($hd)
        e.target.innerText = sol 
        }else{
            body.classList.toggle($dm)
            d.querySelector($header).classList.toggle($hd)
            e.target.innerText = luna
        }

    }
    if(body.classList.contains("dm")){
        localStorage.setItem("darkMode", "true")
    }else{
        localStorage.setItem("darkMode", "false")
    }
    })}

if(localStorage.getItem("darkMode")==="true"){
    body.classList.add("dm")
        d.querySelector(".header").classList.add("hd")
        d.querySelector(".dark-mode").innerText = sol
}else{
    body.classList.remove("dm")
        d.querySelector(".header").classList.remove("hd")
        d.querySelector(".dark-mode").innerText = luna
}