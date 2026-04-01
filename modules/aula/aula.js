class Aula {
    constructor(id, idModulo, titulo, tipo, url, duracao, ordem) {
        this.ID_Aula = id;
        this.ID_Modulo = idModulo; // FK para Modulos
        this.Titulo = titulo;
        this.TipoConteudo = tipo; // Vídeo, Texto, Quiz
        this.URL_Conteudo = url;
        this.DuracaoMinutos = duracao;
        this.Ordem = ordem;
    }
}