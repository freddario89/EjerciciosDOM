const d = document

export function alarma ($btnAlarma,$btnStpAlarma,$audio) {
        d.addEventListener("click", (e)=>{
            if(e.target.matches($btnAlarma)){
                d.getElementById($audio).play()
                e.target.disabled = true
                d.querySelector($btnStpAlarma).disabled = false
            }
            if(e.target.matches($btnStpAlarma)){
                d.getElementById($audio).pause()
                e.target.disabled = true
                d.querySelector($btnAlarma).disabled = false
            }
        })
}