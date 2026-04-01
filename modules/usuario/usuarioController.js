class UsuarioController {
    constructor() {
        this.key = 'usuarios_db';
    }

    // Função que transforma a senha em Hash
    gerarHash(senha) {
        return btoa(senha.split('').reverse().join('')); 
    }

    listarTodos() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    // A ORDEM DOS PARÂMETROS É VITAL: nome, email, senha, cargo
    cadastrar(nome, email, senha, cargo) {
        const usuarios = this.listarTodos();
        const novoUsuario = {
            ID_Usuario: Date.now(),
            NomeCompleto: nome,
            Email: email,
            Senha: this.gerarHash(senha), // <--- Aplica o Hash aqui
            Cargo: cargo
        };
        usuarios.push(novoUsuario);
        localStorage.setItem(this.key, JSON.stringify(usuarios));
        return novoUsuario;
    }
}