// FUNÇÃO PARA FORMATAR O VALOR DE NÚMERO PARA TEXTO (STRING)
function formatarMoeda(valor) {
    // FORMATAR A STRING EM PORTUGUÊS BRASILEIRO, ESTILO DE MOEDA, MOEDA BRASILEIRA
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
// FUNÇÃO PARA FORMATAR A DATA DO TIPO DATA PARA TEXTO (STRING)
function formatarData(data) {
    // FORMATAR O IDIOMA, DIA DA SEMANA, DIA, MÊS E ANO
    return data.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
