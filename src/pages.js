// const Database = require('./database/db')



function pageLanding(req, res){
    return res.render("index.html")
}
function pageLogin(req, res){
    return res.render("tela-login.html")
}
function pageCadastroUsuario(req, res){
    return res.render("tela-cadastro.html")
}
function pageMateriaProfessor(req, res){
    return res.render("page-materia-professores.html")
}
function pageMateriaEstudante(req, res){
    return res.render("page-materia-estudante.html")
}
function pageCadastroMateria(req, res){
    return res.render("page-cadastro-materia.html")
}
function pageProfessorAula(req, res){
    return res.render("page-professor-aula.html")
}
function pageMural(req, res){
    return res.render("page-mural.html")
}

function pageTopico(req, res){
    return res.render("page-topico.html")
}

function pageMensagem(req, res){
    return res.render("page-mensagem.html")
}

function areaEstudanteAulaDisponivel(req, res){
    return res.render("area-estudante-aula-disponivel.html")
}

function  PageEstudanteAdcionarMaterias(req, res){
    return res.render("page-estudante-adicionar-materias.html")
}





module.exports ={
    pageLanding,
    pageLogin, 
    pageCadastroUsuario,
    pageMateriaProfessor,
    pageMateriaEstudante,
    pageCadastroMateria,
    pageProfessorAula,
    pageMural,
    pageTopico,
    pageMensagem,
    areaEstudanteAulaDisponivel,
    PageEstudanteAdcionarMaterias

}
