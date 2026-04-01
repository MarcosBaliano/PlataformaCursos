class PagamentoController {
    constructor() {
        this.key = 'fin_pagamentos';
    }

    listarTodos() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    registrar(idAssinatura, valor, metodo, gatewayId) {
        const pagamentos = this.listarTodos();
        
        const novoPagamento = {
            ID_Pagamento: "PAG-" + Date.now(),
            ID_Assinatura: idAssinatura,
            ValorPago: valor,
            DataPagamento: new Date().toLocaleDateString('pt-BR'),
            MetodoPagamento: metodo,
            Id_Transacao_Gateway: gatewayId
        };

        pagamentos.push(novoPagamento);
        localStorage.setItem(this.key, JSON.stringify(pagamentos));
        return novoPagamento;
    }
}