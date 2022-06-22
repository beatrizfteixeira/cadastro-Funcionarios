import { Router } from 'express';
import funcionario from '@/app/schemas/funcionario'

const router = new Router();

router.post('/', (req, res) => { // Cadastrar novo funcionario
    const {  nome, cpf, email, setorFuncionario, dataNasc} = req.body;
    funcionario.create({nome, email, cpf, setorFuncionario, dataNasc })
    .then(funcionario => {
        res.status(200).send(funcionario);
    })
    .catch(error=> {
        console.error('Erro ao criar novo funcionário', error)
        res
            .status(400)
            .send({
                error:
                    'Não foi possível cadastrar novo funcionário.'

            });
    });
    
});

router.get('/', (req, res) => {
    funcionario.find()
        .then(data =>{
            const func = data.map(funcionario =>{
                return { nome: funcionario.nome, cpf: funcionario.cpf, 
                email: funcionario.email, setorFuncionario: funcionario.setorFuncionario, dataNasc: funcionario.dataNasc}
            });
            res.status(200).send(func);
        })
        .catch(error => {
            console.error('erro ao recuperar dados.');
            res.status(400).send({
                error: 'não foi possible pegar dados.'
            });
        });

});

router.get('/id/:FuncionarioId', (req, res) => {
    funcionario.findById(req.params.FuncionarioId)
        .then(funcionario =>{
            res.send(funcionario);
        })
        .catch(error => {
            console.error('Erro ao recuperar dados de funcionário.', error);
            res.status(400).send({
                error: 'Erro ao recuperar dados de funcionário.'
            });
        });

});

router.put('/id/:FuncionarioId', (req, res) => {
    const { nome, cpf, email} = req.body;

    funcionario.findByIdAndUpdate(req.params.FuncionarioId, 
        {nome, cpf, email}, {new: true})
    .then(funcionario =>{
        res.status(200).send(funcionario);
    })
    .catch(error => {
        console.error('Erro ao atualizar dados.', error);
        res.status(400).send({
            error:
                'Não foi possível atualizar dados.',
        });
    });
});

router.delete('/:FuncionarioId', (req, res) => {
    funcionario.findByIdAndRemove(req.params.FuncionarioId)
        .then(() => {
            res.send({message: 'Funcionário removido com sucesso'});
        })
        .catch(error => {
            console.error('Erro ao remover funcionario do BD', error)
            res.status(400).send({message: 'Erro ao excluir'})
        })
});

export default router;