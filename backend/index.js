import express from 'express';
import cors from 'cors';
const app = express();
import eventosRoutes from './routes/events.js';

app.use(cors());
app.use(express.json());
app.use('/api', eventosRoutes);

app.listen(3001, () =>{
    console.log('Servidor rodando em http://localhost:3001');
});
