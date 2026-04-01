class Curso {
    constructor(id, titulo, descricao, idInstrutor, idCategoria, nivel, totalAulas, totalHoras) {
        this.ID_Curso = id;
        this.Titulo = titulo;
        this.Descricao = descricao;
        this.ID_Instrutor = idInstrutor; // FK para Usuarios
        this.ID_Categoria = idCategoria; // FK para Categorias
        this.Nivel = nivel; // Iniciante, Intermediário, Avançado
        this.DataPublicacao = new Date().toLocaleDateString('pt-BR');
        this.TotalAulas = totalAulas;
        this.TotalHoras = totalHoras;
    }
}