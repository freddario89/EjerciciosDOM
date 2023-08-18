import { alarma } from "./alarma.js";
import { aside } from "./aside.js";
import { scrollTop } from "./boton-top.js";
import userDeviceInfo from "./dispositivos.js";
import { darkmode } from "./modo_oscuro.js";
import { reloj } from "./reloj.js";
import responsiveMedia from "./responsive.js";
import { responsiveTester } from "./responsive_tester.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document

window.addEventListener("DOMContentLoaded", (e)=>{
    aside("btn-ham",".hamburger",".bar-lat",".sec","bar-aside","is-active")
    scrollTop(".ir-arriba","btn-top")
    reloj(".btn-reloj",".btn-stop","btn-r","btn-s","p-reloj")
    darkmode(".dark-mode","dm",".header","hd")
    alarma(".btn-alarma", ".btn-stpAlarma","audio")
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/NkihW2ss82ddSVuk6" target="_blank" rel="noopener">Ver Video</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.520377858783!2d-74.06383238825224!3d4.679225695276089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd5a4c1f041%3A0x320581323e112b5c!2sEc%20Group!5e0!3m2!1ses!2sco!4v1692213022379!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)

    
    responsiveTester("form")
    userDeviceInfo("user-device")
})

d.addEventListener("keydown", (e)=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})