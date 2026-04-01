class AssinaturaController {
    constructor() {
        this.key = 'fin_assinaturas';
    }

    listarTodas() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    vincular(idUsuario, idPlano, meses) {
        const assinaturas = this.listarTodas();
        
        let dataFim = new Date();
        dataFim.setMonth(dataFim.getMonth() + parseInt(meses));

        const novaAssinatura = {
            ID_Assinatura: "ASS-" + Date.now(),
            ID_Usuario: idUsuario,
            ID_Plano: idPlano,
            DataInicio: new Date().toLocaleDateString('pt-BR'),
            DataFim: dataFim.toLocaleDateString('pt-BR')
        };

        assinaturas.push(novaAssinatura);
        localStorage.setItem(this.key, JSON.stringify(assinaturas));
        return novaAssinatura;
    }
    verificarAcessoAtivo(idUsuario) {
    const assinaturas = this.listarTodas();
    const hoje = new Date();
    
    // Procura alguma assinatura do aluno onde a data de fim seja maior ou igual a hoje
    return assinaturas.some(a => {
        if (Number(a.ID_Usuario) !== Number(idUsuario)) return false;

        // Converte a data salva "DD/MM/AAAA" para formato de objeto Date
        const [d, m, y] = a.DataFim.split('/');
        const dataFim = new Date(y, m - 1, d);

        return dataFim >= hoje;
    });
}
}