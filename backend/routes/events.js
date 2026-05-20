import express from 'express';
import db from '../db.js';

const router = express.Router();

//LISTAR TODOS OS EVENTOS
router.get('/eventos', (req, res) => {
    db.query('SELECT * FROM eventos_bd', (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
    });
});

// CRIAR NOVO EVENTO
router.post('/evento', (req, res) => {
    const { titulo, descricao, local, data_evento } = req.body;

    const query = 'INSERT INTO eventos_bd(titulo, descricao, local, data_evento) VALUES(?,?,?,?)';
    db.query(query, [titulo, descricao, local, data_evento], (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: data.insertId, titulo, descricao, local, data_evento });
    });
});

export default router;
