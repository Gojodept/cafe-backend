// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import userRouter from "./routes/userRoute.js"; //userRouter = Router what ever is being exported from userRouter Is imported in userRouter can also write Router in pace of userRouter that will also work fine
// const app = express();
// app.use(express.json());
// app.use(cors());
// dotenv.config();
// const dbuser = encodeURIComponent(process.env.DBUSER);
// const dbpass = encodeURIComponent(process.env.DBPASS);
// // mongoose
// //   .connect(
// //     `mongodb+srv://${dbuser}:${dbpass}@cluster0.p3ndcui.mongodb.net/cafe?retryWrites=true&w=majority&appName=Cluster0`
// //   )
// mongoose.connect(`mongodb://localhost:27017/cafe`)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(8080, () => {
//       console.log("🚀 Server started on port 8080");
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

// app.use("/api/users", userRouter);
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

  mongoose.connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.p3ndcui.mongodb.net/cafe?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);