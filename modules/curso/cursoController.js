class CursoController {
    constructor() {
        this.atualizarDados();
    }

    // Busca os dados mais recentes do LocalStorage
    atualizarDados() {
        const salvos = localStorage.getItem('cursos');
        this.cursos = salvos ? JSON.parse(salvos) : [];
        // Calcula o próximo ID baseado no maior ID existente + 1
        this.proximoId = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.ID_Curso)) + 1 : 1;
    }

    // Salva a lista atual no LocalStorage
    salvarNoStorage() {
        localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }

    cadastrar(titulo, descricao, idInstrutor, idCategoria, nivel, aulas, horas) {
        this.atualizarDados(); // Garante que temos a lista e o ID corretos
        
        const novo = {
            ID_Curso: this.proximoId,
            Titulo: titulo,
            Descricao: descricao,
            ID_Instrutor: idInstrutor,
            ID_Categoria: idCategoria,
            Nivel: nivel,
            TotalAulas: aulas,
            CargaHoraria: horas
        };

        this.cursos.push(novo);
        this.salvarNoStorage();
        return novo;
    }

    listarTodos() {
        this.atualizarDados();
        return this.cursos;
    }

    listarPorCategoria(idCategoria) {
        this.atualizarDados();
        return this.cursos.filter(c => c.ID_Categoria == idCategoria);
    }

    // O MÉTODO QUE ESTAVA FALTANDO:
    remover(id) {
        this.atualizarDados();
        
        // Filtra a lista mantendo apenas os cursos que NÃO possuem o ID informado
        const totalAntes = this.cursos.length;
        this.cursos = this.cursos.filter(c => c.ID_Curso != id);
        
        if (this.cursos.length < totalAntes) {
            this.salvarNoStorage();
            return true; // Sucesso na exclusão
        }
        return false; // Não encontrou o ID
    }
}