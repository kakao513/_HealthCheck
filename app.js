const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
	return res.status(201).json({ message: "pong" });
})

app.listen(3001);