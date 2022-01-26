const mongoose = require("mongoose");

// const cluster_name = "productDB";
const db_name = "productDB";

mongoose
  .connect(
    `mongodb+srv://root:root@productdb.9612b.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
