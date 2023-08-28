"use strict";

const knap = document.querySelector("#knap");
const lav = document.querySelector("#lav");
const hoej = document.querySelector("#hoej");
const rigtigt = document.querySelector("#rigtigt");
const tal = document.querySelector("#tal");
const cGt = document.querySelector("#c_gaet");

let bTal;
let cTal;

let lGt;
let hGt;

let antal;


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    tal.value = "";
    knap.classList = " ";
    hoej.classList = " ";
    lav.classList = " ";
    rigtigt.classList = " ";
    lav.removeEventListener("click", klikKnap);
    hoej.removeEventListener("click", klikKnap);
    rigtigt.removeEventListener("click", vind);
    lGt = 0;
    hGt = 100;
    bTal = undefined;
    cTal = undefined;
    antal = 0;
    cGt.textContent = "Jeg er klar til at gætte";

    knap.addEventListener("click", klikKnap);
}

function klikKnap() {
    console.log("klik på knap");
    
    knap.removeEventListener("click", klikKnap);

    hoej.classList = " ";
    lav.classList = " ";
    rigtigt.classList = " ";
    lav.removeEventListener("click", klikKnap);
    hoej.removeEventListener("click", klikKnap);
    
    antal ++;
    
    bTal = parseInt(tal.value);
    console.log("Brugerens tal" + bTal);

    knap.classList.add("grey");

    cTal = Math.floor(Math.random() * (hGt - lGt)+ lGt);
    console.log("Computerens tal" + cTal);
    compare();
}

function compare() {
    console.log("compare");
    

    if (bTal < cTal) {
        hGt = cTal - 1;
        console.log("hGt " + hGt);
        cGt.textContent = `Jeg gætter på ${cTal}`;
        
        hoej.classList.add("grey");
        rigtigt.classList.add("grey");
        
        lav.addEventListener("click", klikKnap);
    }
    else if (bTal > cTal) {
        lGt = cTal + 1;
        console.log("lGt " + lGt);
        cGt.textContent = `Jeg gætter på ${cTal}`;
        
        lav.classList.add("grey");
        rigtigt.classList.add("grey");

        hoej.addEventListener("click", klikKnap);
    }
    else if (bTal === cTal) {
        cGt.textContent = `Jeg gætter på ${cTal}`;

        lav.classList.add("grey");
        hoej.classList.add("grey");

        rigtigt.addEventListener("click", vind);
    }
}

function vind() {
    console.log("vind");
    
    cGt.textContent = `Jeg gættede dit tal på ${antal} forsøg!`;

    confetti ({
        particleCount: 2000,
        spread: 270,
        angle: 270,
        origin: {y: -0.1}
    });

    setTimeout (sidenVises, 5000)
}
   