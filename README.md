# Be the hero!

![Be the hero!](https://i.ibb.co/5Yg6HLG/Capa.png)

Be the hero! é uma aplicação desenvolvida durante a semana OmniStack 11 da RocketSeat que tem como objetivo o cadastro de casos para ongs que precisam de apoio financeiro.

Verifique o histórico de commits para mais detalhes das features e código utilizado, caso queria testar, siga os passos da sessão configuração e uso.

## BackEnd 

Backend desenvolvido em NODE.js utilizando principalmente a biblioteca express para lidar com as rotas da aplicação.


## Banco de Dados

##### Tecnologias utilizadas:

- **SQLITE**
- **KNEX**: Uma interface/biblioteca que permite trabalhar com banco de dados SQL utilizando uma linguagem universal para quase todos esses bancos, no caso desse projeto, JavaScript.

## FrontEnd

FrontEnd da aplicação desenvolvido com REACT.


## Configuração e uso

##### Backend

Instale as dependências e as dependências de desenvolvimento, inicialize o banco de dados e inicie o servidor.

```sh
$ cd backend
$ npm install -d
$ npx knex migrate:latest
$ npm start
```

##### Frontend

Instale as dependências e as dependências de desenvolvimento, e inicie o servidor.

```sh
$ cd web
$ npm install -d 
$ npm start
```
