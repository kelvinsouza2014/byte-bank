// SELECIONANDO O FORMULÁRIO HTML
const elementoFormulario = document.querySelector(".block-nova-transacao form");
// ADIÇÃO DE EVENTO QUE MODIFICA O COMPORTAMENTO PADRÃO DE ENVIO DE FORMULÁRIO
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // SE OS TODOS DADOS NÃO FOREM INSERIDOS NOS CAMPOS, EXIBA ESTE ALERTA
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    // SELEÇÃO DO INPUT(ELEMENTO) DO FORMULÁRIO
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    // SELEÇÃO DO INPUT(ELEMENTO) DO FORMULÁRIO
    const inputValor = elementoFormulario.querySelector("#valor");
    // SELEÇÃO DO INPUT(ELEMENTO) DO FORMULÁRIO
    const inputData = elementoFormulario.querySelector("#data");
    // PRÉ-DETERMINAR AS REFERÊNCIAS VARIÁVEIS, VIÁVEIS COM BASE NA 'ENUM' 'TIPOTRANSACAO'
    let tipoTransacao = inputTipoTransacao.value;
    // REFERÊNCIA VARIÁVEL QUE RECEBERÁ O VALOR DA TRANSAÇÃO
    let valor = inputValor.valueAsNumber;
    // REFERÊNCIA VARIÁVEL QUE RECEBERÁ A NOVA DATA DA TRANSAÇÃO
    let data = new Date(inputData.value);
    // SE A TRANSAÇÃO FOR DO TIPO DEPÓSITO, SOME O VALOR AO SALDO DA CONTA
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
        // SE A TRANSAÇÃO FOR DO TIPO TRANSFERÊNCIA OU PAGAMENTO DE BOLETO, SUBTRAIA O VALOR DA TRANSAÇÃO DA SALDO DA CONTA
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
        // SE A TRANSAÇÃO FOR DE QUALQUER OUTRO TIPO FORA DA 'ENUM', EXIBA UM ALERTA
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    // FORMATAR A MOEDA PARA SER EXIBIDA / EXIBIR O CONTEÚDO FORMATADO NO TIPO TEXTO (STRING)
    elementoSaldo.textContent = formatarMoeda(saldo);
    // OBJETO TIPADO, NO QUAL RECEBERÁ O CONTEÚDO DE TIPO DE TRANSAÇÃO, VALOR E DATA
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    // VISUALIZAÇÃO DA OPERAÇÃO EM EXECUÇÃO NO CONSOLE 
    console.log(novaTransacao);
    elementoFormulario.reset();
});
