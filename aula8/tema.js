// Função para mudar o tema manualmente no menu
function mudarTemaManual(tema) {
    document.body.className = tema;
}

// Quando a página carregar, ele detecta o mês e aplica o tema sozinho
document.addEventListener("DOMContentLoaded", () => {
    const mes = new Date().getMonth(); // Retorna de 0 (Jan) a 11 (Dez)
    let temaClass = "tema-padrao"; // O padrão é o Verde

    if (mes === 6) temaClass = "tema-julho";
    else if (mes === 9) temaClass = "tema-outubro";
    else if (mes === 10) temaClass = "tema-novembro";
    else if (mes === 11) temaClass = "tema-dezembro";

    document.body.className = temaClass;
    
    // Atualiza o seletor para mostrar o mês correto que foi detectado
    const seletor = document.getElementById("seletor-tema");
    if (seletor) {
        seletor.value = temaClass;
    }
});