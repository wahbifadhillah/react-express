const express = require("express");
const PORT = 8000;
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/article", articleRoutes);
// app.use("/", (req, res) => res.status(200).send("wakwaw"));

server.listen(PORT, () => {
	console.log(`Backend API is listening on port ${PORT}`);
});
