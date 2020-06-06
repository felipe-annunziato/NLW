import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors())
app.use(express.json());
 //Funcionalidade a mais no express

app.use(errors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);


//Rota: Enderço completo da requisição
//Recurso: qual entidade estamos acessando no sistema

//Parametros:
//Request Param: Parametros que vem na própria rota que identificam um recurso
//Query Param: Parametros geralmente opcionais para filtros, paginação  
//Request Body: Parâmetros para criação/atualização de informações