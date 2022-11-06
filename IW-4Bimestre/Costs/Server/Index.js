
// Dependências

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

// Conexão com o Banco de Dados: 

const DataBase = mysql.createConnection({

    user: "root",
    host: "localhost",
    password: "",
    database: "costs",

});

// Criação de Uma nova Tabela: 




app.listen("3001", () => {
    
    console.log("The Server is Running on PORT 3001");

});