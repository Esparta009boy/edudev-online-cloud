const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "Online",
        message: "EduDev On-line - Plataforma em Nuvem com Alta Disponibilidade",
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date()
    });
});

app.get('/health', (req, res) => {
    res.status(200).send("OK - Health Check Aprovado");
});

app.listen(PORT, () => {
    console.log(`Servidor EduDev On-line rodando na porta ${PORT}`);
});