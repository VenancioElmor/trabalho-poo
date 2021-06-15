import express from 'express' // Importanto o express.
import './database'  // Importando o arquivo index.ts da pasta database. esse Arquivo index.ts executa as configurações do ormconfig. 
import { routes } from './routes'

const app = express()
app.use(express.json()) // Para que a aplicação aceite requisições no formato Json. 
app.use(routes) // Carregando as Rotas. 

app.listen(3333, () => {
    console.log('Servidor Rodando')
})