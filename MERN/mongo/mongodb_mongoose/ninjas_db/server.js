const express = require("express");
const app = express();
const port = 8000;
require("./server/config/config");
require("./server/routes/ninja.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
