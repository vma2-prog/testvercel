const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const dirs = {
    root: path.join(__dirname, '..'),
    public: path.join(dirs.root, 'public')
};

const testfile = path.join(dirs.root, 'test.txt');

app.use('/public', express.static(dirs.public));

app.get('/lemmesee', function (req, res) {
    res.sendFile(testfile);
});

app.get('/change', function (req, res) {
    fs.writeFileSync(testfile, 'bbbbb')
})

app.listen(8080, () => console.log('Executando na porta 8080.'));