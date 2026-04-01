class Modulo {
    constructor(id, idCurso, titulo, ordem) {
        this.ID_Modulo = id;
        this.ID_Curso = idCurso; // FK para Cursos
        this.Titulo = titulo;
        this.Ordem = ordem;
    }
}