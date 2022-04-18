var options = [];
var elegido = false;
var title_message = document.getElementById("title-message");
var read = document.getElementById("read");
read.addEventListener("click", pushRead);
var draw = document.getElementById("draw");
draw.addEventListener("click", pushDraw);
var study = document.getElementById("study");
study.addEventListener("click", pushStudy);
var kondo = document.getElementById("kondo");
kondo.addEventListener("click", pushKondo);
var anime = document.getElementById("anime");
anime.addEventListener("click", pushAnime);
var main = document.getElementById("main");
var spiner = document.getElementById("spin-container");
// spiner.addEventListener('click', spin)
var spiner_button = document.getElementById("spinner");
spiner_button.addEventListener('click', spin);
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
    options.push('Study');
    study.style.backgroundColor = "green";
    elegido = true;
}
function pushKondo() {
    options.push('Tidy up');
    kondo.style.backgroundColor = "green";
    elegido = true;
}
function pushAnime() {
    options.push('Watch Anime');
    anime.style.backgroundColor = "green";
    elegido = true;
}
function spin() {
    if (elegido) {
        var num_aleatorio_1 = aleatorio(0, options.length - 1);
        // console.log(options)
        // console.log(num_aleatorio)
        title_message.innerHTML = "Well, do this:";
        main.style.display = "flex";
        main.style.justifyContent = "center";
        main.innerHTML = "\n        <div class=\"loader-wrapper\" id=\"loader-w\">\n            <div class=\"loader\">\n                <div class=\"loader loader-inner\"></div>\n            </div>\n        </div>\n        ";
        setTimeout(function () {
            main.innerHTML = "\n            <div class=\"box\" id=\"carga\">".concat(options[num_aleatorio_1], "\n            </div>\n            ");
        }, 3000);
        function aleatorio(min, max) {
            var numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
            // console.log(numero_r)
            return numero_r;
        }
    }
    else {
        var message_1 = ":|";
        console.log("Nani!");
        main.style.display = "flex";
        main.style.justifyContent = "center";
        main.innerHTML = "\n        <div class=\"loader-wrapper\" id=\"loader-w\">\n            <div class=\"loader\">\n                <div class=\"loader loader-inner\"></div>\n            </div>\n        </div>\n        ";
        setTimeout(function () {
            main.innerHTML = "\n            <div class=\"box\" id=\"carga\">".concat(message_1, "\n            </div>\n            ");
        }, 3000);
    }
}
