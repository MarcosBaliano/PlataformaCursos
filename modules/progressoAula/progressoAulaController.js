class ProgressoAulaController {
    constructor() {
        const salvos = localStorage.getItem('progresso_aulas');
        this.progresso = salvos ? JSON.parse(salvos) : [];
    }

    salvarNoStorage() {
        localStorage.setItem('progresso_aulas', JSON.stringify(this.progresso));
    }

    marcarComoConcluida(idUsuario, idAula) {
        const uId = Number(idUsuario);
        const aId = Number(idAula);

        const existe = this.progresso.find(p => p.ID_Usuario === uId && p.ID_Aula === aId);
        
        if (!existe) {
            this.progresso.push({ ID_Usuario: uId, ID_Aula: aId });
        } else {
            // CORREÇÃO AQUI: Filtra para REMOVER apenas a aula clicada
            this.progresso = this.progresso.filter(p => !(p.ID_Usuario === uId && p.ID_Aula === aId));
        }
        
        this.salvarNoStorage();
    }

    estaConcluida(idUsuario, idAula) {
        const uId = Number(idUsuario);
        const aId = Number(idAula);
        return this.progresso.some(p => p.ID_Usuario === uId && p.ID_Aula === aId);
    }
}