// REFERÊNCIA VARIÁVEL COM O SALDO DA CONTA
let saldo = 3000;
// SELEÇÃO DO VALOR DO INPUT COLETADO NO HTML
const elementoSaldo = document.querySelector(".saldo-valor .valor");
// SELEÇÃO DA DATA COLETADA NO INPUT HTML
const elementoDataAcesso = document.querySelector(".block-saldo time");
// SE O SALDO DA TRANSAÇÃO NÃO FOR NULO, FORMATE A MOEDA 
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
// SE A DATA DA TRANSAÇÃO NÃO FOR NULO, FORMATE A NOVA DATA 
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
