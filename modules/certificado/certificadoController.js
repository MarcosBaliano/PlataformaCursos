class CertificadoController {
    constructor() {
        this.key = 'certificados';
    }

    listarTodos() {
        const dados = localStorage.getItem(this.key);
        return dados ? JSON.parse(dados) : [];
    }

    // Verifica se o aluno terminou todas as aulas do curso
    podeGerarCertificado(idUsuario, idCurso) {
        const aulaCtrl = new AulaController();
        const moduloCtrl = new ModuloController();
        const progressoCtrl = new ProgressoAulaController();

        const modulos = moduloCtrl.listarPorCurso(idCurso);
        let totalAulas = 0;
        let aulasConcluidas = 0;

        modulos.forEach(m => {
            const aulas = aulaCtrl.listarPorModulo(m.ID_Modulo);
            totalAulas += aulas.length;
            aulas.forEach(a => {
                if (progressoCtrl.estaConcluida(idUsuario, a.ID_Aula)) {
                    aulasConcluidas++;
                }
            });
        });

        // Só libera se tiver pelo menos 1 aula e todas estiverem feitas
        return totalAulas > 0 && aulasConcluidas === totalAulas;
    }

    emitir(idUsuario, idCurso = null, idTrilha = null) {
        // Verifica se já existe um certificado para evitar duplicidade
        const certificados = this.listarTodos();
        const jaExiste = certificados.find(c => 
            c.ID_Usuario == idUsuario && 
            (idCurso ? c.ID_Curso == idCurso : c.ID_Trilha == idTrilha)
        );

        if (jaExiste) return jaExiste;

        // Cria e salva o novo certificado
        const novoCertificado = new Certificado(idUsuario, idCurso, idTrilha);
        certificados.push(novoCertificado);
        localStorage.setItem(this.key, JSON.stringify(certificados));
        
        return novoCertificado;
    }
}