const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let lyrics = [
  { content: "Carry on my wayward son", author: "Kansas" },
  { content: "Whoomp there it is", author: "Tag Team" },
  {
    content: "I want something else to get me through this",
    author: "Third Eye Blind",
  },
];

app.get("/api/hello", (req, res) => {
  res.json({ msg: "Hello express!" });
});

app.get("/api/lyrics", (req, res) => {
  res.json({ count: lyrics.length, lyrics: lyrics });
});

//get one quote by "id"
app.get("/api/lyrics/:idx", (req, res) => {
  res.json({ result: lyrics[req.params.idx] });
});

app.post("/api/lyrics/create", (req, res) => {
  console.log("req.body", req.body);
  lyrics.push(req.body);
  res.json({ msg: "success", results: lyrics });
});

app.put("/api/lyrics/:idx/update", (req, res) => {
  lyrics[req.params.idx] = req.body;
  res.json({ msg: "success", results: lyrics });
});

app.listen(port, () => console.log(`listening on port ${port}`));
