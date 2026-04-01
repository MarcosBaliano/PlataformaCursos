class UsuarioController {
    constructor() {
        // Defini a chave como 'usuarios' para bater com o que fizemos no HTML
        this.key = 'usuarios'; 
    }

    // Função que transforma a senha em Hash (Base64 invertido)
    gerarHash(senha) {
        if (!senha) return "";
        return btoa(senha.split('').reverse().join('')); 
    }

    listarTodos() {
        const dados = localStorage.getItem(this.key);
        return dados ? JSON.parse(dados) : [];
    }

    // A ORDEM DOS PARÂMETROS: nome, email, senha, cargo
    cadastrar(nome, email, senha, cargo) {
        const usuarios = this.listarTodos();
        
        // Verifica se o email já existe para evitar duplicatas
        if (usuarios.find(u => u.Email === email)) {
            alert("Este e-mail já está cadastrado!");
            return null;
        }

        const novoUsuario = {
            ID_Usuario: Date.now(), // Gera um ID único baseado no timestamp
            NomeCompleto: nome,
            Email: email,
            Senha: this.gerarHash(senha), 
            Cargo: cargo || 'Aluno'
        };

        usuarios.push(novoUsuario);
        this.salvar(usuarios);
        return novoUsuario;
    }

    // MÉTODO PARA REMOVER USUÁRIO
    remover(id) {
        let usuarios = this.listarTodos();
        const totalAntes = usuarios.length;
        
        // Filtra a lista removendo o ID correspondente
        usuarios = usuarios.filter(u => u.ID_Usuario != id);

        if (usuarios.length < totalAntes) {
            this.salvar(usuarios);
            return true;
        }
        return false;
    }

    // Método auxiliar para centralizar a gravação no Storage
    salvar(lista) {
        localStorage.setItem(this.key, JSON.stringify(lista));
    }
}