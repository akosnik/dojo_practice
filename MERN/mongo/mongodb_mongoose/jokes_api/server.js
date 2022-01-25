const express = require("express");
const app = express();
require("./server/config/config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
