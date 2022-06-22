import express, { Router } from 'express';
import bodyParser from 'body-parser';
import { controller }  from "@/app/controllers";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const router = new Router();

// Acesso à documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/funcionario', controller);

router.get('/v1', (req, res)=> {
    return res.status(200).send({message: "hello"});
});

console.log('servidor local http://localhost:', port);

app.listen(port);