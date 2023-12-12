// Referência variável com o valor de saldo na conta.
let saldo = 3000;

// Selecionar o elemento (tag), que contém o conteúdo (valor) do saldo da conta.
const elementoSaldo = document.querySelector(".saldo-valor .valor");
// Atribuir o novo conteúdo (valor de saldo), através da referência variável 'let saldo'.
elementoSaldo.textContent = saldo;

// Referência constante (fixa), com a seleção do formulário
const elementoFormulario = document.querySelector(".block-nova-transacao form");
// Adição de um evento no formulário, do tipo de submit e função anônima que impede o comportamento padrão do submit (recarregar a página, após o envio do formulário (submit)).
elementoFormulario.addEventListener("submit", function (event) {
  event.preventDefault();
  // Validação se o formulário de transação foi devidamente preenchido, os elementos do formulário estão com o atributo 'required'no HTML.
  // Se o preenchimento ou validação do formulário for falso, exiba um alerta com a mensagem.
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
  }

  // Referência constante (fixa), com a seleção do tipo de transação
  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
  // Referência constante (fixa), com a seleção do valor
  const inputValor = elementoFormulario.querySelector("#valor");
  // Referência constante (fixa), com a seleção da data
  const inputData = elementoFormulario.querySelector("#data");

  // Referência variável que irá receber o valor do input tipo de transação.
  let tipoTransacao = inputTipoTransacao.value;
  // Referência variável que irá receber o valor do input valor.
  let valor = inputValor.value;
  // Referência variável que irá receber o valor do input data.
  let data = inputData.value;

  // Se o tipo de transação for "Depósito", some o novo valor com o saldo da conta.
  if (tipoTransacao == "Depósito") {
    saldo += valor;
    // Se o tipo de transação for "Transferência" ou "Pagamento de Boleto", subitraia o valor do saldo da conta.
  } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
    saldo -= valor;
    // Se o tipo de transação for qualquer outro, fora dos três definidos, exita um alerta.
  } else {
    alert("Tipo de Transação é inválido!");
    return;
  }

  // Exibir o conteúdo de texto do elemento 'saldo'.
  elementoSaldo.textContent = saldo;

  // Criação de objeto de transação.
  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  // Exibir as novas transações (objetos).
  console.log(novaTransacao);
  // Após todas essas validações e coletas, resete a página.
  elementoFormulario.reset();
});
