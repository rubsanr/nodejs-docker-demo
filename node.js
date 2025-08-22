mkdir nodejs-docker-demo && cd nodejs-docker-demo

# Create a basic app
echo '
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js App!");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
' > app.js

# Create Dockerfile
echo '
FROM node:16
WORKDIR /app
COPY . .
CMD ["node", "app.js"]
' > Dockerfile

