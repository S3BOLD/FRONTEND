<<<<<<< HEAD
// API de moedas
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

const selec1 = document.getElementById("Moeda1");
const selec2 = document.getElementById("Moeda2");
const qtdInput = document.getElementById("qtd");
const resultEl = document.getElementById("result");
const converterBtn = document.getElementById("converterBtn");

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

let rates = {};

/*
Função que carrega as moedas da API
*/
async function loadMoedas() {

    loadingEl.style.display = "block";

    try {

        const res = await fetch(API_URL);

        if (!res.ok) {
            throw new Error("HTTP " + res.status);
        }

        const data = await res.json();

        rates = data.rates;

        /*
        Criamos os selects dinamicamente
        */
        Object.keys(rates).forEach(currency => {

            const option1 = document.createElement("option");
            option1.value = currency;
            option1.textContent = currency;

            const option2 = option1.cloneNode(true);

            selec1.appendChild(option1);
            selec2.appendChild(option2);

        });

        selec1.value = "USD";
        selec2.value = "BRL";

    } catch (err) {

        console.error(err);

        errorEl.textContent = "Erro ao carregar moedas.";
        errorEl.classList.remove("hidden");

    }

    loadingEl.style.display = "none";

}

/*
Função que faz a conversão
*/
function converterMoeda() {

    const qtd = Number(qtdInput.value);

    const de = selec1.value;
    const para = selec2.value;

    /*
    Para converter entre moedas diferentes,
    precisamos normalizar usando USD como base.
    */

    const qtdInUSD = qtd / rates[de];
    const converter = qtdInUSD * rates[para];

    resultEl.textContent =
        `${qtd} ${de} = ${converter.toFixed(2)} ${para}`;

}

converterBtn.addEventListener("click", converterMoeda);

loadMoedas();


=======
// API de moedas
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

const selec1 = document.getElementById("Moeda1");
const selec2 = document.getElementById("Moeda2");
const qtdInput = document.getElementById("qtd");
const resultEl = document.getElementById("result");
const converterBtn = document.getElementById("converterBtn");

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

let rates = {};

/*
Função que carrega as moedas da API
*/
async function loadCurrencies(){

loadingEl.style.display = "block";

try{

const res = await fetch(API_URL);

if(!res.ok){
throw new Error("HTTP " + res.status);
}

const data = await res.json();

rates = data.rates;

/*
Criamos os selects dinamicamente
*/
Object.keys(rates).forEach(currency =>{

const option1 = document.createElement("option");
option1.value = currency;
option1.textContent = currency;

const option2 = option1.cloneNode(true);

selec1.appendChild(option1);
selec2.appendChild(option2);

});

selec1.value = "USD";
selec2.value = "BRL";

}catch(err){

console.error(err);

errorEl.textContent = "Erro ao carregar moedas.";
errorEl.classList.remove("hidden");

}

loadingEl.style.display = "none";

}

/*
Função que faz a conversão
*/
function converterMoeda(){

const qtd = Number(qtdInput.value);

const de = selec1.value;
const para = selec2.value;

/*
Para converter entre moedas diferentes,
precisamos normalizar usando USD como base.
*/

const qtdInUSD = qtd / rates[de];
const converter = qtdInUSD * rates[para];

resultEl.textContent =
`${qtd} ${de} = ${converter.toFixed(2)} ${para}`;

}

converterBtn.addEventListener("click", converterMoeda);

loadCurrencies();


>>>>>>> 782f4982f7a4c5d7d4f3532d53361d0669af6fe6
