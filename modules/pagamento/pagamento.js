class Pagamento {
    constructor(idAssinatura, valor, metodo, gatewayId) {
        this.ID_Pagamento = "PAG-" + Date.now();
        this.ID_Assinatura = idAssinatura;
        this.ValorPago = valor;
        this.DataPagamento = new Date().toLocaleDateString('pt-BR');
        this.MetodoPagamento = metodo;
        this.Id_Transacao_Gateway = gatewayId;
    }
}