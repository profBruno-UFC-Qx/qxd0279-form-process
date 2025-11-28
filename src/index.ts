

import express from "express";
import { engine } from "express-handlebars"
import { fileURLToPath } from "url";
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs')
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index', {
    title:'Página inicial'
  })
})


app.get('/formulario.html', (req, res) => {
  res.render('formulario', {
    title: 'Formulario de cadastro'
  })
})

app.post('/processar', (req, res) => {
  const { login, password } = req.body
  if(login && password) {
  
    res.render('concluido', {
      title: 'Cadastro concluído',
      email: login
    })
  } else {
    res.render('formulario', {
      title: 'Dados inválidos',
      error: true
    })
  }

})


app.listen(8083, () => {
  console.log("The server is running")
})