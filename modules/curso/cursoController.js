class CursoController {
    constructor() {
        this.atualizarDados();
    }

    atualizarDados() {
        const salvos = localStorage.getItem('cursos');
        this.cursos = salvos ? JSON.parse(salvos) : [];
        this.proximoId = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.ID_Curso)) + 1 : 1;
    }

    salvarNoStorage() {
        localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }

    cadastrar(titulo, descricao, idInstrutor, idCategoria, nivel, aulas, horas) {
        this.atualizarDados();
        const novo = new Curso(this.proximoId++, titulo, descricao, idInstrutor, idCategoria, nivel, aulas, horas);
        this.cursos.push(novo);
        this.salvarNoStorage();
        return novo;
    }

    listarTodos() {
    const salvos = localStorage.getItem('cursos');
    this.cursos = salvos ? JSON.parse(salvos) : [];
    return this.cursos;
}
}