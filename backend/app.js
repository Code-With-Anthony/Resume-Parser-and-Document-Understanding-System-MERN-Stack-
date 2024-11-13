import express from "express";
const app = express();
import postRoutes from "./routes/post.routes.js";
import cors from "cors";

//to accept the crud operation of json we need to write below code
app.use(express.json());
app.use(cors());

app.use("/api/post", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
