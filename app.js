const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarBanco = require('./config/db');
const contatoRoutes = require('./routes/contatoRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());
app.use(cors())

// Rotas principais
app.use('/api/usuarios', userRoutes); // Rotas públicas
app.use('/api/contatos', authMiddleware, contatoRoutes); // Rotas protegidas

// Conectar ao banco e iniciar o servidor
conectarBanco();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
