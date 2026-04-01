class MatriculaController {
    constructor() {
        const salvas = localStorage.getItem('matriculas');
        this.matriculas = salvas ? JSON.parse(salvas) : [];
    }

    salvarNoStorage() {
        localStorage.setItem('matriculas', JSON.stringify(this.matriculas));
    }

    // Tabela 6: FK de Usuario e FK de Curso
    cadastrar(idUsuario, idCurso) {
        const nova = {
            ID_Matricula: this.matriculas.length > 0 
                ? Math.max(...this.matriculas.map(m => m.ID_Matricula)) + 1 
                : 1,
            ID_Usuario: Number(idUsuario),
            ID_Curso: Number(idCurso),
            DataMatricula: new Date().toLocaleDateString('pt-BR'),
            DataConclusao: null
        };

        this.matriculas.push(nova);
        this.salvarNoStorage();
        return nova;
    }

    listarTodas() {
        return this.matriculas;
    }

    listarPorCurso(idCurso) {
    const dados = localStorage.getItem('matriculas');
    const todos = dados ? JSON.parse(dados) : [];
    return todos.filter(m => Number(m.ID_Curso) === Number(idCurso));
}

    // Filtra quantas matrículas aquele usuário tem
    contarPorUsuario(idUsuario) {
        return this.matriculas.filter(m => m.ID_Usuario === idUsuario).length;
    }

    // Adicione este método abaixo do contarPorUsuario
    listarPorUsuario(idUsuario) {
        // Garante que a lista esteja atualizada com o que está no localStorage
        const salvas = localStorage.getItem('matriculas');
        this.matriculas = salvas ? JSON.parse(salvas) : [];
        
        // Filtra comparando como Number para evitar erro de string vs número
        return this.matriculas.filter(m => Number(m.ID_Usuario) === Number(idUsuario));
    }
}