import express from "express";
import dotenv from "dotenv";
import { errorHandler, file } from "./Middleware/file.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT||5000;
app.use(express.urlencoded({extended: true}));


app.use(file)

app.get("/", (req, res) => {
  res.send(`Hello SuperUsers!`);
}); 


// your code here


 app.get("/multiply/:number", (req, res) => {
  const { number } = req.params;
  res.send(`${number * process.env.MULTIPLIER}`);
 });

app.use(errorHandler);
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
