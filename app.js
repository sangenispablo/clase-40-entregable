require("dotenv").config();

const express = require("express");

const userRouter = require("./routes/user");
const connectMongo = require("./config/connectMongo");
const connectSqlite = require("./config/connectSqlite");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);

// conexion a Sqlite con Sequelize
// connectSqlite.sync({ force: true });
connectSqlite.sync();

// conectando a Mongo con Mongoose
const mongo = new connectMongo();
mongo.connect();

app.listen(PORT, () => console.log("Server up to", PORT));
