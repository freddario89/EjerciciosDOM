const d = document

export function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;
    

    d.addEventListener("submit", e=>{
        if(e.target ===$form){
            e.preventDefault()
            tester = window.open($form.url.value,"tester",`innerWidth=${$form.anchura.value}, innerHeight = ${$form.altura.value}`)
        } 
    })
    d.addEventListener("click", (e)=>{
        if(e.target===$form.cerrar)
        tester.close()
        
    })
    
    
}