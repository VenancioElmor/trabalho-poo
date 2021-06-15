// A rota chama o controller
import { ResponsaveisController } from './controllers/ResponsaveisController'
import {Router} from 'express' 
import { Responsavel } from './entities/Responsavel';
import { DespesasController } from './controllers/DespesasController';


const routes = Router();

const responsaveisController = new ResponsaveisController() // Instanciando a classe ResponsaveisController do Controller. 
const despesasController = new DespesasController()

// Rotas de Responsáveis
// Rota responsável por cadastrar o nome dos responsáveis pelos gastos. 
routes.post('/responsavel', responsaveisController.create)
// Rota para listar todos os responsáveis
routes.get('/responsavel', responsaveisController.index)

// Rotas de Despesas
// Rota para criar despesas 
routes.post('/despesas', despesasController.create)
// Rota para listar as despesas.
routes.get('/despesas', despesasController.index)
// Rota para listar as despesas pelo ID
routes.get('/despesas/:id', despesasController.show)
// Rota para Deletar pelo ID
routes.delete('/despesas/:id', despesasController.delete)
// Rota para Alterar um Gasto pelo ID 
routes.put('/despesas/:id', despesasController.update)



export {routes}