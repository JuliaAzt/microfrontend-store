## Microfrontend Store 


![preview da tela](assets/artefacts.gif)


## 💻 Pré-requisitos

- **[Node.js](https://nodejs.org/)** instalado na versão `v18` ou superior.

## ✨ Instalação e execução

Antes de executar a instalação, siga as instruções abaixo:

1. Copiar o conteúdo do `.env.example` para o arquivo padrão `.env` no repositório de `products-display`

```sh
cp .env.example .env
```

2. Instalar as dependências:

```sh
npm install 
```

3. O script `start` roda install, buid e preview de cada um dos projetos

```sh
npm start 
```

### Portas

Para roda o projeto completo, é necessário a disponibilidade das seguintes portas:

| Comandos | Descrição                                                    |
| -------- | ------------------------------------------------------------ |
| `5000`   | Componente host da applicação, reponsável pela loja completa |
| `5001`   | Componente header - responsavel pelo carrinho e pela navbar  |
| `5002`   | Componente main - responsável pelo corpo da loja             |
| `5003`   | Componente Footer do projeto                                 |
| `3000`   | Biblioteca com tema e store do projeto                       |

> Todos os componentes dependem da execução do projeto shared

### Scripts 

Os scripts úteis incluem:

| Comandos        | Descrição                                                |
| --------------- | -------------------------------------------------------- |
| `start`         | Executa o build e preview da aplicação completa          |
| `build`         | Monta todos os módulos da aplicação                      |
| `test`          | Executa o inspetor de teste em um modo interativo        |
| `coverage`      | Executa os testes da aplicação com relatório de coverage |


### Variáveis de ambiente

O projeto utiliza as seguintes variáveis de ambiente:

| Variáveis                     | Descrição                       |
| ----------------------------- | ------------------------------- |
| `REACT_APP_BASE_URL`          | URL base do micro-frontend      |
| `REACT_APP_BASE_URL_API`      | URL da API dummy                |
| `VITE_BASE_URL_API`           | URL da API visível para testes  |


## 🔗 Referências

- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query/v3)
- [Vitest](https://vitest.dev/)

