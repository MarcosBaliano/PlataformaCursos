class ModuloController {
    constructor() {
        this.modulos = JSON.parse(localStorage.getItem('modulos')) || [];
    }

    cadastrar(idCurso, titulo, ordem) {
        const novo = {
            ID_Modulo: this.modulos.length + 1,
            ID_Curso: Number(idCurso),
            Titulo: titulo,
            Ordem: Number(ordem)
        };
        this.modulos.push(novo);
        localStorage.setItem('modulos', JSON.stringify(this.modulos));
        return novo;
    }

    listarPorCurso(idCurso) {
        return this.modulos.filter(m => m.ID_Curso == idCurso).sort((a, b) => a.Ordem - b.Ordem);
    }
}