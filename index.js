const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});

app.get('/formulario', (req, res) => {
    res.sendFile('./static/formulario.html', {
        root: __dirname
    });
});


app.get('/contact', (req, res) => {
    res.sendFile('./static/contact.html', {
        root: __dirname
    });
});

// Manejo de error 404
app.use((req, res) => {
    res.status(404).send('No se encontró la página...');
});

app.listen(3000);
console.log(`Server on port ${3000}`);
