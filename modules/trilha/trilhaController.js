class TrilhaController {
    constructor() {
        this.key = 'trilhas'; // Esta é a "caixa" onde as trilhas ficam guardadas
    }

    // 1. Método para buscar todas as trilhas (O que o seu modal usa)
    listarTodas() {
        const dados = localStorage.getItem(this.key);
        return dados ? JSON.parse(dados) : [];
    }

    // 2. Método para cadastrar uma nova trilha
    cadastrar(titulo, descricao) {
        if (!titulo) {
            alert("O título da trilha é obrigatório!");
            return false;
        }

        const trilhas = this.listarTodas();
        const novaTrilha = {
            ID_Trilha: Date.now(), // Gera um ID único baseado no tempo
            Titulo: titulo,
            Descricao: descricao
        };

        trilhas.push(novaTrilha);
        localStorage.setItem(this.key, JSON.stringify(trilhas));
        return true;
    }
}