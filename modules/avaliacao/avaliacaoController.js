class AvaliacaoController {
    constructor() {
        const salvos = localStorage.getItem('avaliacoes');
        this.avaliacoes = salvos ? JSON.parse(salvos) : [];
    }

    salvarNoStorage() {
        localStorage.setItem('avaliacoes', JSON.stringify(this.avaliacoes));
    }

    cadastrar(idUsuario, idCurso, nota, comentario) {
        // Verifica se o usuário já avaliou este curso (opcional)
        const jaAvaliou = this.avaliacoes.find(a => a.ID_Usuario == idUsuario && a.ID_Curso == idCurso);
        
        if (jaAvaliou) {
            // Se já existir, vamos apenas atualizar a nota e comentário
            jaAvaliou.Nota = Number(nota);
            jaAvaliou.Comentario = comentario;
            jaAvaliou.DataAvaliacao = new Date().toISOString();
        } else {
            const novaAvaliacao = new Avaliacao(idUsuario, idCurso, nota, comentario);
            this.avaliacoes.push(novaAvaliacao);
        }
        
        this.salvarNoStorage();
        return true;
    }

    listarPorCurso(idCurso) {
        const salvos = localStorage.getItem('avaliacoes');
        this.avaliacoes = salvos ? JSON.parse(salvos) : [];
        return this.avaliacoes.filter(a => a.ID_Curso == idCurso);
    }

    getMediaCurso(idCurso) {
        const lista = this.listarPorCurso(idCurso);
        if (lista.length === 0) return 0;
        const soma = lista.reduce((acc, curr) => acc + curr.Nota, 0);
        return (soma / lista.length).toFixed(1);
    }
}