const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const servicos = require('./controllers/servico.controller');

const app = express();

require("./routes")(app);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(routes);

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo, aplicação funcionando :)." });
});

app.post("/", servicos.create);

//porta que ele vai escutar as requisições
const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});