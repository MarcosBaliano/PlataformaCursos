class ProgressoAula {
    constructor(idUsuario, idAula, status) {
        this.ID_Usuario = Number(idUsuario); // PK e FK
        this.ID_Aula = Number(idAula);       // PK e FK
        this.DataConclusao = new Date().toLocaleDateString('pt-BR');
        this.Status = status || 'Concluído';
    }
}