import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/funcionarios-dados', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

export default mongoose;
