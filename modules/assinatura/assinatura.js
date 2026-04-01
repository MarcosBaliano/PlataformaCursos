class Assinatura {
    constructor(idUsuario, idPlano, meses) {
        this.ID_Assinatura = "ASS-" + Date.now();
        this.ID_Usuario = idUsuario;
        this.ID_Plano = idPlano;
        this.DataInicio = new Date().toLocaleDateString('pt-BR');
        
        // Calcula a DataFim somando os meses do plano
        let fim = new Date();
        fim.setMonth(fim.getMonth() + parseInt(meses));
        this.DataFim = fim.toLocaleDateString('pt-BR');
    }
}