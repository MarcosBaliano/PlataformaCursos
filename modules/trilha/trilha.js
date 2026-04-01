class Trilha {
    constructor(titulo, descricao, idCategoria) {
        this.ID_Trilha = Date.now();
        this.Titulo = titulo;
        this.Descricao = descricao;
        this.ID_Categoria = Number(idCategoria);
    }
}