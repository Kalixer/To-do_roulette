const options: string[] = [];

let elegido: boolean = false;



const read: HTMLElement = document.getElementById("read");
read.addEventListener("click", pushRead)
const draw: HTMLElement = document.getElementById("draw");
draw.addEventListener("click", pushDraw)
const study: HTMLElement = document.getElementById("study");
study.addEventListener("click", pushStudy)
const kondo: HTMLElement = document.getElementById("kondo");
kondo.addEventListener("click", pushKondo)
const anime: HTMLElement = document.getElementById("anime");
anime.addEventListener("click", pushAnime)

const main: HTMLElement = document.getElementById("main")


const spiner: HTMLElement = document.getElementById("spin-container")
// spiner.addEventListener('click', spin)
const spiner_button: HTMLElement = document.getElementById("spinner")
spiner_button.addEventListener('click', spin)



function pushRead() {
    options.push('Read');
    read.style.backgroundColor = "green";

    elegido = true;
}
function pushDraw() {
    options.push('Draw');
    draw.style.backgroundColor = "green";

    elegido = true;
}
function pushStudy() {
    options.push('Study')
    study.style.backgroundColor = "green";
    
    elegido = true;
}
function pushKondo() {
    options.push('Kondo')
    kondo.style.backgroundColor = "green";

    elegido = true;
}
function pushAnime() {
    options.push('Anime')
    anime.style.backgroundColor = "green";

    elegido = true;
}



function spin() {
    if (elegido) {
        
        let num_aleatorio = aleatorio(0, options.length - 1)
        console.log(options)
        console.log(num_aleatorio)

        main.style.display = "flex";
        main.style.justifyContent = "center"

        main.innerHTML = `
        <div class="loader-wrapper" id="loader-w">
            <div class="loader">
                <div class="loader loader-inner"></div>
            </div>
        </div>
        `
    
        setTimeout(() => {
            main.innerHTML = `
            <div class="box" id="carga">${options   [num_aleatorio]}
            </div>
            `
        }, 3000)

        function aleatorio(min:number, max:number):number {
            const numero_r: number = Math.floor(Math.random() * (max - min + 1)) + min;
        
            console.log(numero_r)
            return numero_r
        }
        
        
    } else {
        const message:string = ":|"
        console.log("Nani!")
        
        main.style.display = "flex";
        main.style.justifyContent = "center"

        main.innerHTML = `
        <div class="loader-wrapper" id="loader-w">
            <div class="loader">
                <div class="loader loader-inner"></div>
            </div>
        </div>
        `
    
        setTimeout(() => {
            main.innerHTML = `
            <div class="box" id="carga">${message}
            </div>
            `
        }, 3000)
    }
}





