class Avaliacao {
    constructor(idUsuario, idCurso, nota, comentario = "") {
        this.ID_Avaliacao = Date.now(); // Gera um ID único simples
        this.ID_Usuario = Number(idUsuario);
        this.ID_Curso = Number(idCurso);
        this.Nota = Number(nota);
        this.Comentario = comentario;
        this.DataAvaliacao = new Date().toISOString();
    }
}