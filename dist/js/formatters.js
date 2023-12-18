// FUNÇÃO PARA FORMATAR O VALOR DE NÚMERO PARA TEXTO (STRING)
function formatarMoeda(valor) {
    // FORMATAR A STRING EM PORTUGUÊS BRASILEIRO, ESTILO DE MOEDA, MOEDA BRASILEIRA
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
// FUNÇÃO PARA FORMATAR A DATA DO TIPO DATA PARA TEXTO (STRING) NO FORMATO PADRÃO
function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        // FORMATAR O IDIOMA, DIA DA SEMANA, DIA, MÊS E ANO
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleDateString("pt-br");
}
