class Certificado {
    constructor(idUsuario, idCurso = null, idTrilha = null) {
        this.ID_Certificado = Date.now(); // PK
        this.ID_Usuario = idUsuario;      // FK
        this.ID_Curso = idCurso;          // FK (pode ser null se for de trilha)
        this.ID_Trilha = idTrilha;        // FK (pode ser null se for de curso)
        this.CodigoVerificacao = this.gerarCodigo(); // Unique
        this.DataEmissao = new Date().toLocaleDateString('pt-BR');
    }

    gerarCodigo() {
        // Gera um código alfanumérico aleatório de 8 caracteres
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
}