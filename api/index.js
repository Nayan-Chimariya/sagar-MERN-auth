import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRouter from "./router/user-router.js";
import authRoutes from './router/auth-router.js'
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use('/api/auth',authRoutes)

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
