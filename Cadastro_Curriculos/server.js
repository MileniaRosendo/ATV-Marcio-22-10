const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const curriculosRouter = require('./routers/curriculos');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('/api', curriculosRouter);
app.get('/', (req, res) => {
  res.redirect('/api/curriculos');
});
app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
