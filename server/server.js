const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("IVAS Backend Running");
});

app.post("/generate-trip", (req, res) => {
  res.json({ message: "AI response will come here" });
});

app.listen(5000, () => console.log("Server running on port 5000"));