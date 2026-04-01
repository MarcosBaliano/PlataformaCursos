class TrilhaController {
    constructor() {
        this.key = 'trilhas'; // Mesma chave usada no Dashboard (getCount('trilhas'))
    }

    listarTodas() {
        const dados = localStorage.getItem(this.key);
        return dados ? JSON.parse(dados) : [];
    }

    cadastrar(titulo, descricao) {
        if (!titulo) {
            alert("O título é obrigatório!");
            return null;
        }

        const trilhas = this.listarTodas();
        const novaTrilha = {
            ID_Trilha: Date.now(),
            Titulo: titulo,
            Descricao: descricao,
            Cursos: [] 
        };

        trilhas.push(novaTrilha);
        this.salvar(trilhas);
        return novaTrilha;
    }

    remover(id) {
        let trilhas = this.listarTodas();
        trilhas = trilhas.filter(t => t.ID_Trilha != id);
        this.salvar(trilhas);
    }

    salvar(lista) {
        localStorage.setItem(this.key, JSON.stringify(lista));
    }
}