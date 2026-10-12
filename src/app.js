const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.listen(8080, () => console.log('Executando na porta 8080.'));