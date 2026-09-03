const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>EduDev On-line | Plataforma de Ensino</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                body {
                    background-color: #f4f6f9;
                    color: #333;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                header {
                    background: linear-gradient(135deg, #1e3c72, #2a5298);
                    color: white;
                    padding: 2rem 1rem;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                header h1 {
                    font-size: 2.2rem;
                    margin-bottom: 0.5rem;
                }
                header p {
                    font-size: 1.1rem;
                    opacity: 0.9;
                }
                main {
                    flex: 1;
                    max-width: 900px;
                    margin: 2rem auto;
                    padding: 0 1rem;
                    width: 100%;
                }
                .card {
                    background: white;
                    border-radius: 10px;
                    padding: 2rem;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                .status-badge {
                    display: inline-block;
                    background-color: #28a745;
                    color: white;
                    padding: 0.4rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                .info-box {
                    background: #f8f9fa;
                    border-left: 4px solid #2a5298;
                    padding: 1rem;
                    border-radius: 4px;
                }
                .info-box h3 {
                    font-size: 0.9rem;
                    color: #6c757d;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }
                .info-box p {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e3c72;
                }
                footer {
                    background: #111827;
                    color: #9ca3af;
                    text-align: center;
                    padding: 1.5rem;
                    font-size: 0.9rem;
                    margin-top: auto;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>EduDev On-line</h1>
                <p>Plataforma de Ensino Modernizada em Nuvem</p>
            </header>
            <main>
                <div class="card">
                    <span class="status-badge">● Sistema Operacional</span>
                    <h2>Status da Infraestrutura</h2>
                    <p style="margin-top: 0.5rem; color: #555;">Aplicação containerizada em Docker e implantada via pipeline automatizado de CI/CD com alta disponibilidade.</p>
                    
                    <div class="info-grid">
                        <div class="info-box">
                            <h3>Ambiente</h3>
                            <p>${process.env.NODE_ENV || 'Produção / Nuvem'}</p>
                        </div>
                        <div class="info-box">
                            <h3>Arquitetura</h3>
                            <p>Docker Container (PaaS)</p>
                        </div>
                        <div class="info-box">
                            <h3>Última Checagem</h3>
                            <p>${new Date().toLocaleTimeString('pt-BR')} UTC</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>EduDev On-line &copy; 2026 - Projeto Prático de Arquitetura em Nuvem</p>
            </footer>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).send("OK - Health Check Aprovado");
});

app.listen(PORT, () => {
    console.log(`Servidor EduDev On-line rodando na porta ${PORT}`);
});