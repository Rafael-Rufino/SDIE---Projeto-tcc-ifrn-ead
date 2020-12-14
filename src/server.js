
//servidor
const express = require ('express')
const server = express()


const {
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

} = require ('./pages')


// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})


// Inicio e configurações do servidor
server
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
// configurando arquivos estáticos (styles, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get('/', pageLanding)
.get('/tela-login', pageLogin)
.get('/tela-cadastro',pageCadastroUsuario)
.get('/page-materia-estudante', pageMateriaEstudante)
.get('/page-materia-professores', pageMateriaProfessor)
.get('/page-cadastro-materia', pageCadastroMateria)
.get('/page-professor-aula', pageProfessorAula)
.get('/page-mural', pageMural)
.get('/page-topico', pageTopico)
.get('/page-mensagem',  pageMensagem)
.get('/page-estudante-adicionar-materias',PageEstudanteAdcionarMaterias)
.get('/area-estudante-aula-disponivel',  areaEstudanteAulaDisponivel)



// ligar o servidor
server.listen(5500, () => {
    console.log("Server started");
  });



