class TrilhaCurso {
    constructor(idTrilha, idCurso, ordem) {
        this.ID_Trilha = Number(idTrilha); // FK para Trilhas
        this.ID_Curso = Number(idCurso);   // FK para Cursos
        this.Ordem = Number(ordem);         // Para definir a sequência
    }
}

 