import { connectDB } from "./config/db";
import start from "./config";
import { app } from "./app";

connectDB().then(() => {
  start(app);
});
