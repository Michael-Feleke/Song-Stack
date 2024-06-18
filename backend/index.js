import dotenv from "dotenv";
import { connectDB } from "./config/database";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);

  next();
});

app.use("/api/songs");
