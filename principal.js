var banner = ["Os melhores do Brasil", "Qualidade e preço baixo"];
var banner = 0;

function trocaBanner(){
    banner = (banner +1) % 2;
    document.getElementById("h2#mensagem").textContent = banner[banner];
}
setInterval(trocaBanner, 2000);