<div align="center">

# 🚀 Migração e Modernização Arquitetural em Nuvem - EduDev On-line

[![Docker](https://img.shields.io/badge/Docker-24.0+-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![GitHub Codespaces](https://img.shields.io/badge/GitHub_Codespaces-Cloud-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/features/codespaces)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>Estudo de caso prático focado na conteinerização, modernização e implantação em nuvem para a plataforma educacional EduDev On-line.</b>
</p>

[🌐 Acessar Aplicação On-line](https://Esparta009boy.github.io/edudev-online-cloud/) • [💻 Abrir no Codespaces](https://codespaces.new/Esparta009boy/edudev-online-cloud)

</div>

---

## 📌 Sobre o Projeto

Este projeto consiste na resolução de um estudo de caso acadêmico voltado para a **migração de infraestrutura legada e modernização arquitetural** da aplicação corporativa **EduDev On-line**. 

O objetivo principal foi transformar uma aplicação monolítica em um ambiente altamente escalável, auditável e padronizado, utilizando práticas modernas de **DevOps**, **Conteinerização** e **Esteiras de Integração Contínua (CI/CD)**.

### 🎯 Problema Negocial Solucionado
A empresa apresentava desafios de inconsistência entre ambientes de desenvolvimento e produção, alto tempo de deploy manual e gargalos de infraestrutura. A solução implementada garante isolamento de dependências, automação de build/deploy e ambiente padronizado em nuvem.

---

## 🏗️ Arquitetura da Solução

```text
[ Desenvolvedor ] 
       │
       ▼ (Push / PR)
[ GitHub Repository ]
       │
       ├──► [ GitHub Actions ] (Esteira CI/CD Automatizada)
       │           │
       │           └──► Build do Container / Testes / Deploy
       │
       └──► [ GitHub Codespaces ] (Ambiente Padronizado Cloud-Native)
                   │
                   └──► [ Docker Engine / Container App ]
