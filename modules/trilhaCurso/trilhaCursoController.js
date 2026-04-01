class TrilhaCursoController {
    constructor() {
        this.key = 'trilhas_cursos';
        this.carregarDados();
    }

    carregarDados() {
        const dados = localStorage.getItem(this.key);
        this.relacoes = dados ? JSON.parse(dados) : [];
    }

    salvarDados() {
        localStorage.setItem(this.key, JSON.stringify(this.relacoes));
    }

    // Tabela 10: ID_Trilha (PK/FK), ID_Curso (PK/FK), Ordem
    vincular(idTrilha, idCurso, ordem) {
        this.carregarDados();
        
        const novaRelacao = {
            ID_Trilha: Number(idTrilha),
            ID_Curso: Number(idCurso),
            Ordem: Number(ordem)
        };

        // Regra de PK Composta: Remove se já existir essa combinação para evitar duplicados
        this.relacoes = this.relacoes.filter(r => 
            !(r.ID_Trilha === novaRelacao.ID_Trilha && r.ID_Curso === novaRelacao.ID_Curso)
        );

        this.relacoes.push(novaRelacao);
        this.salvarDados();
        return true;
    }

    // Retorna apenas os IDs dos cursos vinculados a uma trilha específica
    listarCursosPorTrilha(idTrilha) {
        this.carregarDados();
        return this.relacoes
            .filter(r => r.ID_Trilha === Number(idTrilha))
            .sort((a, b) => a.Ordem - b.Ordem);
    }

    // Remove um curso específico de uma trilha
    removerCursoDaTrilha(idTrilha, idCurso) {
        this.carregarDados();
        this.relacoes = this.relacoes.filter(r => 
            !(r.ID_Trilha === Number(idTrilha) && r.ID_Curso === Number(idCurso))
        );
        this.salvarDados();
    }
    
    listarPorTrilha(idTrilha) {
    const dados = localStorage.getItem('trilhas_cursos');
    const todos = dados ? JSON.parse(dados) : [];
    return todos.filter(tc => Number(tc.ID_Trilha) === Number(idTrilha));
}
}