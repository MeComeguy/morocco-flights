const http = "http";
const { config } = "dotenv";
const app = "./app.js";

if (process.env.NODE_ENV !== "production") {
  config();
}
const server = http.createServer(app);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});