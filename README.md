# Desafio Mestres da Web
A aplicação tem as funcionalidades de criar usuário e autenticá-lo; todas as operações CRUD com os produtos; a criação de uma tabela de estoque que se relaciona com 
os produtos de forma one-to-many. Cada estoque possui os campos de quantidade e tamanho. Ao deletar um produto, as tabelas de estoque relacionadas a este produto também serão 
deletadas.

## Tecnologias utilizadas:
<ul>
<li>Node.js</li>
<li>Express</li>
<li>Typescript</li>
<li>MySQL</li>
<li>TypeORM</li>
<li>BCryptJS</li>
<li>JWT</li>
</ul>

## Instalação
1. Clone o repositório para o seu computador
2. Crie uma database com o nome mestres-da-web-desafio;
3. Configure os dados do banco no arquivo ormconfig.json;
4. Instale as dependências com o comando:
```bash
yarn install
```
ou
```bash
npm install
```
5. Execute as migrations com o comando:
```bash
yarn typeorm migration:run
```
6. Inicie a aplicação com o comando:
```bash
yarn start
```
7. Importe o arquivo insomnia_export.json para o seu Insomnia;

## Como utilizar:
As migrations irão criar um usuário administrador automaticamente com as seguintes credenciais:
```bash
{
	"name": "Admin",
	"email": "admin@adm.com",
	"password" : "admin"
}
```
- **POST** /users/signup : Cria um novo usuário. 
- **POST** /users/login : Envie as credenciais do usuário para esta rota. Ela irá gerar o token JWT que deverá ser utilizado em todas as demais rotas.
- **POST**/products : Cria um produto. Envie os dados do produto a ser adicionado para esta rota. 
- **GET** /products : Lista os produtos cadastrados.
- **PUT** /products/:id : Edita um produto. Deverá indicar a ID do produto a ser editado na URL.
- **DELETE** /products/:id : Deleta um produto. Deverá indicar a ID do produto a ser deletado na URL.
- **POST** /stock/:id : Cria um estoque. Deverá indicar a ID do produto do qual será feito o estoque na URL. 
- **GET** /stock/:id : Lista os estoques de um determinado produto. Deverá indicar a ID do produto na URL.
