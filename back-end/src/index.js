const express = require('express');
const routerTask = require('./routes/task');

const app = express();

app.use(express.json());

app.use("/", routerTask);

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});
