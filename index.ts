const options: string[] = [];


const read: HTMLElement = document.getElementById("read");
read.addEventListener("click", pushRead)
const draw: HTMLElement = document.getElementById("draw");
draw.addEventListener("click", pushDraw)
const study: HTMLElement = document.getElementById("study");
study.addEventListener("click", pushStudy)
const kondo: HTMLElement = document.getElementById("kondo");
kondo.addEventListener("click", pushKondo)

function pushRead() {
    options.push('Read');
    console.log(options)
}
function pushDraw() {
    options.push('Draw');
    console.log(options)
}
function pushStudy() {
    options.push('Study');
    console.log(options)
}
function pushKondo() {
    options.push('Kondo');
    console.log(options)
}

const spiner: HTMLElement = document.getElementById("spinner")
spiner.addEventListener('click', spin)

function spin() {
    console.log(options)
}