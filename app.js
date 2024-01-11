import express from 'express';
import config from './config.js'
import router from "./routes/user-routes.js";
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

export default app;