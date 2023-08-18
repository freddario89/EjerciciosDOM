const d = document
//$btnRej = document.getElementsByClassName(".btn-reloj"),
//$btnStp = document.getElementsByClassName(".btn-stop");
    


export function reloj($btnRej,$btnStp,$btnr,$btns,$pRej) {
    let temp;
    d.addEventListener("click",(e)=>{
        if(e.target.matches($btnRej)){
            temp = setInterval(() => {
                let hora = new Date().toLocaleTimeString()
                d.getElementById($pRej).innerHTML = hora; 
            },1000);
            e.target.disabled = true
            d.getElementById($btns).removeAttribute("disabled")
        }
        if(e.target.matches($btnStp)){
            clearInterval(temp)
            e.target.disabled = true
            d.getElementById($btnr).removeAttribute("disabled")
        }
})
}