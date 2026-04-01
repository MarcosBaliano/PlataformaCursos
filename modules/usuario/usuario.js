class Usuario {
    constructor(id, nomeCompleto, email, cargo) {
        this.ID_Usuario = id;
        this.NomeCompleto = nomeCompleto; // Nome exato da Tabela 1
        this.Email = email;
        this.Cargo = cargo;
        this.DataCadastro = new Date().toLocaleDateString('pt-BR');
    }
}