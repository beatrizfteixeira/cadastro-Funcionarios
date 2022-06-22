import mongoose from '@/database';

var schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    setorFuncionario:{
        type: String,
        required: true,
    },
    dataNasc:{
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const funcionario = mongoose.model('userdb', schema);

module.exports = funcionario;
