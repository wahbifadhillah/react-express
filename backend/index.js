const express = require("express");
const PORT = 8000;
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
// const exampleRoutes = require("./routes/exampleRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/example", exampleRoutes);
// app.use("/", (req, res) => res.status(200).send("wakwaw"));

server.listen(PORT, () => {
	console.log(`Backend API is listening on port ${PORT}`);
});
