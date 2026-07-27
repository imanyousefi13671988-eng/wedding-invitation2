const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const cardScreen = document.getElementById("cardScreen");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let started = false;

envelope.addEventListener("click", () => {

    if(started) return;

    started = true;

    music.currentTime = 4;

    music.play();

    envelope.classList.add("open");

    setTimeout(()=>{

        cardScreen.classList.add("show");

        card.classList.add("show");

    },2800);

});

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="
