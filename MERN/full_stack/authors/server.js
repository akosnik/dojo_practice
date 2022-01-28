const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./server/config/config");


require("./server/routes/author.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
