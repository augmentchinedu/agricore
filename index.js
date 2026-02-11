import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello from Agricore!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
