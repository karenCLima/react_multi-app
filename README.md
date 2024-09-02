# Multi-App
Projeto do curso de Desenvolvimento Full Stack Jr., oferecido pela parceria entre [+praTI](https://www.maisprati.com.br/) e [Codifica](https://www.codificaedu.com.br/).

### Objetivo
O objetivo deste projeto é aprimorar o código do front-end do repositório https://github.com/jhyago/maisPraTi-2024-01/tree/main/3-reactjs/atv5/multi-app.

Vocês deverão aplicar melhorias em várias áreas, incluindo arquitetura, autenticação, trabalho com JSON e qualidade de código. Este projeto permitirá que vocês pratiquem e desenvolvam habilidades essenciais em desenvolvimento front-end.

### Requisitos mínimos

Arquitetura:

- Modularização: Reestruture o código em módulos distintos para melhorar a manutenção e a legibilidade. Separe componentes, páginas, serviços e utilitários.


- Tratamento de Erros: Melhore o tratamento de erros, garantindo que o aplicativo lide com erros de forma clara e amigável para o usuário.

Autenticação:

- JWT (JSON Web Tokens): Implemente JWT para autenticação. Proteja rotas sensíveis no front-end e implemente mecanismos básicos de renovação de tokens.

- Validação de Dados: Valide os dados JSON recebidos e enviados para garantir que estejam corretos e completos.

- Interação com API: Melhore a interação com APIs, garantindo que as requisições sejam eficientes e seguras.

Qualidade de Código e Melhores Práticas:
- Revisões de Código: Estabeleça um processo de revisão de código para garantir qualidade e consistência.

- Documentação: Melhore a documentação do código utilizando comentários claros e mantendo um README detalhado.

- Desempenho e Escalabilidade

## Funcionalidades

- Cadastro: página de cadastro de usuário.
- Login: página de login de usuário.
- Movie Search Engine: app para procurar filmes. Retorna nome, ano  e recomendação.
- Language Translator: app para traduzir frases em diferentes línguas.
- QR Code Generator: app que gera QR code dependendo da frase ou link colocado.
- IP Address Finder: app que retorna informações sobre endereço de IP.
- Quizz App: app com quizzes e contagem de pontos.
- To Do app: app para anotar tarefas.

## Tecnologias utilizadas
- React
- Vite
- axios
- qrcoe.react
- react icons
- react select
- styled-components
- http-proxy-middleware
- react-responsive-carousel
- uuid


## Como instalar e rodar o projeto
1. **Clone o repositório**: Use o comando `git clone` para clonar o repositório para o seu computador. Por exemplo:

```bash
   git clone https://github.com/karenCLima/react_multi-app.git
``` 

2. ***Instale as dependências***: Entre no diretório do projeto clonado e instale as dependências do Node.js usando npm (Node Package Manager). Use o comando:
```bash
cd react-multi-app
npm install
```
Isso instalará todas as dependências listadas no arquivo package.json.

3. ***Crie um arquivo .env***: Para as aplicações funcionarem crie um arquivo na raiz do projeto com variáveis de ambiente preenchendo com os seguintes elementos:
```
VITE_IPINFO_API_TOKEN=<YOUR_IPINFO_API_TOKEN>  
VITE_CLIENT_ID_AUTH=<YOUR_CLIENT_ID_AUTH0>  
VITE_CLIENT_SECRET_AUTH=<YOUR_CLIENT_SECRET_AUTH_0>
``` 

4. ***Rode o projeto***: Execute os seguintes comandos:
```bash
npm run dev
```


## Observações

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
