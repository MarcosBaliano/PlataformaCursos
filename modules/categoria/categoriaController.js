class CategoriaController {
    constructor() {
        // Tenta carregar do LocalStorage ou usa o padrão se estiver vazio
        const salvos = localStorage.getItem('categorias');
        this.categorias = salvos ? JSON.parse(salvos) : [
            new Categoria(1, "Programação", "Desenvolvimento de software"),
            new Categoria(2, "Design", "Interface e experiência do usuário")
        ];
        
        this.proximoId = this.categorias.length > 0 
            ? Math.max(...this.categorias.map(c => c.ID_Categoria)) + 1 
            : 1;
    }

    salvarNoStorage() {
        localStorage.setItem('categorias', JSON.stringify(this.categorias));
    }

    cadastrar(nome, descricao) {
        const existe = this.categorias.find(c => c.Nome.toLowerCase() === nome.toLowerCase());
        if (existe) {
            alert("Erro: Categoria já existe!");
            return null;
        }
        const nova = new Categoria(this.proximoId++, nome, descricao);
        this.categorias.push(nova);
        this.salvarNoStorage(); // Salva sempre que cadastrar
        return nova;
    }

    listarTodas() {
        return this.categorias;
    }
}