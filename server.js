import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));

// ✅ Serve static files from the "public" folder
app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

server.listen(3000, () => {
  console.log("Daddy Chill, Server is running on http://localhost:3000");
});
