class Matricula {
    constructor(id, idUsuario, idCurso) {
        this.ID_Matricula = id;
        this.ID_Usuario = idUsuario;
        this.ID_Curso = idCurso;
        this.DataMatricula = new Date().toISOString();
        this.DataConclusao = null; // Tabela 6: Nulável
    }
}