class PlanoController {
    constructor() {
        this.key = 'fin_planos';
    }

    listarTodos() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    cadastrar(nome, descricao, preco, duracaoMeses) {
        const planos = this.listarTodos();
        const novoPlano = {
            ID_Plano: Date.now(),
            Nome: nome,
            Descricao: descricao,
            Preco: preco,
            DuracaoMeses: duracaoMeses
        };
        planos.push(novoPlano);
        localStorage.setItem(this.key, JSON.stringify(planos));
        return novoPlano;
    }
}