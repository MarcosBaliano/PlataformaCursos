class AulaController {
    constructor() {
        const salvas = localStorage.getItem('aulas');
        this.aulas = salvas ? JSON.parse(salvas) : [];
    }

    salvarNoStorage() {
        localStorage.setItem('aulas', JSON.stringify(this.aulas));
    }

    cadastrar(idModulo, titulo, tipo, url, duracao, ordem) {
        const nova = {
            ID_Aula: this.aulas.length > 0 ? Math.max(...this.aulas.map(a => a.ID_Aula)) + 1 : 1,
            ID_Modulo: Number(idModulo),
            Titulo: titulo,
            TipoConteudo: tipo,
            URL_Conteudo: url,
            DuracaoMinutos: Number(duracao),
            Ordem: Number(ordem)
        };
        this.aulas.push(nova);
        this.salvarNoStorage();
        return nova;
    }

    listarPorModulo(idModulo) {
        return this.aulas.filter(a => a.ID_Modulo === Number(idModulo))
                         .sort((a, b) => a.Ordem - b.Ordem);
    }

    remover(id) {
        this.aulas = this.aulas.filter(a => a.ID_Aula !== id);
        this.salvarNoStorage();
    }
}