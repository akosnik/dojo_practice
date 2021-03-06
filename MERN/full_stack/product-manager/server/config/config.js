const mongoose = require("mongoose");

// const cluster_name = "productDB";
const db_name = "productDB";

mongoose
  .connect(
    `mongodb+srv://root:root@cluster0.sko2t.mongodb.net/${db_name}?retryWrites=true&w=majority`,
     
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
