import express, {Request, Response} from 'express';
import { AddRecadosController } from './controllers/add-recados';
import { CreateUserController } from './controllers/create-users';
import { GetAllUsersController } from './controllers/get-all-users';
import cors from 'cors'
import { UpdateRecadosController } from './controllers/update-recados-user';
import { DeleteRecadoByUserController } from './controllers/delete-recado-user';
import { checkUserExistsMiddleware } from './middlewares/checkUserExist';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/', (request: Request, response: Response) => {   
    return response.send('OK');
});

app.post("/users", new CreateUserController().create)
app.get("/users", new GetAllUsersController().getAll);
app.post("/user/:userID/recados", checkUserExistsMiddleware , new AddRecadosController().addRecados);
app.put("/user/:userID/recados/:id", checkUserExistsMiddleware , new UpdateRecadosController().updateRecados);
app.delete("/user/:userID/recados/:id", checkUserExistsMiddleware ,new DeleteRecadoByUserController().remove)


app.listen(8080, () => console.log("Servidor iniciado"));