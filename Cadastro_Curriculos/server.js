const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const curriculosRouter = require('./routers/curriculos');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar corpo da solicitação JSON
app.use(bodyParser.json());

// Middleware CORS para permitir solicitações de diferentes origens (ajuste conforme necessário)
app.use(cors());

// Use as rotas definidas em curriculosRouter
app.use('/api', curriculosRouter);

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
